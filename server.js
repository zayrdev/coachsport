require('dotenv').config();
const express = require('express');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const cors = require('cors');
const path = require('path');

const app = express();
app.use(express.static(path.join(__dirname, '')));
app.use(express.json());
app.use(cors());

app.post('/validate-promo', async (req, res) => {
  try {
    const { code } = req.body;
    if (!code) return res.status(400).json({ error: 'Code manquant' });

    // Retrieve active promotion codes from Stripe
    const promoCodes = await stripe.promotionCodes.list({ active: true, code });
    
    if (promoCodes.data.length > 0) {
      const promo = promoCodes.data[0];
      const coupon = promo.coupon;
      res.json({
        valid: true,
        id: promo.id,
        percent_off: coupon.percent_off,
        amount_off: coupon.amount_off
      });
    } else {
      res.json({ valid: false });
    }
  } catch (error) {
    console.error('Error validating promo:', error);
    res.status(500).json({ error: error.message });
  }
});

app.post('/create-checkout-session', async (req, res) => {
  try {
    const { items, discountCode } = req.body;

    if (!items || items.length === 0) {
      return res.status(400).json({ error: 'Cart is empty' });
    }

    const line_items = items.map(item => ({
      price_data: {
        currency: 'eur',
        product_data: {
          name: item.title,
          images: item.img ? [req.protocol + '://' + req.get('host') + '/' + encodeURI(item.img)] : [],
        },
        unit_amount: Math.round(item.price * 100),
      },
      quantity: item.quantity,
    }));

    const sessionConfig = {
      payment_method_types: ['card'],
      line_items,
      mode: 'payment',
      success_url: `${req.protocol}://${req.get('host')}/success.html`,
      cancel_url: `${req.protocol}://${req.get('host')}/cancel.html`,
      billing_address_collection: 'required',
    };

    if (discountCode) {
      const promoCodes = await stripe.promotionCodes.list({ active: true, code: discountCode });
      if (promoCodes.data.length > 0) {
        sessionConfig.discounts = [{ promotion_code: promoCodes.data[0].id }];
      } else {
        sessionConfig.allow_promotion_codes = true; // Fallback if code invalid
      }
    } else {
      sessionConfig.allow_promotion_codes = true;
    }

    const session = await stripe.checkout.sessions.create(sessionConfig);

    res.json({ id: session.id, url: session.url });
  } catch (error) {
    console.error('Error creating checkout session:', error);
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
