/* ══════════════════════════════════════
   MEHDI COACHING – script.js
══════════════════════════════════════ */

const navbar = document.getElementById('navbar');
if (navbar) {
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 10);
  }, { passive: true });
}
const burger = document.getElementById('burger');
const navMenuWrapper = document.getElementById('navMenuWrapper');
if (burger && navMenuWrapper) {
  burger.addEventListener('click', () => {
    navMenuWrapper.classList.toggle('open');
    burger.setAttribute('aria-expanded', navMenuWrapper.classList.contains('open'));
  });
  navMenuWrapper.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => navMenuWrapper.classList.remove('open'));
  });
}

const revealElements = document.querySelectorAll('.reveal, [data-reveal]');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('revealed');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
revealElements.forEach(el => revealObserver.observe(el));

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href === '#') return;
    const target = document.querySelector(href);
    if (!target) return;
    e.preventDefault();
    const offset = 100;
    const top = target.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});

/* ── Modal promo -20% (3 steps: email → objectif → confirmation) ── */
const PROMO_DELAY_MS = 3000;
const PROMO_DISMISSED_KEY = 'mehdi_promo_dismissed';

const promoBtn = document.getElementById('openPromoModal');
const promoModal = document.getElementById('promoModal');
const closeBtn = document.getElementById('closePromoModal');
const closeModalSuccess = document.getElementById('closeModalSuccess');

function resetPromoModal() {
  ['step1', 'step2', 'step3'].forEach((id, i) => {
    const el = document.getElementById(id);
    if (el) el.classList.toggle('active', i === 0);
  });
  const emailInput = document.getElementById('promoEmail');
  const emailGroup = emailInput?.closest('.form-group');
  if (emailInput) emailInput.value = '';
  if (emailGroup) emailGroup.classList.remove('has-error');
}

function openPromoModal() {
  if (!promoModal) return;
  resetPromoModal();
  promoModal.classList.add('active');
  document.body.classList.add('modal-open');
}

function closePromoModalFn(dismissSession = false) {
  if (!promoModal) return;
  promoModal.classList.remove('active');
  document.body.classList.remove('modal-open');
  if (dismissSession) sessionStorage.setItem(PROMO_DISMISSED_KEY, '1');
}

if (promoModal) {
  promoBtn?.addEventListener('click', () => openPromoModal());
  closeBtn?.addEventListener('click', () => closePromoModalFn(true));
  closeModalSuccess?.addEventListener('click', () => closePromoModalFn(true));
  promoModal.addEventListener('click', (e) => {
    if (e.target === promoModal) closePromoModalFn(true);
  });

  if (!sessionStorage.getItem(PROMO_DISMISSED_KEY)) {
    window.setTimeout(() => openPromoModal(), PROMO_DELAY_MS);
  }

  const step1 = document.getElementById('step1');
  const step2 = document.getElementById('step2');
  const step3 = document.getElementById('step3');
  const btnStep1 = document.getElementById('btnStep1');
  const emailInput = document.getElementById('promoEmail');
  const emailGroup = emailInput ? emailInput.closest('.form-group') : null;

  const validateEmail = (email) => String(email).toLowerCase().match(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[ ^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );

  // Step 1 → Step 2 (email → objectif)
  btnStep1?.addEventListener('click', () => {
    const email = emailInput.value.trim();
    if (validateEmail(email)) {
      emailGroup?.classList.remove('has-error');
      step1.classList.remove('active');
      step2.classList.add('active');
    } else {
      emailGroup?.classList.add('has-error');
    }
  });

  // Step 2 → Step 3 (objectif → confirmation)
  step2?.querySelectorAll('.choice-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      step2.classList.remove('active');
      step3.classList.add('active');
    });
  });
}

/* ── Testimonial slider navigation ── */
document.addEventListener('DOMContentLoaded', () => {
  const temoSlider = document.getElementById('temoSlider');
  const temoPrev = document.getElementById('temoSliderPrev');
  const temoNext = document.getElementById('temoSliderNext');
  if (temoSlider) {
    const scrollAmt = () => {
      const card = temoSlider.querySelector('.temo-card-v2');
      return card ? card.offsetWidth + 24 : 360;
    };
    temoPrev?.addEventListener('click', () => temoSlider.scrollBy({ left: -scrollAmt(), behavior: 'smooth' }));
    temoNext?.addEventListener('click', () => temoSlider.scrollBy({ left: scrollAmt(), behavior: 'smooth' }));
  }
});
