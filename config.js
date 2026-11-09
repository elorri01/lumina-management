/* =========================================================
   CONFIGURACIÓN — cambia SOLO estos valores y se actualiza
   toda la web (inicio, privacidad y términos).
   ========================================================= */
window.SITE = {
  company: "Lumina Management LLC",        // Nombre legal EXACTO de la LLC
  initials: "LM",                     // Iniciales para el logo
  state: "Wyoming",                   // Estado donde está registrada
  address: "30 N Gould St, Ste R, Sheridan, WY 82801, USA", // Dirección registrada de la LLC
  email: "hello@luminamanagementllc.com",      // Email con tu dominio (mejor que gmail para los bancos)
  domain: "luminamanagementllc.com",
  year: new Date().getFullYear()
};

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-cfg]").forEach(el => {
    const v = window.SITE[el.dataset.cfg];
    if (v !== undefined) el.textContent = v;
  });
  document.title = window.SITE.company + " — Personal Branding, SEO & Digital Marketing";
  document.querySelectorAll("[data-cfg-href]").forEach(el => {
    const k = el.dataset.cfgHref;
    const v = window.SITE[k];
    if (!v) return;
    el.href = k === "email" ? "mailto:" + v : v;
  });
});
