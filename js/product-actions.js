/* Boutons Ajouter au panier + Acheter maintenant */
window.productActionButtons = function (p, layout = 'card') {
  const attrs = `data-id="${p.id}" data-title="${p.title.replace(/"/g, '&quot;')}" data-price="${p.price}" data-img="${p.img}"`;
  if (layout === 'pdp') {
    return `
      <div class="fm-pdp-actions">
        <button type="button" class="btn btn-brand btn-buy-now" ${attrs}>Acheter maintenant</button>
      </div>`;
  }
  return `
    <div class="fm-card-actions">
      <button type="button" class="btn btn-brand btn-full btn-buy-now" ${attrs}>Acheter</button>
    </div>`;
};

window.bindProductActions = function (root = document) {
  root.querySelectorAll('.btn-buy-now').forEach(btn => {
    if (btn._boundBuy) return;
    btn._boundBuy = true;
    btn.addEventListener('click', e => {
      e.preventDefault();
      if (typeof buyNow === 'function') {
        buyNow(btn.dataset.id, btn.dataset.title, parseFloat(btn.dataset.price), btn.dataset.img);
      }
    });
  });
};

document.addEventListener('DOMContentLoaded', () => {
  bindProductActions(document);
});
