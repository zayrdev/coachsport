/* Homepage – slider produits & FAQ */
(function () {
  const S = window.SITE;
  if (!S) return;

  function productCard(p) {
    const save = p.compareAt ? Math.round((1 - p.price / p.compareAt) * 100) : 0;
    const promoBadge = p.promo ? '<span class="fm-badge fm-badge-promo">En promotion</span>' : '';
    const badge = p.badge ? `<span class="fm-badge">${p.badge}</span>` : '';
    const actions = window.productActionButtons ? window.productActionButtons(p, 'card') : '';
    return `
      <article class="fm-product-card">
        <a href="produit.html?id=${p.id}" class="fm-product-card-img">
          ${promoBadge}
          <span class="fm-card-badges">${badge}</span>
          <img src="${p.img}" alt="${p.title}" loading="lazy" />
        </a>
        <div class="fm-product-card-body">
          <h3><a href="produit.html?id=${p.id}">${p.title}</a></h3>
          <p class="fm-card-sub">${p.subtitle}</p>
          <div class="fm-product-tags">${(p.tags || []).map(t => `<span>${t}</span>`).join('')}</div>
          <div class="fm-price-row">
            <span class="fm-price">${p.price} €</span>
            ${p.compareAt ? `<span class="fm-price-old">${p.compareAt} €</span><span class="fm-save">-${save} %</span>` : ''}
          </div>
          ${actions}
        </div>
      </article>`;
  }

  function renderSlider() {
    const el = document.getElementById('homeProductSlider');
    if (!el) return;
    // Uniquement les programmes fitness (pas les coachings ni l'ebook)
    const programmes = S.products.filter(p => p.category === 'programme');
    el.innerHTML = programmes.map(productCard).join('');
    window.bindProductActions?.(el);
  }

  function initSliderNav() {
    const slider = document.getElementById('homeProductSlider');
    const prev = document.getElementById('sliderPrev');
    const next = document.getElementById('sliderNext');
    if (!slider) return;
    const scroll = (dir) => {
      const card = slider.querySelector('.fm-product-card');
      const w = card ? card.offsetWidth + 24 : 340;
      slider.scrollBy({ left: dir * w, behavior: 'smooth' });
    };
    prev?.addEventListener('click', () => scroll(-1));
    next?.addEventListener('click', () => scroll(1));
  }

  function renderFaq() {
    const el = document.getElementById('homeFaq');
    if (!el) return;
    el.innerHTML = S.faq.slice(0, 6).map(item => `
      <details class="fm-faq-item">
        <summary>${item.q}<span class="fm-faq-icon">+</span></summary>
        <div class="fm-faq-answer">${item.a}</div>
      </details>
    `).join('');
  }

  document.addEventListener('DOMContentLoaded', () => {
    renderSlider();
    initSliderNav();
    renderFaq();
    window.bindProductActions?.(document);
  });
})();
