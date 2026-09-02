# CodeUI Documentation

CodeUI is a fluent, declarative C# framework for building user interfaces with Unity UI Toolkit (UIElements). It removes the boilerplate associated with UXML and USS by enabling full layout, styling, event binding, and state transitions directly in code.

---

## Features

- **Fluent API**: Chain extension methods to style, layout, and position visual elements directly in C#.
- **Design Tokens**: Standardized constants for spacing (`Spacing`), font sizes (`FontSize`), and corner radii (`Radius`).
- **Unity Data Binding**: Declarative wrappers for binding properties to Unity Data Sources via `BindText` and `BindValue`.
- **Type-Safe Transitions**: Animate CSS properties cleanly using the `TransitionProperty` enum.
- **Zero External Dependencies**: Built natively on top of `UnityEngine.UIElements`.

---

## Quick Example

Inherit from `BaseUI` to define your component hierarchy:

```csharp
using CodeUI;
using CodeUI.Extensions;
using CodeUI.Tokens;
using UnityEngine;
using UnityEngine.UIElements;

public class MainMenuUI : BaseUI
{
    protected override void Generate(VisualElement root)
    {
        root.Column()
            .Center()
            .Padding(Spacing.LG)
            .WithChildren(
                new Label("Main Menu")
                    .FontSize(FontSize.XL)
                    .Margin(bottom: Spacing.MD),

                new Button(() => Debug.Log("Start Game"))
                    .SetText("Play")
                    .Padding(Spacing.SM, Spacing.MD)
                    .BorderRadius(Radius.MD)
            );
    }
}
```

---

## Documentation

- [Getting Started Guide](articles/getting-started.md)
- [API Reference](api/CodeUI.html)
