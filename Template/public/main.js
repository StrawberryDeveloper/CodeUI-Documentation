export default {
  start: () => {
    // 1. Dein Google HTML reinkopieren
    const meta = document.createElement('meta');
    meta.name = 'google-site-verification';
    meta.content = 'yQ3TOoGePR1kIXovVU-BBVMjQG1t5pTYfuuMfL86Cjw';
    document.head.appendChild(meta);

    // 2. Dein Cloudflare Script reinkopieren
    const script = document.createElement('script');
    script.defer = true;
    script.src = 'https://static.cloudflareinsights.com/beacon.min.js';
    script.setAttribute('data-cf-beacon', '{"token": "c974dfe31ed34066a4a28dd83b224de3"}');
    document.head.appendChild(script);
  }
}