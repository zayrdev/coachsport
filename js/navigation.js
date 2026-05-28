/* Navigation Fitmass – desktop dropdowns + mobile fullscreen */
(function () {
  const header = () => document.getElementById('fmHeader');

  function closeAllDropdowns(except) {
    document.querySelectorAll('.fm-has-dropdown.open').forEach(el => {
      if (el !== except) {
        el.classList.remove('open');
        el.querySelector('.fm-nav-parent')?.setAttribute('aria-expanded', 'false');
      }
    });
  }

  function initDesktopDropdowns() {
    document.querySelectorAll('.fm-has-dropdown').forEach(item => {
      const btn = item.querySelector('.fm-nav-parent');
      if (!btn) return;

      btn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const isOpen = item.classList.contains('open');
        closeAllDropdowns();
        if (!isOpen) {
          item.classList.add('open');
          btn.setAttribute('aria-expanded', 'true');
        }
      });

      item.addEventListener('mouseenter', () => {
        if (window.innerWidth > 1024) {
          closeAllDropdowns(item);
          item.classList.add('open');
          btn.setAttribute('aria-expanded', 'true');
        }
      });
      item.addEventListener('mouseleave', () => {
        if (window.innerWidth > 1024) {
          item.classList.remove('open');
          btn.setAttribute('aria-expanded', 'false');
        }
      });
    });

    document.addEventListener('click', () => closeAllDropdowns());
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeAllDropdowns();
    });
  }

  function initMobileMenu() {
    const burger = document.getElementById('fmBurger');
    const menu = document.getElementById('fmMobileMenu');
    const overlay = document.getElementById('fmMobileOverlay');
    const closeBtn = document.getElementById('fmMobileClose');

    if (!burger || !menu || !overlay) return;

    const open = () => {
      menu.classList.add('open');
      overlay.classList.add('open');
      burger.classList.add('active');
      burger.setAttribute('aria-expanded', 'true');
      menu.setAttribute('aria-hidden', 'false');
      document.body.classList.add('fm-menu-open');
    };
    const close = () => {
      menu.classList.remove('open');
      overlay.classList.remove('open');
      burger.classList.remove('active');
      burger.setAttribute('aria-expanded', 'false');
      menu.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('fm-menu-open');
    };

    burger.addEventListener('click', () => {
      menu.classList.contains('open') ? close() : open();
    });
    overlay.addEventListener('click', close);
    closeBtn?.addEventListener('click', close);

    menu.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => setTimeout(close, 150));
    });

    document.querySelectorAll('.fm-mobile-accordion').forEach(details => {
      details.addEventListener('toggle', () => {
        if (details.open) {
          document.querySelectorAll('.fm-mobile-accordion').forEach(other => {
            if (other !== details && other.open) other.open = false;
          });
        }
      });
    });
  }

  function initHeaderScroll() {
    const h = header();
    if (!h) return;
    const onScroll = () => {
      h.classList.toggle('fm-scrolled', window.scrollY > 8);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
      initDesktopDropdowns();
      initMobileMenu();
      initHeaderScroll();
    }, 0);
  });
})();
