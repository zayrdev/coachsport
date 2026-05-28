/* Catalogue Mehdi Coaching — produits réels uniquement */
window.SITE = {
  brand: { name: 'MEHDI', sub: 'COACHING' },
  trust: {},
  promo: { text: 'OFFRE SPÉCIALE : Objectif SummerBody à 49 €', code: 'MEHDI10' },
  contact: { email: 'staff@mehdicoaching.fr', snap: 'https://snapchat.com/t/cAu802hZ' },

  products: [
    {
      id: 'summerbody',
      category: 'programme',
      title: 'Objectif SummerBody',
      subtitle: 'Perte de gras · 30 jours',
      badge: 'Offre spéciale',
      price: 24.99,
      compareAt: 50,
      img: 'images/summer.jpg',
      tags: ['1 mois', 'Tous niveaux', 'Perte de gras'],
      details: `Tu veux être prêt pour l'été ? L'Objectif SummerBody est le programme le plus efficace pour transformer ton physique en 30 jours. Conçu par Mehdi pour brûler le gras, révéler ta musculature et te donner confiance en toi avant la plage.`,
      benefits: [
        'Programme complet sur 30 jours, semaine par semaine',
        'Séances optimisées pour brûler le gras rapidement',
        'Plan nutrition inclus pour maximiser les résultats',
        'Adapté à tous les niveaux, débutant à confirmé',
        'Résultats visibles dès la 2e semaine',
        'Accès immédiat après commande, à vie',
        'Méthode testée sur +50 clients avec résultats prouvés',
        'Objectif : corps sec, défini et athlétique'
      ],
      longDescription: `
        <h2>Pourquoi l'Objectif SummerBody ?</h2>
        <p>L'été approche et tu veux être au top de ta forme. Ce programme a été conçu pour une seule chose : te transformer physiquement en 30 jours. Pas de promesses vides — une méthode structurée, progressive et éprouvée sur des dizaines de clients.</p>
        <h2>Ce que contient le programme</h2>
        <p>Le programme SummerBody est organisé semaine par semaine, avec une progression claire. Chaque séance est détaillée : exercices, séries, répétitions, temps de repos. Tu sais exactement quoi faire, quand le faire, et pourquoi.</p>
        <p>En parallèle, tu reçois un plan nutrition adapté à ton objectif de sèche. Pas de régime draconien — une alimentation intelligente qui te permet de perdre du gras tout en gardant ton énergie et ta masse musculaire.</p>
        <h2>Pour qui est ce programme ?</h2>
        <p>Ce programme est fait pour toi si tu veux perdre du gras, te définir et avoir un physique athlétique avant l'été. Que tu sois débutant ou que tu t'entraînes déjà, le programme s'adapte à ton niveau. L'important, c'est la régularité et la méthode.</p>
        <h2>Les résultats</h2>
        <p>Avec de l'assiduité, les premiers changements sont visibles dès la 2e semaine. En 30 jours, tu peux perdre plusieurs kilos de gras, révéler ta musculature et te sentir beaucoup mieux dans ton corps. Les témoignages de nos clients parlent d'eux-mêmes.</p>
        <h2>Accès et livraison</h2>
        <p>Après ta commande, tu reçois immédiatement un accès à ton programme. Consultable depuis ton smartphone, ta tablette ou ton ordinateur, à n'importe quel moment. Accès à vie, sans abonnement.</p>
      `
    },
    {
      id: '10kilos',
      category: 'programme',
      title: '-10 Kilos Challenge',
      subtitle: 'Perte de poids · 45 jours',
      badge: 'Best-seller',
      price: 99.99,
      img: 'images/moins10kg.jpg',
      tags: ['45 jours', 'Tous niveaux', 'Perte de gras'],
      details: `Le -10 Kilos Challenge est le programme le plus populaire de Mehdi Coaching. En 45 jours, tu suis une méthode progressive et structurée pour perdre du poids durablement, sans te priver et sans te blesser.`,
      benefits: [
        'Programme progressif sur 45 jours',
        'Méthode éprouvée pour perdre du poids durablement',
        'Plan alimentaire simple et efficace inclus',
        'Séances adaptées à tous les niveaux',
        'Progression semaine après semaine',
        'Résultats durables, pas d\'effet yoyo',
        'Accès immédiat et à vie',
        'Le programme le plus vendu de Mehdi Coaching'
      ],
      longDescription: `
        <h2>Le programme le plus populaire</h2>
        <p>Le -10 Kilos Challenge est le programme best-seller de Mehdi Coaching. Des dizaines de clients l'ont suivi et ont obtenu des résultats concrets. La méthode est simple : progression régulière, alimentation intelligente, et entraînements efficaces.</p>
        <h2>Comment fonctionne le programme ?</h2>
        <p>Sur 45 jours, tu suis un plan d'entraînement progressif qui monte en intensité semaine après semaine. Chaque séance est expliquée en détail — tu n'as pas besoin d'expérience préalable pour commencer.</p>
        <p>Le programme inclut également des conseils nutritionnels clairs et pratiques. Pas de régime strict — une approche équilibrée qui te permet de manger correctement tout en créant le déficit calorique nécessaire à la perte de poids.</p>
        <h2>Pourquoi ce programme fonctionne ?</h2>
        <p>La plupart des gens échouent parce qu'ils n'ont pas de plan clair. Ce programme te donne exactement ce dont tu as besoin : une structure, une progression, et des objectifs atteignables. Tu sais où tu vas et comment y arriver.</p>
        <h2>Pour qui ?</h2>
        <p>Ce programme est idéal pour toute personne qui veut perdre du poids de façon saine et durable. Débutant ou pratiquant régulier — la méthode s'adapte à toi.</p>
      `
    },
    {
      id: 'muscle',
      category: 'programme',
      title: 'Prendre un maximum de muscles en 3 mois',
      subtitle: 'Hypertrophie · 90 jours',
      badge: 'Best-seller',
      price: 99.99,
      img: 'images/muscle-3mois.jpg',
      tags: ['90 jours', 'Tous niveaux', 'Prise de muscle'],
      details: `Tu veux construire un physique massif et athlétique ? Ce programme de 90 jours est conçu pour maximiser ta prise de muscle grâce à des méthodes d'hypertrophie éprouvées. Progression garantie semaine après semaine.`,
      benefits: [
        'Programme hypertrophie sur 90 jours complets',
        'Méthodes d\'entraînement avancées (surcharge progressive)',
        'Plan nutrition pour la prise de masse inclus',
        'Progression mesurable semaine après semaine',
        'Adapté à tous les niveaux',
        'Exercices expliqués en détail',
        'Accès immédiat et à vie',
        'Résultats visibles dès le premier mois'
      ],
      longDescription: `
        <h2>Construire du muscle, ça s'apprend</h2>
        <p>Prendre du muscle ne se fait pas au hasard. Il faut une méthode, une progression, et une alimentation adaptée. Ce programme de 90 jours te donne tout ça — structuré, progressif, et basé sur les principes scientifiques de l'hypertrophie musculaire.</p>
        <h2>La méthode</h2>
        <p>Le programme est organisé en 3 phases de 30 jours, chacune avec un objectif précis. La première phase pose les bases et corrige les fondamentaux. La deuxième monte en intensité. La troisième pousse tes limites pour maximiser les gains.</p>
        <p>Chaque séance est construite autour des exercices les plus efficaces pour la prise de masse : squats, développé couché, tractions, rowing, développé militaire. Les exercices d'isolation viennent compléter le travail pour sculpter chaque groupe musculaire.</p>
        <h2>La nutrition</h2>
        <p>Sans une alimentation adaptée, même le meilleur programme ne donnera pas de résultats. Le programme inclut un guide nutritionnel complet pour la prise de masse : calcul des besoins caloriques, répartition des macros, conseils pratiques pour manger suffisamment sans prendre trop de gras.</p>
        <h2>Les résultats attendus</h2>
        <p>En 3 mois de suivi sérieux, tu peux gagner plusieurs kilos de muscle, augmenter significativement ta force sur tous les exercices de base, et transformer ton physique de façon visible. Les résultats dépendent de ton assiduité — mais la méthode, elle, est prouvée.</p>
      `
    },
    {
      id: 'mma',
      category: 'programme',
      title: 'Préparation physique optimisée pour le MMA',
      subtitle: 'Performance · Sur-mesure',
      badge: 'Avancé',
      price: 74.99,
      img: 'images/mma.jpg',
      tags: ['Sur-mesure', 'Avancé', 'Performance'],
      details: `Un programme conçu spécifiquement pour les combattants MMA qui veulent passer au niveau supérieur. Explosivité, cardio, force fonctionnelle et prévention des blessures — tout ce qu'il faut pour performer sur le tapis.`,
      benefits: [
        'Programme spécifique aux exigences du MMA',
        'Développement de l\'explosivité et de la puissance',
        'Cardio spécifique aux combats (intervalles, circuits)',
        'Renforcement musculaire fonctionnel',
        'Prévention des blessures et mobilité',
        'Adapté aux combattants de tous niveaux',
        'Périodisation intelligente pour les compétitions',
        'Accès immédiat et à vie'
      ],
      longDescription: `
        <h2>La préparation physique, l'arme secrète du combattant</h2>
        <p>En MMA, la technique est essentielle — mais sans une condition physique au top, elle ne suffit pas. Ce programme est conçu pour faire de toi un athlète complet : plus explosif, plus endurant, plus fort, et moins sujet aux blessures.</p>
        <h2>Ce que couvre le programme</h2>
        <p>Le programme aborde tous les aspects de la préparation physique pour le MMA : la force et la puissance musculaire, le cardio spécifique aux combats (intervalles courts et longs), la mobilité et la flexibilité, et le renforcement des zones vulnérables aux blessures (épaules, genoux, cervicales).</p>
        <p>Chaque séance est construite pour simuler les exigences d'un combat : efforts intenses, récupération courte, répétition. Tu développes la capacité à maintenir ton niveau de performance du premier au dernier round.</p>
        <h2>Pour quel niveau ?</h2>
        <p>Ce programme est adapté aux combattants qui ont déjà une base technique et qui veulent améliorer leur condition physique. Que tu te prépares pour une compétition ou que tu veuilles simplement progresser, le programme s'adapte à tes objectifs.</p>
        <h2>Résultats attendus</h2>
        <p>Après quelques semaines de suivi, tu ressentiras une amélioration nette de ton cardio, de ta puissance de frappe et de ta résistance à la fatigue. Ta récupération entre les rounds sera meilleure, et tu seras moins sujet aux blessures grâce au travail de prévention intégré.</p>
      `
    },
    {
      id: 'premiere-transformation',
      category: 'programme',
      title: 'Votre première transformation physique',
      subtitle: 'Transformation · Débutants & Intermédiaires',
      badge: 'Nouveau',
      price: 49.49,
      img: 'images/premieretrans.jpg',
      tags: ['Tous niveaux', 'Transformation', 'Résultats visibles'],
      details: `Tu veux changer ton corps pour la première fois et ne sais pas par où commencer ? Ce programme est fait pour toi. Une méthode claire, progressive et complète pour vivre ta première vraie transformation physique.`,
      benefits: [
        'Programme complet pour débutants et intermédiaires',
        'Méthode progressive semaine après semaine',
        'Plan nutrition inclus pour maximiser les résultats',
        'Exercices expliqués en détail pour une exécution parfaite',
        'Adapté à tous les environnements (salle, maison…)',
        'Résultats visibles dès les premières semaines',
        'Accès immédiat et à vie après commande',
        'La base solide pour toutes tes transformations futures'
      ],
      longDescription: `
        <h2>Ta première transformation, la plus importante</h2>
        <p>La première transformation physique, c'est celle qui change tout. C'est elle qui te prouve que c'est possible, qui installe les bonnes habitudes, et qui pose les bases de tous tes progrès futurs. Ce programme est conçu pour que tu la réussisses.</p>
        <h2>Une méthode pensée pour les débutants</h2>
        <p>Pas besoin d'expérience préalable. Ce programme part de zéro et te guide pas à pas : les bons exercices, les bonnes charges, les bons temps de repos. Chaque semaine est construite pour que tu progresses sans te blesser et sans te décourager.</p>
        <h2>Ce que contient le programme</h2>
        <p>Un plan d'entraînement complet organisé semaine par semaine, avec une progression claire et mesurable. Un plan nutrition adapté à ton objectif — que tu veuilles perdre du gras, prendre du muscle, ou les deux à la fois. Des explications détaillées pour chaque exercice, pour que tu comprennes ce que tu fais et pourquoi.</p>
        <h2>Pour qui ?</h2>
        <p>Ce programme est idéal si tu débutes ou si tu reprends le sport après une longue pause. Il est aussi parfait si tu t'es déjà entraîné sans méthode et que tu veux enfin voir de vrais résultats. L'important, c'est de commencer — et ce programme te donne tout ce qu'il faut pour le faire correctement.</p>
        <h2>Les résultats</h2>
        <p>Avec de la régularité et en suivant le programme à la lettre, les premiers changements sont visibles dès les 2 à 3 premières semaines. En quelques mois, tu ne te reconnaîtras plus — et c'est exactement l'objectif.</p>
        <h2>Accès et livraison</h2>
        <p>Après ta commande, tu reçois immédiatement un accès à ton programme. Consultable depuis ton smartphone, ta tablette ou ton ordinateur, à n'importe quel moment. Accès à vie, sans abonnement.</p>
      `
    },
    {
      id: 'projet-elite-foot',
      category: 'programme',
      title: 'Projet Élite Foot',
      subtitle: 'Performance Football · Sur-mesure',
      badge: 'Nouveau',
      price: 49.99,
      img: 'images/transfo foot.jpg',
      tags: ['Football', 'Performance', 'Explosivité'],
      details: `Tu joues au foot et tu veux passer au niveau supérieur ? Le Projet Élite Foot est le programme conçu pour les footballeurs qui veulent développer leur explosivité, leur endurance et leur puissance physique pour dominer sur le terrain.`,
      benefits: [
        'Programme spécifique aux exigences du football',
        'Développement de l\'explosivité et de la vitesse',
        'Cardio et endurance adaptés aux 90 minutes de jeu',
        'Renforcement musculaire fonctionnel pour le foot',
        'Prévention des blessures (genoux, chevilles, ischio-jambiers)',
        'Amélioration de la puissance de frappe et des accélérations',
        'Adapté à tous les niveaux (amateur à semi-pro)',
        'Accès immédiat et à vie après commande'
      ],
      longDescription: `
        <h2>Le programme pour les footballeurs qui veulent dominer</h2>
        <p>Le football, c'est un sport exigeant. Vitesse, explosivité, endurance, puissance — les meilleurs joueurs combinent tout ça. Le Projet Élite Foot est conçu pour développer exactement ces qualités, avec une méthode structurée et adaptée aux spécificités du jeu.</p>
        <h2>Ce que développe le programme</h2>
        <p>L'explosivité et la vitesse de démarrage pour prendre de vitesse tes adversaires. L'endurance spécifique au football pour maintenir ton niveau de performance du coup d'envoi au coup de sifflet final. La puissance musculaire pour les duels, les frappes et les sauts. Et la prévention des blessures pour rester sur le terrain le plus longtemps possible.</p>
        <h2>Une méthode adaptée au football</h2>
        <p>Chaque séance est construite autour des exigences réelles du football : efforts courts et intenses, récupérations rapides, changements de direction. Tu ne fais pas de la musculation générique — tu t'entraînes comme un footballeur.</p>
        <h2>Pour quel niveau ?</h2>
        <p>Ce programme est adapté aux footballeurs amateurs, en club ou en loisir, qui veulent améliorer leur condition physique et leur impact sur le terrain. Que tu joues en attaque, au milieu ou en défense, les qualités développées te seront utiles à chaque poste.</p>
        <h2>Les résultats attendus</h2>
        <p>Après quelques semaines de suivi, tu ressentiras une amélioration nette de ton explosivité, de ton endurance et de ta puissance. Tes coéquipiers et tes adversaires le remarqueront. Sur le terrain, la différence se voit.</p>
        <h2>Accès et livraison</h2>
        <p>Après ta commande, tu reçois immédiatement un accès à ton programme. Consultable depuis ton smartphone, ta tablette ou ton ordinateur, à n'importe quel moment. Accès à vie, sans abonnement.</p>
      `
    },
    {
      id: 'ebook',
      category: 'nutrition',
      title: "L'E-book Recettes Healthy",
      subtitle: 'Nutrition · Guide PDF',
      badge: 'Nutrition',
      price: 19,
      img: 'images/ebook.jpg',
      tags: ['15+ recettes', 'Macros incluses', 'Tous niveaux'],
      details: `Plus de 15 recettes savoureuses avec macros calculées, adaptées à la sèche ou à la prise de masse. Un guide pratique pour manger sainement sans se priver et sans passer des heures en cuisine.`,
      benefits: [
        '15+ recettes exclusives et savoureuses',
        'Macros calculées pour chaque recette',
        'Adaptées à la sèche et à la prise de masse',
        'Recettes rapides et faciles à préparer',
        'Conseils meal prep pour gagner du temps',
        'Ingrédients accessibles et abordables',
        'Guide PDF téléchargeable immédiatement',
        'Accès à vie après commande'
      ],
      longDescription: `
        <h2>Manger sainement, c'est aussi une compétence</h2>
        <p>La nutrition représente 70 % de tes résultats. Pourtant, beaucoup de gens ne savent pas quoi manger, comment préparer leurs repas, ou comment calculer leurs macros. Cet e-book répond à toutes ces questions de façon simple et pratique.</p>
        <h2>Ce que contient l'e-book</h2>
        <p>Plus de 15 recettes complètes, avec pour chacune : les ingrédients, les étapes de préparation, et les macros détaillées (protéines, glucides, lipides, calories). Des recettes variées pour le petit-déjeuner, les repas principaux et les collations.</p>
        <p>L'e-book inclut également des conseils pratiques sur le meal prep — comment préparer tes repas à l'avance pour gagner du temps et rester cohérent dans ton alimentation toute la semaine.</p>
        <h2>Pour quel objectif ?</h2>
        <p>Les recettes sont adaptées à deux objectifs principaux : la sèche (perte de gras) et la prise de masse. Pour chaque recette, tu sais si elle est plutôt adaptée à l'un ou l'autre objectif, ou aux deux.</p>
        <h2>Livraison</h2>
        <p>Après ta commande, tu reçois immédiatement un lien de téléchargement pour ton e-book en format PDF. Consultable sur tous tes appareils, à n'importe quel moment.</p>
      `
    },
    {
      id: 'coaching-presentiel',
      category: 'coaching',
      title: 'Coaching en présentiel',
      subtitle: 'Accompagnement personnalisé',
      badge: 'Présentiel',
      price: 100,
      img: 'images/coaching présentiel.jpg',
      video: 'images/video3.MOV',
      img2: 'images/photoprésentiel2.jpg',
      tags: ['Sur-mesure', 'Présentiel', 'Personnalisé'],
      details: `L'accompagnement complet pour des résultats concrets. Je suis à tes côtés à chaque répétition, chaque série, chaque effort — pour que tu ne sois jamais seul face à tes objectifs.`,
      benefits: [
        'Présence totale à chaque séance, corrections techniques en temps réel',
        'Gestion complète des temps de repos, de l\'intensité et de la progression',
        'Programme d\'entraînement en musculation entièrement personnalisé',
        'Programme nutritionnel offert et adapté à tes objectifs',
        'Disponibilité quotidienne en ligne pour toutes tes questions',
        'Suivi nutritionnel journalier pour manger en accord avec tes objectifs',
        'Bilan hebdomadaire avec pesée pour mesurer ta progression',
        'De 1 à 6 séances par semaine selon tes objectifs et ta disponibilité'
      ],
      longDescription: `
        <h2>L'accompagnement complet pour des résultats concrets</h2>
        <p>Tu veux aller plus loin, plus vite, et surtout de la bonne façon ? Le coaching en présentiel, c'est l'expérience la plus complète que je propose. Je suis à tes côtés à chaque répétition, chaque série, chaque effort — pour que tu ne sois jamais seul face à tes objectifs.</p>
        <h2>Une flexibilité totale adaptée à ta vie</h2>
        <p>Choisis le rythme qui te correspond : de 1 à 6 séances par semaine, selon tes objectifs, ta disponibilité et ton niveau. Que tu débutes ou que tu cherches à repousser tes limites, on construit ensemble un planning qui s'intègre naturellement à ton quotidien.</p>
        <h2>Sur le terrain, avec toi</h2>
        <p>Une présence totale à chaque séance, des corrections techniques en temps réel pour une exécution parfaite et sans risque de blessure, une gestion complète des temps de repos, de l'intensité et de la progression, ainsi qu'une motivation constante pour te pousser à donner le meilleur de toi-même.</p>
        <h2>Ton programme sur mesure</h2>
        <p>Un programme d'entraînement en musculation entièrement personnalisé, ainsi qu'un programme nutritionnel offert et adapté à tes objectifs. Un suivi journalier complet : une disponibilité quotidienne en ligne pour répondre à toutes tes questions, un suivi nutritionnel chaque jour pour t'assurer que tu manges en accord avec tes objectifs, et un bilan hebdomadaire avec pesée pour mesurer ta progression et ajuster si nécessaire.</p>
        <h2>Pourquoi choisir le coaching en présentiel ?</h2>
        <p>Parce que c'est la formule la plus complète. Tu n'es jamais seul face à tes doutes ou à tes efforts. Je gère tout pour toi — l'entraînement, la nutrition, le suivi, la motivation — pour que toi tu n'aies qu'une seule chose à faire : performer.</p>
      `
    },
    {
      id: 'coaching-ligne',
      category: 'coaching',
      title: 'Coaching en ligne',
      subtitle: 'Accompagnement à distance',
      badge: '100% Personnalisé',
      price: 75,
      img: 'images/coaching en ligne.jpg',
      img2: 'images/photo à mettre sur le coaching en ligne.jpg',
      tags: ['Sur-mesure', 'À distance', 'Flexible'],
      details: `Un accompagnement sérieux, où que tu sois. La formule pensée pour ceux qui ont besoin de flexibilité sans sacrifier la qualité du suivi. Peu importe où tu te trouves, je suis là.`,
      benefits: [
        'Programme de musculation entièrement adapté à ta situation',
        'Programme nutritionnel compris dans la formule',
        'Ajustements continus selon ta progression et ta vie',
        'Disponible 24h/24 pour toutes tes questions',
        'Suivi nutritionnel journalier concret et régulier',
        '1 à 5 appels de mise au point par semaine (téléphonique ou vidéo)',
        'Bilan hebdomadaire avec pesée pour mesurer ta progression',
        'Programme adapté à ton lieu d\'entraînement (salle, maison, street workout…)'
      ],
      longDescription: `
        <h2>Un accompagnement sérieux, où que tu sois</h2>
        <p>Tu veux progresser mais le présentiel ne correspond pas à ton rythme de vie ? Le coaching en ligne, c'est la formule pensée pour ceux qui ont besoin de flexibilité sans sacrifier la qualité du suivi. Peu importe où tu te trouves, je suis là.</p>
        <h2>Un suivi complet, entièrement à distance</h2>
        <p>Le coaching en ligne, c'est un accompagnement global et personnalisé, construit autour de toi et de ton quotidien — avec la même exigence qu'un suivi en présentiel. Tu reçois un programme de musculation entièrement adapté à ta situation ainsi qu'un programme nutritionnel compris dans la formule, tous deux ajustés en continu selon ta progression, tes retours et les évolutions de ta vie. Si tu pars en vacances, si ton emploi du temps change ou si tu traverses une période particulière, le programme s'adapte — rien n'est figé.</p>
        <h2>Un programme pensé pour toi, pas pour tout le monde</h2>
        <p>Ton programme est construit selon ton emploi du temps, tes contraintes et surtout l'endroit où tu t'entraînes. Que ce soit en salle, à la maison au poids du corps, en street workout ou ailleurs — le programme est entièrement pensé autour de ta réalité, pas d'une réalité idéale. Ce qui compte, c'est ce qui fonctionne pour toi.</p>
        <h2>Une présence quotidienne, pas juste hebdomadaire</h2>
        <p>Je suis disponible 24h/24 pour répondre à toutes tes questions, qu'il s'agisse de nutrition, d'entraînement, d'exécution d'un mouvement ou d'un simple doute en cours de route. Chaque jour, je m'assure que tu manges en accord avec tes objectifs grâce à un suivi nutritionnel journalier concret et régulier. En plus de cette disponibilité constante, tu bénéficies d'entre 1 à 5 appels de mise au point par semaine — en téléphonique ou en vidéo, selon ta préférence — pour faire le point ensemble, ajuster ce qui doit l'être et maintenir la dynamique.</p>
        <h2>Un bilan hebdomadaire pour mesurer ce qui compte</h2>
        <p>Chaque semaine, on fait le point ensemble avec une pesée et un bilan complet pour mesurer ta progression de manière concrète, réajuster si nécessaire et rester focus sur l'objectif.</p>
        <h2>Pourquoi choisir le coaching en ligne ?</h2>
        <p>Parce que la distance ne doit jamais être un obstacle à tes résultats. Avec ce suivi, tu as tout ce qu'il faut pour progresser sérieusement — un vrai programme, une vraie nutrition, et quelqu'un de disponible chaque jour pour t'accompagner jusqu'au bout.</p>
      `
    }
  ],

  nav: {
    programmes: [
      { label: 'Objectif SummerBody', href: 'produit.html?id=summerbody' },
      { label: '-10 Kilos Challenge', href: 'produit.html?id=10kilos' },
      { label: 'Prendre un maximum de muscles en 3 mois', href: 'produit.html?id=muscle' },
      { label: 'Préparation physique optimisée pour le MMA', href: 'produit.html?id=mma' },
      { label: 'Votre première transformation physique', href: 'produit.html?id=premiere-transformation' },
      { label: 'Projet Élite Foot', href: 'produit.html?id=projet-elite-foot' },
      { label: "L'E-book Recettes Healthy", href: 'produit.html?id=ebook' }
    ]
  },

  faq: [
    { q: 'Que se passe-t-il si le programme ne me convient pas ?', a: 'Contactez Mehdi pour échanger sur votre situation. Chaque programme est décrit en détail sur sa fiche produit.' },
    { q: "À qui s'adressent les programmes ?", a: 'Hommes, débutants comme confirmés. Chaque programme répond à un objectif précis — lisez la fiche produit ou utilisez le quiz gratuit.' },
    { q: 'Comment vais-je recevoir mon programme ?', a: 'Après votre commande, vous recevez par email les accès depuis smartphone, tablette ou ordinateur.' },
    { q: "Puis-je m'entraîner depuis chez moi ?", a: 'La plupart des séances nécessitent une salle équipée (banc, barres, haltères).' },
    { q: 'Combien de temps pour voir les premiers résultats ?', a: "Beaucoup de clients constatent des changements dès la 2e semaine selon l'assiduité et la nutrition." },
    { q: 'Puis-je recommencer un programme ?', a: 'Oui, les programmes sont reproductibles autant que vous le souhaitez.' },
    { q: 'Accès limité dans le temps ?', a: 'Non, paiement unique avec accès conservé.' },
    { q: 'Quel programme choisir ?', a: "Utilisez « Trouvez votre programme » ou contactez Mehdi via la page Contact." },
    { q: 'Qui conçoit les programmes ?', a: 'Mehdi, coach sportif spécialisé en transformation physique, hypertrophie et préparation performance.' }
  ]
};

window.SITE.getProduct = function (id) {
  return window.SITE.products.find(p => p.id === id);
};
