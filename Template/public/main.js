export default {
  start: () => {
    // 2. Dein Cloudflare Script reinkopieren
    const script = document.createElement('script');
    script.defer = true;
    script.src = 'https://static.cloudflareinsights.com/beacon.min.js';
    script.setAttribute('data-cf-beacon', '{"token": "c974dfe31ed34066a4a28dd83b224de3"}');
    document.head.appendChild(script);
  }
}