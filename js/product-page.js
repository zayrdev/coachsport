/* Page produit — présentation éditoriale (texte, sans cartes) */
(function () {
  const catalog = {
    summerbody: {
      label: 'Programme clé en main · Perte de gras · 30 jours',
      pitch: 'Transformation physique intense sur 30 jours pour fondre et dessiner votre silhouette avant l\'été.',
      intro: 'Un plan d\'action court et structuré : nutrition maîtrisée et séances métaboliques efficaces. Chaque semaine a un objectif clair pour avancer sans improviser.',
      forWho: 'Ce programme convient si vous voulez un choc avant l\'été, si vous pouvez vous entraîner 3 à 4 fois par semaine en salle, et si vous cherchez un protocole clair plutôt qu\'une liste d\'exercices sans fil conducteur.',
      includes: 'Vous recevez un plan nutritionnel sur 30 jours, des séances brûle-graisse courtes et progressives, des vidéos pour chaque mouvement important, et un suivi hebdomadaire pour rester sur la bonne trajectoire.',
      how: 'Après votre commande, vous recevez l\'accès par email. Consultez le programme sur votre téléphone, commencez par la semaine 1, et suivez l\'ordre des séances indiqué.'
    },
    '10kilos': {
      label: 'Programme clé en main · Perte de poids · 45 jours',
      pitch: 'Perdez jusqu\'à 10 kg sainement en 45 jours avec un cadre nutrition et entraînement équilibré.',
      intro: 'Conçu pour fondre durablement sans s\'épuiser : déficit maîtrisé, entraînement qui préserve le muscle, et habitudes tenables sur la durée.',
      forWho: 'Idéal si votre objectif est une perte de poids marquée, que vous voulez garder de l\'énergie à l\'entraînement, et que vous êtes débutant ou confirmé en salle.',
      includes: 'Le programme comprend un plan alimentaire flexible, des séances brûle-graisse, l\'accès à une communauté privée, et une progression pensée sur 45 jours pour limiter la stagnation.',
      how: 'Vous recevez l\'accès après paiement, vous démarrez par la semaine 1 sans changer l\'ordre des séances, et vous adaptez les charges à votre niveau.'
    },
    muscle: {
      label: 'Programme clé en main · Prise de muscle · 90 jours',
      pitch: '90 jours pour construire un physique massif avec hypertrophie et surcharge progressive.',
      intro: 'Cycles de volume et d\'intensité, nutrition de croissance et travail sur l\'exécution pour tirer le maximum de chaque série.',
      forWho: 'Pour ceux qui visent la prise de masse et la force, qui s\'entraînent en salle avec barres et haltères, et qui veulent un plan structuré sur trois mois.',
      includes: 'Vous avez des cycles de progression, un guide nutrition prise de masse, une bibliothèque vidéo des mouvements, et un programme complet sur 90 jours.',
      how: 'Prévoyez au minimum quatre séances par semaine, respectez l\'ordre des séances du programme, et augmentez les charges lorsque la technique est maîtrisée.'
    },
    mma: {
      label: 'Programme performance · Sur-mesure',
      pitch: 'Explosivité, endurance, force et prévention des blessures pour la performance.',
      intro: 'Protocoles inspirés du travail des combattants : circuits, puissance, cardio spécifique et renforcement des points faibles.',
      forWho: 'Destiné aux pratiquants de MMA ou sports de combat, niveau intermédiaire à avancé, qui ont besoin d\'un conditionnement spécifique.',
      includes: 'Le plan inclut du conditionnement métabolique, du travail explosif, des exercices de prévention, et une structure adaptable à votre calendrier.',
      how: 'Organisez vos séances lourdes en début de semaine, respectez les jours de récupération, et contactez Mehdi sur Snapchat si vous avez une question.'
    },
    ebook: {
      label: 'Guide nutrition · PDF',
      pitch: 'Plus de 15 recettes healthy avec macros pour sèche ou prise de masse.',
      intro: 'Des repas simples, rapides et alignés sur vos objectifs — sans passer des heures en cuisine.',
      forWho: 'Pour ceux qui manquent d\'idées en cuisine, qui veulent des macros sans tout recalculer, que ce soit en sèche ou en prise de masse.',
      includes: 'Le PDF contient plus de 15 recettes, les macros par plat, des astuces meal prep, et un téléchargement immédiat après achat.',
      how: 'Vous recevez le lien par email, gardez le PDF sur votre téléphone, et composez vos journées selon votre objectif du moment.'
    }
  };

  function priceHTML(p, compact) {
    if (!p.compareAt) {
      return `<p class="fm-pdp-price${compact ? ' fm-pdp-price--compact' : ''}"><strong>${p.price} €</strong></p>`;
    }
    const pct = Math.round((1 - p.price / p.compareAt) * 100);
    return `<p class="fm-pdp-price${compact ? ' fm-pdp-price--compact' : ''}">
      <strong>${p.price} €</strong>
      <span class="fm-pdp-price-was">${p.compareAt} €</span>
      <span class="fm-pdp-price-off">-${pct} %</span>
    </p>`;
  }

  function renderPDP(p, extra) {
    const actions = window.productActionButtons(p, 'pdp');
    const meta = [extra.label, p.subtitle].filter(Boolean).join(' · ');

    return `
    <article class="fm-pdp" data-product-id="${p.id}">
      <header class="fm-pdp-hero">
        <div class="fm-pdp-hero__media">
          <img src="${p.img}" alt="${p.title}" />
          <div class="fm-pdp-hero__shade"></div>
        </div>
        <div class="fm-pdp-hero__copy">
          <p class="fm-pdp-crumb"><a href="programmes.html">Programmes</a></p>
          ${p.badge ? `<p class="fm-pdp-flag">${p.badge}${p.promo ? ' · En promotion' : ''}</p>` : ''}
          <h1>${p.title}</h1>
          <p class="fm-pdp-meta">${meta}</p>
        </div>
      </header>

      <div class="fm-pdp-buy">
        <div class="fm-pdp-buy__inner">
          ${priceHTML(p)}
          <p class="fm-pdp-lead">${extra.pitch}</p>
          <div class="fm-pdp-buy__actions">${actions}</div>
          <p class="fm-pdp-note">Paiement sécurisé. Accès envoyé par email après commande.</p>
        </div>
      </div>

      <div class="fm-pdp-prose">
        <div class="fm-pdp-prose__inner">
          <h2>À propos de ce programme</h2>
          <p>${extra.intro}</p>

          <h2>Ce que vous obtenez</h2>
          <p>${extra.includes}</p>

          <h2>Pour qui</h2>
          <p>${extra.forWho}</p>

          <h2>Comment démarrer</h2>
          <p>${extra.how}</p>
        </div>
      </div>

      <footer class="fm-pdp-sticky-bar">
        <div class="fm-pdp-sticky-bar__inner">
          ${priceHTML(p, true)}
          <div class="fm-pdp-sticky-bar__actions">${actions}</div>
        </div>
      </footer>
    </article>`;
  }

  document.addEventListener('DOMContentLoaded', () => {
    const id = new URLSearchParams(location.search).get('id');
    const p = window.SITE?.getProduct(id);
    const main = document.getElementById('productMain');
    if (!main) return;

    if (!p) {
      main.innerHTML = '<div class="fm-pdp-empty"><p>Produit introuvable.</p><a href="programmes.html">Voir les programmes</a></div>';
      return;
    }

    const extra = catalog[id] || catalog.summerbody;
    document.title = p.title + ' – Mehdi Coaching';
    document.body.classList.add('fm-pdp-page');
    main.innerHTML = renderPDP(p, extra);
    window.bindProductActions?.(main);
  });
})();
