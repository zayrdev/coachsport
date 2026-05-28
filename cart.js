// cart.js - Refactored for Direct Checkout (No Cart)

async function checkoutStripe(itemsToCheckout, discountCode = null) {
  try {
    const response = await fetch('/create-checkout-session', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ items: itemsToCheckout, discountCode })
    });
    const session = await response.json();
    if (session.url) {
      window.location.href = session.url;
    } else {
      alert('Erreur Stripe : ' + session.error);
    }
  } catch (err) {
    console.error(err);
    alert('Erreur réseau. Le serveur Node est-il démarré ?');
  }
}

function buyNow(id, title, price, img) {
  // Direct checkout with a single item
  const item = [{ id, title, price, img, quantity: 1 }];
  
  // Check if user unlocked a promo code via QCM
  const savedPromoCode = localStorage.getItem('coachsport_promo_code');
  
  // Launch checkout
  checkoutStripe(item, savedPromoCode);
}
