/* Injection du chrome global (header, footer, panier) */
(function () {
  const S = window.SITE;
  if (!S) return;

  const path = window.location.pathname.split('/').pop() || 'index.html';
  const isHome = path === '' || path === 'index.html';
  function navDropdown(id, label, items) {
    const links = items.map(i =>
      `<li><a href="${i.href}" class="fm-submenu-link">${i.label}</a></li>`
    ).join('');
    return `
      <li class="fm-nav-item fm-has-dropdown" data-dropdown="${id}">
        <button type="button" class="fm-nav-link fm-nav-parent" aria-expanded="false" aria-haspopup="true">
          <span>${label}</span>
          <svg class="fm-chevron" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>
        </button>
        <div class="fm-dropdown-panel" role="menu">
          <ul class="fm-dropdown-list">${links}</ul>
        </div>
      </li>`;
  }

  function mobileAccordion(id, label, items) {
    const links = items.map(i =>
      `<a href="${i.href}" class="fm-mobile-child">${i.label}</a>`
    ).join('');
    return `
      <details class="fm-mobile-accordion" data-accordion="${id}">
        <summary class="fm-mobile-parent">
          <span>${label}</span>
          <svg class="fm-chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>
        </summary>
        <div class="fm-mobile-submenu">${links}</div>
      </details>`;
  }

  const headerHTML = `
  <div class="fm-announcement" id="announcementBar">
    <div class="container fm-announcement-inner">
      <p>${S.promo.text}</p>
      <a href="produit.html?id=summerbody" class="fm-announcement-link">Voir l'offre</a>
    </div>
  </div>
  <header class="fm-header" id="fmHeader">
    <div class="container fm-header-inner">
      <a href="index.html" class="fm-brand">
        <span class="fm-brand-name">${S.brand.name}</span>
        <span class="fm-brand-sub">${S.brand.sub}</span>
      </a>
      <nav class="fm-nav-desktop" aria-label="Navigation principale">
        <ul class="fm-nav-list">
          <li class="fm-nav-item fm-has-dropdown" data-dropdown="programmes">
            <button type="button" class="fm-nav-link fm-nav-parent" aria-expanded="false" aria-haspopup="true">
              <span>Mes programmes</span>
              <svg class="fm-chevron" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>
            </button>
            <div class="fm-dropdown-panel" role="menu">
              <ul class="fm-dropdown-list">
                <li><a href="programmes.html" class="fm-submenu-link">Tous les programmes</a></li>
                <li><a href="produit.html?id=summerbody" class="fm-submenu-link">Objectif SummerBody</a></li>
                <li><a href="produit.html?id=10kilos" class="fm-submenu-link">-10 Kilos Challenge</a></li>
                <li><a href="produit.html?id=muscle" class="fm-submenu-link">Prendre un maximum de muscles en 3 mois</a></li>
                <li><a href="produit.html?id=mma" class="fm-submenu-link">Préparation physique MMA</a></li>
                <li><a href="produit.html?id=premiere-transformation" class="fm-submenu-link">Votre première transformation physique</a></li>
                <li><a href="produit.html?id=projet-elite-foot" class="fm-submenu-link">Projet Élite Foot</a></li>
              </ul>
            </div>
          </li>
          <li class="fm-nav-item"><a href="accompagnements.html" class="fm-nav-link">Mes accompagnements</a></li>
          <li class="fm-nav-item"><a href="pack-nutrition.html" class="fm-nav-link">Pack Nutrition</a></li>
          <li class="fm-nav-item"><a href="contact.html" class="fm-nav-link">Contact</a></li>
        </ul>
      </nav>
      <div class="fm-header-actions">
        <button type="button" class="fm-burger" id="fmBurger" aria-label="Menu" aria-expanded="false">
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>
  </header>
  <div class="fm-mobile-overlay" id="fmMobileOverlay" aria-hidden="true"></div>
  <div class="fm-mobile-menu" id="fmMobileMenu" aria-hidden="true">
    <div class="fm-mobile-header">
      <a href="index.html" class="fm-brand">
        <span class="fm-brand-name">${S.brand.name}</span>
        <span class="fm-brand-sub">${S.brand.sub}</span>
      </a>
      <button type="button" class="fm-mobile-close" id="fmMobileClose" aria-label="Fermer">&times;</button>
    </div>
    <nav class="fm-mobile-nav">
      <details class="fm-mobile-accordion" data-accordion="programmes">
        <summary class="fm-mobile-parent">
          <span>Mes programmes</span>
          <svg class="fm-chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>
        </summary>
        <div class="fm-mobile-submenu">
          <a href="programmes.html" class="fm-mobile-child">Tous les programmes</a>
          <a href="produit.html?id=summerbody" class="fm-mobile-child">Objectif SummerBody</a>
          <a href="produit.html?id=10kilos" class="fm-mobile-child">-10 Kilos Challenge</a>
          <a href="produit.html?id=muscle" class="fm-mobile-child">Prendre un maximum de muscles en 3 mois</a>
          <a href="produit.html?id=mma" class="fm-mobile-child">Préparation physique MMA</a>
          <a href="produit.html?id=premiere-transformation" class="fm-mobile-child">Votre première transformation physique</a>
          <a href="produit.html?id=projet-elite-foot" class="fm-mobile-child">Projet Élite Foot</a>
        </div>
      </details>
      <a href="accompagnements.html" class="fm-mobile-link">Mes accompagnements</a>
      <a href="pack-nutrition.html" class="fm-mobile-link">Pack Nutrition</a>
      <a href="contact.html" class="fm-mobile-link">Contact</a>
    </nav>
    <div class="fm-mobile-footer">
      <button type="button" class="btn btn-outline btn-full" id="btnOpenFinderMobile">Trouvez votre programme</button>
    </div>
  </div>`;

  const footerHTML = `
  <footer class="fm-footer">
    <div class="container">
      <div class="fm-footer-grid">
        <div>
          <span class="fm-brand-name">${S.brand.name}</span>
          <p class="fm-footer-desc">Programmes de musculation premium pour hommes — perte de gras, prise de muscle, nutrition.</p>
        </div>
        <div>
          <h4>Programmes</h4>
          <ul>
            <li><a href="programmes.html">Tous les programmes</a></li>
            <li><a href="produit.html?id=summerbody">Objectif SummerBody</a></li>
            <li><a href="produit.html?id=10kilos">-10 Kilos Challenge</a></li>
            <li><a href="produit.html?id=muscle">Prendre un maximum de muscles en 3 mois</a></li>
            <li><a href="produit.html?id=mma">Préparation physique optimisée pour le MMA</a></li>
          </ul>
        </div>
        <div>
          <h4>Accompagnements</h4>
          <ul>
            <li><a href="accompagnements.html">Mes accompagnements</a></li>
            <li><a href="produit.html?id=coaching-ligne">Coaching en ligne</a></li>
            <li><a href="produit.html?id=coaching-presentiel">Coaching en présentiel</a></li>
            <li><a href="pack-nutrition.html">Pack Nutrition</a></li>
            <li><a href="produit.html?id=ebook">E-book Recettes Healthy</a></li>
            <li><a href="contact.html">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4>Informations</h4>
          <ul>
            <li><a href="avis.html">Avis clients</a></li>
            <li><a href="faq.html">FAQ</a></li>
            <li><a href="index.html#contact">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4>Légal</h4>
          <ul>
            <li><a href="#">Politique de remboursement</a></li>
            <li><a href="#">Politique de confidentialité</a></li>
            <li><a href="#">Conditions d'utilisation</a></li>
            <li><a href="#">Politique d'expédition</a></li>
            <li><a href="#">Conditions générales de vente</a></li>
            <li><a href="#">Mentions légales</a></li>
          </ul>
        </div>
      </div>
      <div class="fm-footer-bottom">
        <div class="fm-payment-methods">
          <span class="payment-label">Moyens de paiement acceptés :</span>
          <div class="payment-icons">
            <span class="payment-icon">Visa</span>
            <span class="payment-icon">Mastercard</span>
            <span class="payment-icon">Apple Pay</span>
            <span class="payment-icon">Google Pay</span>
            <span class="payment-icon">PayPal</span>
            <span class="payment-icon">American Express</span>
          </div>
        </div>
        <p>&copy; ${new Date().getFullYear()} ${S.brand.name} ${S.brand.sub}. Tous droits réservés.</p>
      </div>
    </div>
  </footer>`;



  const inject = (id, html) => {
    const el = document.getElementById(id);
    if (el) el.innerHTML = html;
  };

  document.addEventListener('DOMContentLoaded', () => {
    inject('site-header', headerHTML);
    inject('site-footer', footerHTML);
    document.body.classList.add('fm-layout', isHome ? 'fm-page-home' : '');

    const finderMobile = document.getElementById('btnOpenFinderMobile');
    const finderBtn = document.getElementById('btnOpenFinder');
    if (finderMobile && finderBtn) {
      finderMobile.addEventListener('click', () => {
        document.getElementById('fmMobileMenu')?.classList.remove('open');
        document.getElementById('fmMobileOverlay')?.classList.remove('open');
        finderBtn.click();
      });
    }
  });
})();
