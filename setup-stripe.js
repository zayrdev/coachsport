require('dotenv').config();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

async function setup() {
  try {
    console.log('Checking for QCM coupon...');
    let coupons = await stripe.coupons.list();
    let coupon = coupons.data.find(c => c.percent_off === 20 && c.name === 'QCM -20%');
    
    if (!coupon) {
      console.log('Creating coupon...');
      coupon = await stripe.coupons.create({
        percent_off: 20,
        duration: 'once',
        name: 'QCM -20%'
      });
    }

    console.log('Checking for QCM20 promotion code...');
    let promoCodes = await stripe.promotionCodes.list({ coupon: coupon.id });
    let promoCode = promoCodes.data.find(p => p.code === 'QCM20');
    
    if (!promoCode) {
      console.log('Creating promotion code...');
      promoCode = await stripe.promotionCodes.create({
        coupon: coupon.id,
        code: 'QCM20'
      });
    }
    
    console.log('Setup complete! QCM20 is active.');
  } catch (err) {
    console.error('Error:', err);
  }
}

setup();
