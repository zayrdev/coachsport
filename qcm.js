const qcmQuestions = [
  {
    id: 1,
    question: "Quel est votre objectif principal ?",
    options: ["Perdre du gras", "Prendre du muscle", "Se tonifier", "Transformer complètement mon physique", "Reprendre le sport sérieusement"]
  },
  {
    id: 3,
    question: "Quel âge avez-vous ?",
    options: ["-18 ans", "18-25 ans", "26-35 ans", "36-45 ans", "45+"]
  },
  {
    id: 4,
    question: "Quel est votre niveau sportif ?",
    options: ["Débutant", "Intermédiaire", "Avancé"]
  },
  {
    id: 5,
    question: "Combien de fois pouvez-vous vous entraîner par semaine ?",
    options: ["1-2 fois", "3-4 fois", "5+ fois"]
  },
  {
    id: 6,
    question: "Où vous entraînez-vous principalement ?",
    options: ["Salle de sport", "Maison", "Les deux"]
  },
  {
    id: 7,
    question: "Quelle est votre plus grande difficulté actuellement ?",
    options: ["Motivation", "Alimentation", "Régularité", "Manque de programme", "Je ne vois plus de résultats"]
  },
  {
    id: 8,
    question: "Quel résultat voulez-vous obtenir ?",
    options: ["Ventre plat", "Plus de muscles", "Plus de définition", "Plus de force", "Transformation complète"]
  },
  {
    id: 9,
    question: "Combien de kilos voulez-vous perdre ou prendre ?",
    options: ["1-5 kg", "5-10 kg", "10-20 kg", "20+ kg"]
  },
  {
    id: 10,
    question: "Combien de temps pouvez-vous consacrer à une séance ?",
    options: ["20-30 min", "45 min", "1h+", "Peu importe"]
  },
  {
    id: 11,
    question: "Avez-vous déjà suivi un programme fitness ?",
    options: ["Oui", "Non"]
  },
  {
    id: 12,
    question: "Quel est votre objectif avant l’été ?",
    options: ["Avoir des abdos", "Être plus sec", "Prendre du muscle", "Me sentir mieux dans mon corps", "Transformation Summer Body"]
  },
  {
    id: 13,
    question: "À quel point êtes-vous motivé actuellement ?",
    options: ["Moyen", "Motivé", "Très motivé", "Prêt à transformer mon physique"]
  },
  {
    id: 14,
    question: "Préférez-vous :",
    options: ["Une méthode simple", "Une méthode intense", "Un coaching personnalisé"]
  },
  {
    id: 15,
    question: "Quel type de programme recherchez-vous ?",
    options: ["Rapide et efficace", "Complet", "Débutant friendly", "Transformation extrême"]
  },
  {
    id: 16,
    question: "Votre objectif est plutôt :",
    options: ["Court terme", "Long terme", "Les deux"]
  }
];

let currentStep = 0;
let userAnswers = {};

const btnOpenFinder = document.getElementById('btnOpenFinder');
const finderModal = document.getElementById('finderModal');
const closeFinderModal = document.getElementById('closeFinderModal');
const finderContent = document.getElementById('finderContent');
const finderProgress = document.getElementById('finderProgress');
const btnOpenFinderFloating = document.getElementById('btnOpenFinderFloating');

if (btnOpenFinder && finderModal) {
  btnOpenFinder.addEventListener('click', () => {
    finderModal.classList.add('active');
    currentStep = 0;
    userAnswers = {};
    renderStep();
  });

  closeFinderModal.addEventListener('click', () => {
    finderModal.classList.remove('active');
  });
  
  finderModal.addEventListener('click', (e) => {
    if (e.target === finderModal) {
      finderModal.classList.remove('active');
    }
  });
}

if (btnOpenFinderFloating && finderModal) {
  btnOpenFinderFloating.addEventListener('click', () => {
    finderModal.classList.add('active');
    currentStep = 0;
    userAnswers = {};
    renderStep();
  });
}

function renderStep() {
  if (currentStep >= qcmQuestions.length) {
    renderResult();
    return;
  }
  
  const progressPercent = ((currentStep) / qcmQuestions.length) * 100;
  finderProgress.style.width = progressPercent + '%';

  const q = qcmQuestions[currentStep];
  
  let html = `
    <div class="qcm-step-wrapper fade-in">
      <span class="qcm-step-counter">Question ${currentStep + 1} / ${qcmQuestions.length}</span>
      <h3 class="qcm-question">${q.question}</h3>
      <div class="qcm-options">
        ${q.options.map(opt => `<button class="qcm-opt-btn" data-val="${opt}">${opt}</button>`).join('')}
      </div>
    </div>
  `;
  
  finderContent.innerHTML = html;

  const btns = finderContent.querySelectorAll('.qcm-opt-btn');
  btns.forEach(btn => {
    btn.addEventListener('click', function() {
      userAnswers[q.id] = this.getAttribute('data-val');
      currentStep++;
      renderStep();
    });
  });
}

function renderResult() {
  finderProgress.style.width = '100%';
  
  // Algorithme de recommandation
  let recommendedProgram = {
    title: "-10 Kilos Challenge",
    desc: "Un programme complet conçu pour perdre du poids sainement et durablement tout en gardant son énergie.",
    img: "images/moins10kg.jpg",
    link: "produit.html?id=10kilos"
  };

  const obj = userAnswers[1];
  const objEte = userAnswers[12];
  const kilos = userAnswers[9];
  const type = userAnswers[15];
  const pref = userAnswers[14];

  if (objEte === "Transformation Summer Body" || type === "Rapide et efficace" || type === "Transformation extrême") {
    recommendedProgram = {
      title: "Objectif SummerBody",
      desc: "Transformation physique intense pour l'été. Un plan d'action sur 30 jours pour fondre et dessiner votre corps avant la plage.",
      img: "images/summer.jpg",
      link: "produit.html?id=summerbody"
    };
  } else if (obj === "Prendre du muscle" || userAnswers[8] === "Plus de muscles") {
    recommendedProgram = {
      title: "Prendre un maximum de muscles en 3 mois",
      desc: "Construisez un physique massif et athlétique. Un protocole d'entraînement focalisé sur l'hypertrophie musculaire.",
      img: "images/muscle-3mois.jpg",
      link: "produit.html?id=muscle"
    };
  } else if (pref === "Un coaching personnalisé") {
    recommendedProgram = {
      title: "Coachings personnalisés",
      desc: "Cette offre arrive bientôt. En attendant, contactez Mehdi ou choisissez un programme clé en main.",
      img: "images/halteres.jpg",
      link: "en-construction.html?page=coachings"
    };
  }

  finderContent.innerHTML = `
    <div class="qcm-result fade-in">
      <h3 class="qcm-result-title">Voici le programme recommandé pour vous</h3>
      <div class="qcm-recommended-card">
        <div class="qcm-card-img">
          <img src="${recommendedProgram.img}" alt="${recommendedProgram.title}" />
        </div>
        <div class="qcm-card-body">
          <h4>${recommendedProgram.title}</h4>
          <p>${recommendedProgram.desc}</p>
          <a href="${recommendedProgram.link}" class="btn btn-dark btn-full" style="margin-bottom: 12px;">Accéder à ce programme</a>
          <button type="button" class="btn btn-brand btn-full" id="btnActivatePromoQcm">Activer mes -20 %</button>
        </div>
      </div>
    </div>
  `;

  const btnActivatePromo = document.getElementById('btnActivatePromoQcm');
  if (btnActivatePromo) {
    btnActivatePromo.addEventListener('click', () => {
      localStorage.setItem('coachsport_promo_code', 'QCM20'); // QCM20 Stripe promo code
      btnActivatePromo.textContent = 'Réduction activée ! ✓';
      btnActivatePromo.style.background = '#22c55e';
      btnActivatePromo.style.borderColor = '#22c55e';
      setTimeout(() => {
        window.location.href = recommendedProgram.link;
      }, 1000);
    });
  }
}
