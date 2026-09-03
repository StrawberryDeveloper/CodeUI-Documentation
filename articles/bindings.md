# Data Bindings

Unity UI Toolkit supports Data Binding to automatically synchronize model properties with UI controls. CodeUI provides type-safe lambda expression extensions that eliminate string-based property path errors.

---

## 1. The Problem with String-Based Bindings

Traditional UI Toolkit bindings rely on magic strings to reference property names on data sources:

```csharp
// Error-prone: Hardcoded string property paths
label.SetBinding("text", new DataBinding
{
    dataSourcePath = new PropertyPath("PlayerName"),
    bindingMode = BindingMode.ToTarget
});
```

### Why String-Based Bindings Are Problematic

- **No Compile-Time Verification**: A typo in `"PlayerName"` (such as `"Playername"` or `"Player_Name"`) compiles without warnings and fails silently at runtime.
- **Refactoring Vulnerability**: Renaming properties in your ViewModel or ScriptableObject breaks string paths across your project without triggering IDE refactoring tools.
- **No Type Safety**: The compiler cannot verify whether the source property type matches the target UI element property type.

---

## 2. Strongly-Typed Lambda Bindings in CodeUI

CodeUI replaces string paths with C# Expression Lambdas (`Expression<Func<TData, TValue>>`). The compiler extracts property names directly from code expressions, providing full compile-time safety and automatic refactoring support.

### Text Binding (`BindText`)

Use `BindText` to bind the text of any `TextElement` (e.g., `Label`, `Button`) to a string property:

```csharp
// Strongly-typed string binding
label.BindText(playerData, data => data.PlayerName);
```

### Value Binding (`BindValue`)

Use `BindValue` for interactive controls implementing `INotifyValueChanged<TValue>` (e.g., `Toggle`, `Slider`, `TextField`, `IntegerField`):

```csharp
// Two-way binding for interactive controls
toggle.BindValue(settingsData, s => s.MuteAudio);

slider.BindValue(playerData, p => p.VolumeLevel);
```

By default, `BindValue` uses `BindingMode.TwoWay`, meaning user edits in the UI update the data source immediately, and model changes update the UI.

---

## 3. General Property Binding (`SetUnityBinding`)

For custom properties or non-standard bindings, use `SetUnityBinding` with target and source lambda expressions:

```csharp
// Bind custom property (e.g., progress bar value)
progressBar.SetUnityBinding(
    targetProperty: bar => bar.value,
    dataSource: playerData,
    applyDataSource: true,
    sourceProperty: data => data.HealthRatio,
    mode: BindingMode.ToTarget
);
```

---

## 4. Assigning Data Sources (`SetUnityDataSource`)

Data sources can be assigned directly to individual elements or to a root container:

```csharp
// Set data source on root container
root.SetUnityDataSource(viewModel);
```
