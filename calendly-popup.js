/* ═══════════════════════════════════════════════════
   CALENDLY POPUP PREMIUM – Mehdi Coaching
   ═══════════════════════════════════════════════════ */

class CalendlyPopup {
  constructor() {
    this.calendlyUrl = 'https://calendly.com/mehdidotk/30min';
    this.popup = null;
    this.overlay = null;
    this.iframe = null;
    this.isOpen = false;
    this.init();
  }

  init() {
    this.createPopupHTML();
    this.attachEventListeners();
    this.loadCalendlyScript();
  }

  createPopupHTML() {
    // Création du HTML de la popup
    const popupHTML = `
      <div class="calendly-popup-overlay" id="calendlyPopup">
        <div class="calendly-popup-content">
          <div class="calendly-popup-header">
            <div class="calendly-popup-title">
              <div class="calendly-popup-avatar">M</div>
              <div>
                <h3>Réserver un appel gratuit</h3>
                <p class="calendly-popup-subtitle">Appel d'évaluation de 30 minutes</p>
              </div>
            </div>
            <button class="calendly-popup-close" id="calendlyPopupClose" aria-label="Fermer">&times;</button>
          </div>
          <div class="calendly-widget-container">
            <div class="calendly-loading" id="calendlyLoading">
              <div class="calendly-loading-spinner"></div>
              <p class="calendly-loading-text">Chargement du calendrier...</p>
            </div>
            <div id="calendlyWidget" style="width: 100%; height: 100%; min-height: 500px;"></div>
          </div>
        </div>
      </div>
    `;

    // Ajout au body
    document.body.insertAdjacentHTML('beforeend', popupHTML);

    // Références aux éléments
    this.overlay = document.getElementById('calendlyPopup');
    this.closeBtn = document.getElementById('calendlyPopupClose');
    this.widgetContainer = document.getElementById('calendlyWidget');
    this.loadingElement = document.getElementById('calendlyLoading');
  }

  loadCalendlyScript() {
    // Vérifier si le script Calendly est déjà chargé
    if (window.Calendly) {
      this.initCalendlyWidget();
      return;
    }

    // Charger le script Calendly
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    script.onload = () => {
      this.initCalendlyWidget();
    };
    script.onerror = () => {
      console.error('Erreur lors du chargement du script Calendly');
      this.showError();
    };
    document.head.appendChild(script);
  }

  initCalendlyWidget() {
    if (!window.Calendly) {
      console.error('Calendly n\'est pas disponible');
      this.showError();
      return;
    }

    // Initialiser le widget Calendly avec des options optimisées
    try {
      window.Calendly.initInlineWidget({
        url: this.calendlyUrl,
        parentElement: this.widgetContainer,
        prefill: {},
        utm: {},
        // Options pour éviter les problèmes de cookies
        hideEventTypeDetails: false,
        hideGdprBanner: true
      });

      // Surveiller le chargement du widget
      this.monitorWidgetLoad();

    } catch (error) {
      console.error('Erreur lors de l\'initialisation de Calendly:', error);
      this.showError();
    }
  }

  monitorWidgetLoad() {
    let attempts = 0;
    const maxAttempts = 20;
    
    const checkWidget = () => {
      attempts++;
      
      // Vérifier si le widget Calendly est chargé
      const calendlyFrame = this.widgetContainer.querySelector('iframe');
      const calendlyContent = this.widgetContainer.querySelector('[data-testid="calendly-widget"]');
      
      if (calendlyFrame || calendlyContent) {
        // Le widget est chargé
        setTimeout(() => {
          if (this.loadingElement) {
            this.loadingElement.style.display = 'none';
          }
          // Cacher les bannières cookies si elles apparaissent
          this.hideCookieBanners();
        }, 500);
      } else if (attempts < maxAttempts) {
        // Réessayer après 200ms
        setTimeout(checkWidget, 200);
      } else {
        // Timeout - afficher erreur
        console.error('Timeout lors du chargement du widget Calendly');
        this.showError();
      }
    };
    
    checkWidget();
  }

  hideCookieBanners() {
    // Cacher les bannières cookies de Calendly
    const style = document.createElement('style');
    style.textContent = `
      .calendly-popup-content .calendly-privacy-banner,
      .calendly-popup-content .cookie-consent,
      .calendly-popup-content [data-testid*="cookie"],
      .calendly-popup-content [data-testid*="consent"],
      .calendly-popup-content [class*="cookie"],
      .calendly-popup-content [class*="consent"] {
        display: none !important;
      }
    `;
    document.head.appendChild(style);
  }

  showError() {
    if (this.loadingElement) {
      this.loadingElement.innerHTML = `
        <div style="text-align: center; padding: 40px;">
          <p style="color: #666; margin-bottom: 16px;">Une erreur est survenue lors du chargement du calendrier.</p>
          <button onclick="window.open('${this.calendlyUrl}', '_blank')" class="btn btn-brand">
            Ouvrir Calendly dans un nouvel onglet
          </button>
        </div>
      `;
    }
  }

  attachEventListeners() {
    // Bouton fermer
    if (this.closeBtn) {
      this.closeBtn.addEventListener('click', () => this.close());
    }

    // Clic sur l'overlay pour fermer
    if (this.overlay) {
      this.overlay.addEventListener('click', (e) => {
        if (e.target === this.overlay) {
          this.close();
        }
      });
    }

    // Touche Échap pour fermer
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.isOpen) {
        this.close();
      }
    });

    // Empêcher le scroll du body quand la popup est ouverte
    this.overlay.addEventListener('transitionend', () => {
      if (this.isOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    });
  }

  open() {
    if (this.isOpen) return;

    this.isOpen = true;
    this.overlay.classList.add('active');

    // Focus sur le bouton fermer pour l'accessibilité
    setTimeout(() => {
      if (this.closeBtn) {
        this.closeBtn.focus();
      }
    }, 100);

    // Analytics tracking (optionnel)
    if (typeof gtag !== 'undefined') {
      gtag('event', 'calendly_popup_open', {
        event_category: 'engagement',
        event_label: 'booking'
      });
    }
  }

  close() {
    if (!this.isOpen) return;

    this.isOpen = false;
    this.overlay.classList.remove('active');

    // Restaurer le scroll du body
    document.body.style.overflow = '';

    // Analytics tracking (optionnel)
    if (typeof gtag !== 'undefined') {
      gtag('event', 'calendly_popup_close', {
        event_category: 'engagement',
        event_label: 'booking'
      });
    }
  }

  // Méthode statique pour lier les boutons
  static bindButtons() {
    const buttons = document.querySelectorAll('[data-calendly-popup], .btn-calendly-popup, .reserve-appel-btn');
    
    buttons.forEach(button => {
      // Éviter les doublons
      if (button.hasAttribute('data-calendly-bound')) return;
      
      button.setAttribute('data-calendly-bound', 'true');
      button.addEventListener('click', (e) => {
        e.preventDefault();
        if (!window.calendlyPopup) {
          window.calendlyPopup = new CalendlyPopup();
        }
        window.calendlyPopup.open();
      });
    });
  }
}

// Initialisation automatique quand le DOM est prêt
document.addEventListener('DOMContentLoaded', () => {
  // Créer l'instance globale
  window.calendlyPopup = new CalendlyPopup();
  
  // Lier les boutons existants
  CalendlyPopup.bindButtons();
  
  // Observer les changements dans le DOM pour les nouveaux boutons
  const observer = new MutationObserver(() => {
    CalendlyPopup.bindButtons();
  });
  
  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
});

// Export pour utilisation dans d'autres scripts
if (typeof module !== 'undefined' && module.exports) {
  module.exports = CalendlyPopup;
}
