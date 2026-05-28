/* Rendu pages catalogue */
window.renderProductGrid = function (containerId, products) {
  const el = document.getElementById(containerId);
  const S = window.SITE;
  if (!el || !S) return;
  // Par défaut : uniquement les programmes fitness (pas les coachings ni l'ebook)
  const list = products || S.products.filter(p => p.category === 'programme');
  el.innerHTML = list.map(p => {
    const save = p.compareAt ? Math.round((1 - p.price / p.compareAt) * 100) : 0;
    const promoBadge = p.compareAt ? '<span class="fm-badge fm-badge-promo">Promo</span>' : '';
    const badge = p.badge ? `<span class="fm-badge">${p.badge}</span>` : '';
    const actions = window.productActionButtons ? window.productActionButtons(p, 'card') : '';
    return `
      <article class="fm-product-card fm-programs-page-card">
        <a href="produit.html?id=${p.id}" class="fm-product-card-img">
          <div class="fm-card-badges">
            ${promoBadge}
            ${badge}
          </div>
          <img src="${p.img}" alt="${p.title}" loading="lazy" />
        </a>
        <div class="fm-product-card-body">
          <h3><a href="produit.html?id=${p.id}">${p.title}</a></h3>
          <p class="fm-card-sub">${p.subtitle}</p>
          ${(p.tags || []).length ? `<p class="fm-card-meta">${(p.tags || []).join(' · ')}</p>` : ''}
          <div class="fm-price-row">
            <span class="fm-price">${p.price} €</span>
            ${p.compareAt ? `<span class="fm-price-old">${p.compareAt} €</span><span class="fm-save">-${save} %</span>` : ''}
          </div>
          ${actions}
          <a href="produit.html?id=${p.id}" class="fm-card-detail-link">Voir le détail →</a>
        </div>
      </article>`;
  }).join('');
  window.bindProductActions?.(el);
};

window.renderPageFaq = function (containerId) {
  const el = document.getElementById(containerId);
  const S = window.SITE;
  if (!el || !S) return;
  el.innerHTML = S.faq.map(item => `
    <details class="fm-faq-item">
      <summary>${item.q}<span class="fm-faq-icon">+</span></summary>
      <div class="fm-faq-answer">${item.a}</div>
    </details>
  `).join('');
};
