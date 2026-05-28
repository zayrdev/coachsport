# 📋 MEHDI COACHING — Documentation Projet Complète

> **Dernière mise à jour** : 22 mai 2026
> **Statut** : En développement actif

---

## 🎯 OBJECTIF DU PROJET

**Mehdi Coaching** est un site web fitness premium destiné **exclusivement aux hommes**.

Le site vend :
- **4 programmes d'entraînement** (SummerBody, -10 Kilos, Prise de Masse, Préparation MMA)
- **1 E-book nutrition** (Recettes Healthy)
- **2 offres de coaching** (en ligne et en présentiel)

> ⚠️ Le client **ne vend PAS** de compléments alimentaires.

Le site doit avoir un rendu **très premium, moderne, lumineux et mobile-first**, fortement inspiré de [fitmass.fr](https://www.fitmass.fr).

---

## 🏗️ ARCHITECTURE TECHNIQUE

### Stack
- **HTML** statique (pas de framework JS)
- **CSS** Vanilla (deux fichiers principaux)
- **JavaScript** Vanilla (modules séparés)
- **LocalStorage** pour le code promo QCM
- **Google Fonts** : `Jost` + `Instrument Sans`
- Pas de backend pour l'instant (Supabase prévu plus tard)

### Système d'injection dynamique

Le site utilise un **système modulaire** :

1. **`js/site-data.js`** — Source de données centralisée (produits, navigation, FAQ)
2. **`js/layout.js`** — Injecte dynamiquement le header et footer dans les `<div>` placeholders
3. **`js/navigation.js`** — Gère les dropdowns desktop, menu mobile, scroll header

Chaque page HTML contient trois `<div>` vides que `layout.js` remplit au chargement :
```html
<div id="site-header"></div>   <!-- Header + nav + menu mobile -->
<div id="site-footer"></div>   <!-- Footer complet -->
```

### Attributs requis sur chaque page
```html
<body data-layout="fitmass">
```

### Scripts à inclure (dans cet ordre)
```html
<script src="js/site-data.js"></script>
<script src="js/layout.js"></script>
<script src="js/navigation.js"></script>
<script src="cart.js"></script>
<script src="js/product-actions.js"></script>
<script src="script.js"></script>
```

Pages spécifiques ajoutent aussi :
- `index.html` → `qcm.js` + `js/home.js`
- `paiement.html` → `js/product-page.js`

---

## 📁 STRUCTURE DES FICHIERS

```
coachsport/
├── index.html              # Homepage principale
├── accompagnements.html    # Coaching en ligne + présentiel
├── pack-nutrition.html     # E-book + Pack Nutrition
├── reserver-appel.html     # Réservation appel gratuit (UI only)
├── compte.html             # Mon compte (login/register/dashboard, UI only)
├── programmes.html         # Liste tous les programmes
├── produit.html            # Fiche produit détaillée (dynamique via ?id=xxx)
├── faq.html                # FAQ complète
├── contact.html            # Page contact
├── en-construction.html    # Page placeholder pour pages légales
│
├── style.css               # Styles de base / overrides
├── fitmass.css             # Thème premium principal (inspiré Fitmass)
├── script.js               # Logique globale (reveal, scroll, promo modal)
├── qcm.js                  # Quiz "Trouvez votre programme" (15 questions)
├── cart.js                 # Checkout Stripe direct (pas de panier)
│
├── js/
│   ├── site-data.js        # Données centralisées (produits, nav, FAQ)
│   ├── layout.js           # Injection header/footer/cart
│   ├── navigation.js       # Dropdowns, mobile menu, scroll
│   ├── home.js             # Slider produits + FAQ homepage
│   ├── product-actions.js  # Boutons acheter/ajouter au panier
│   ├── product-page.js     # Logique page produit (paiement.html)
│   └── pages.js            # Logique pages annexes
│
├── images/
│   ├── summer.jpg           # Objectif SummerBody
│   ├── moins10kg.jpg        # -10 Kilos Challenge
│   ├── muscle-3mois.jpg     # Prise de Masse
│   ├── mma.jpg              # Préparation MMA
│   ├── ebook.jpg            # E-book nutrition
│   ├── halteres.jpg         # Image hero / coaching
│   ├── avant-apres.jpg      # Transformation client
│   ├── transformation-client-1.jpg
│   ├── transformation-client-2.jpg
│   ├── video1.MOV           # Vidéo témoignage 1
│   └── video2.MOV           # Vidéo témoignage 2
│
├── site.md                 # CE FICHIER (documentation)
│
└── [Pages obsolètes à supprimer]
    ├── coachings.html       # OBSOLÈTE → remplacé par accompagnements.html
    ├── complements.html     # OBSOLÈTE → remplacé par pack-nutrition.html
    ├── musculation.html     # OBSOLÈTE
    ├── guides.html          # OBSOLÈTE
    ├── guide-debutant.html  # OBSOLÈTE
    ├── guide-exercices.html # OBSOLÈTE
    ├── guide-fessiers.html  # OBSOLÈTE
    ├── guide-perte-gras.html     # OBSOLÈTE
    └── guide-programme-ideal.html # OBSOLÈTE
```

---

## 🔧 DONNÉES CENTRALISÉES (`site-data.js`)

### Produits (`SITE.products`)

| ID | Titre | Prix | Prix barré | Badge |
|---|---|---|---|---|
| `summerbody` | Objectif SummerBody | 49€ | 97€ | Offre spéciale |
| `10kilos` | -10 Kilos Challenge | 39€ | — | Best-seller |
| `muscle` | Prise de Masse | 59€ | — | Best-seller |
| `mma` | Préparation Physique MMA | 79€ | — | Avancé |
| `ebook` | L'E-book Recettes Healthy | 19€ | — | Nutrition |

### Navigation (`SITE.nav`)

Le menu principal a **5 onglets** :

1. **Les programmes** → dropdown avec les 4 programmes
2. **Mes accompagnements** → dropdown : Coaching en ligne + Coaching en présentiel
3. **Pack Nutrition** → lien direct vers `pack-nutrition.html`
4. **Réserver un appel gratuit** → lien direct vers `reserver-appel.html`
5. **Mon compte** → icône utilisateur dans le header → `compte.html`

### FAQ (`SITE.faq`)

9 questions/réponses orientées exclusivement hommes.

---

## � SYSTÈME DE PAIEMENT (Checkout Direct)

- **Mode** : Checkout Stripe direct (pas de panier)
- **Promo code** : Stocké dans `localStorage` clé `coachsport_promo_code` (débloqué via QCM)
- **Fonction globale** : `buyNow(id, title, price, img)` → redirection Stripe immédiate
- **Pages de résultat** : `success.html` (paiement réussi) / `cancel.html` (annulation)
- **Redirections Stripe** : Configurées dans `server.js` (success_url / cancel_url)

---

## 🔍 QCM "TROUVEZ VOTRE PROGRAMME"

- **15 questions** (homme/femme supprimé)
- Questions couvrent : objectif, âge, niveau, fréquence, lieu, difficultés, résultats souhaités, kilos, durée séance, expérience, objectif été, motivation, préférence méthode, type programme, horizon temps
- **Algorithme de recommandation** basé sur les réponses :
  - Transformation Summer Body / Rapide → `summerbody`
  - Prendre du muscle / Plus de muscles → `muscle`
  - Coaching personnalisé → redirige vers accompagnements
  - Défaut → `-10 Kilos Challenge`
- **Ouverture** : bouton "Trouvez votre programme" (hero + menu mobile)

---

## 🎨 DIRECTION ARTISTIQUE

### Palette de couleurs
- **Fond principal** : blanc / gris très clair (#f8f8f8)
- **Texte** : noir / gris foncé
- **Accent (CTA)** : orange (#ff6b35 ou similaire)
- **Badges** : verts, oranges selon le type
- **Approche** : lumineux, clean, premium, PAS de dark mode

### Typographie
- **Titres** : Jost (700-800)
- **Corps** : Instrument Sans (400-600)
- **Labels** : Jost uppercase, tracking large

### Principes de design
- Mobile-first
- Animations reveal au scroll (IntersectionObserver)
- Transitions CSS fluides
- Cards avec hover effects
- Gros CTA visibles
- Trust badges et éléments de réassurance
- Inspiration forte de fitmass.fr

### Règles visuelles strictes
- ❌ Pas de contenu féminin
- ❌ Pas de choix homme/femme
- ❌ Pas de compléments alimentaires
- ❌ Pas de dark mode (sauf footer)
- ✅ Toujours des photos masculines
- ✅ Ton premium et professionnel
- ✅ Images bien recadrées (object-fit: cover, pas de zoom cassé)

---

## 📱 COMPORTEMENT MOBILE

### Menu mobile
- Fullscreen slide-in depuis la droite
- Accordions `<details>` pour les sous-menus
- **Deux boutons fixes en bas** :
  - "Voir mon panier" (ouvre le cart drawer)
  - "Trouvez votre programme" (ouvre le QCM)

### Header
- Sticky avec effet scroll (classe `fm-scrolled`)
- Barre d'annonce en haut
- Burger 3 barres à droite
- Icônes compte + panier

---

## 📝 PROMO MODAL (-20%)

- Apparaît automatiquement après 3 secondes (une seule fois par session)
- **Étapes** :
  1. Saisie email
  2. Choix objectif (Perdre du gras / Prendre du muscle / Apprendre)
  3. Confirmation
- Bouton flottant `-20%` en bas à droite pour réouvrir
- Stockage session : `mehdi_promo_dismissed`

---

## ✅ MODIFICATIONS EFFECTUÉES

### Structure & Navigation
- [x] Menu réduit à 5 onglets (programmes, accompagnements, pack nutrition, appel, compte)
- [x] Suppression de "Compléments" et "Coachings" du menu
- [x] Dropdowns desktop avec hover + click
- [x] Menu mobile fullscreen avec accordions
- [x] Boutons "Voir mon panier" + "Trouvez votre programme" en bas du menu mobile

### Pages créées
- [x] `accompagnements.html` — Coaching en ligne + présentiel
- [x] `pack-nutrition.html` — E-book + Pack Nutrition
- [x] `reserver-appel.html` — Formulaire réservation appel (UI only)
- [x] `compte.html` — Login / Register / Dashboard (UI only)

### Contenu masculin uniquement
- [x] Question homme/femme supprimée du QCM (15 questions au lieu de 16)
- [x] Question homme/femme supprimée du promo modal
- [x] FAQ reformulée sans mention femmes
- [x] Tous les textes orientés hommes

### Système de paiement (Checkout Direct)
- [x] Checkout Stripe direct (pas de panier)
- [x] Boutons acheter globaux via `product-actions.js`
- [x] Code promo QCM (débloqué dans `localStorage`)
- [x] Pages de résultat Stripe (`success.html` / `cancel.html`)

### Footer
- [x] Footer premium avec 4 colonnes (programmes, accompagnement, légal, marque)
- [x] Logos de paiement (Visa, MC, Apple Pay, Google Pay, PayPal, Amex)
- [x] Liens vers pages légales (en-construction.html)

### Design & UX
- [x] Animations reveal au scroll
- [x] Ticker défilant sous le hero
- [x] Slider produits horizontal avec flèches
- [x] Cards produits avec badges, prix, CTA
- [x] Barre d'annonce promo en haut

---

## ❌ TODO — MODIFICATIONS RESTANTES

### Priorité haute
- [ ] **Section témoignages complète** : remplacer les témoignages placeholder par les 12 vrais avis clients (Léo, Ilyes, Mohamed Aa, Leny, Tony, Mohamed WhatsApp, Ylies, Lmv, Liam, Soulimane, Gustavi, Soufiane)
- [ ] **Intégration vidéos témoignages** : intégrer video1.MOV et video2.MOV dans la section témoignages avec player premium
- [ ] **Page Avis clients** : créer une page dédiée avec tous les témoignages
- [ ] **Recadrage images** : corriger object-fit/object-position sur toutes les images pour un rendu parfait mobile/desktop

### Priorité moyenne
- [ ] **Promo modal index.html** : l'étape homme/femme doit être supprimée (encore présente dans le HTML — la logique script.js fait référence à step2/step3/step4)
- [ ] **Script.js** : mettre à jour les références aux steps du promo modal (step2→step3→step4 → step2→step3 après suppression homme/femme)
- [ ] **Supprimer fichiers obsolètes** : coachings.html, complements.html, musculation.html, guides.html, guide-*.html
- [ ] **Page "Avis clients"** avec slider premium

### Priorité basse
- [ ] **Backend Supabase** pour Mon compte (login réel, commandes, accès programmes)
- [ ] **Calendrier de réservation réel** pour la page appel gratuit
- [ ] **Système de paiement** (Stripe ou autre) pour les achats réels
- [ ] **SEO** : meta tags complets sur chaque page
- [ ] **Analytics** : intégrer Google Analytics / Meta Pixel

---

## ⚠️ RÈGLES POUR L'IA SUIVANTE

### Avant de modifier quoi que ce soit :

1. **Lire `js/site-data.js`** — C'est la source de vérité pour les produits, la navigation et la FAQ
2. **Lire `js/layout.js`** — C'est lui qui injecte le header/footer/cart dans toutes les pages
3. **Ne JAMAIS hardcoder** le header ou le footer dans les pages HTML — `layout.js` les écrase au chargement
4. **Garder `data-layout="fitmass"`** sur le `<body>` de chaque page
5. **Inclure les scripts dans le bon ordre** (site-data → layout → navigation → cart → product-actions → script)

### Style
- Le fichier CSS principal est `fitmass.css` (thème premium)
- `style.css` contient des overrides de base
- Ne pas mixer les deux systèmes de classes

### Navigation
- Les dropdowns sont gérés par `navigation.js`
- Le menu mobile est injecté par `layout.js`
- Les accordions mobile utilisent `<details>` natifs

### Panier
- `cart.js` s'exécute **avant** l'injection layout (il cherche les éléments DOM)
- Il y a un `setTimeout(100ms)` dans `DOMContentLoaded` pour re-bind après injection
- Les fonctions `addToCart`, `buyNow`, `removeFromCart`, `updateQuantity` sont globales

### QCM
- `qcm.js` est chargé uniquement sur `index.html`
- Il utilise le bouton `#btnOpenFinder` pour s'ouvrir
- Le bouton mobile "Trouvez votre programme" est lié via `layout.js`

---

## 📞 CONTACT CLIENT

- **Email** : staff@mehdicoaching.fr
- **Snapchat** : https://snapchat.com/t/cAu802hZ

---

## 🔗 RÉFÉRENCES

- **Inspiration principale** : https://www.fitmass.fr
- **Fonts** : https://fonts.google.com (Jost + Instrument Sans)

---

## 📊 AVIS CLIENTS À INTÉGRER

Ces avis doivent être affichés sur la homepage (slider/cards) ET sur une page dédiée "Avis clients" :

| Nom | Avis |
|---|---|
| **Léo** | "Programme très complet et adapté aux critères demandés (prix des repas protéinés, temps disponible pour les exercices, matériel à disposition…). Le programme est aussi très bien présenté autant pour le fonctionnement que l'esthétique. Plus qu'à attendre les résultats en le suivant à la lettre, merci Mehdi 💪" |
| **Ilyes** | "J'ai pris le programme pour le cardio et l'endurance. J'ai vu des changements au bout de 1 semaine au niveau physique, j'ai perdu du poids tout en faisant le programme dédié à l'explosivité et l'endurance. Depuis le programme mon cardio évolue, je suis plus endurant qu'avant. Je recommande fortement pour les personnes qui font du sport notamment le foot et les sports de combat." |
| **Mohamed Aa** | "Tu es à l'écoute de tes clients pour proposer le programme le plus complet et adapté possible que ça soit en nutrition ou sport. Tu es disponible. En tant que débutant le programme me semble bien adapté à mes possibilités." |
| **Leny** | "Ton programme est proposé et fait proprement avec les goûts du client et des prix largement abordables pour tous ceux qui souhaitent se mettre au sport." |
| **TONY** ✅ | "Franchement les séances sont au top frérot." |
| **Mohamed** (WhatsApp) | "Tu es un très bon coach à l'écoute de tes élèves. Tu pousses à nous dépasser et atteindre nos objectifs. Les séances sont intenses et très qualitatives." |
| **Ylies** | "Je recommande fortement. Je me suis entraîné des mois en faisant n'importe quoi, ton programme m'a permis de mieux structurer mes entraînements et je vois une vraie évolution physique." |
| **Lmv** | "J'ai commencé le programme depuis 15 jours et j'ai déjà perdu 7 kilos. Les muscles sont bien congestionnés et je sens une vraie évolution." |
| **Liam** | "Encore merci pour la séance frérot 🙏" |
| **SOULIMANE** ✅ | "Je recommande vivement Mehdi en tant que coach. Il est professionnel, à l'écoute et motivant. Grâce à son suivi personnalisé, j'ai atteint mes objectifs tout en prenant plaisir à m'entraîner." |
| **GUST@VI** | "Grâce à l'accompagnement de Mehdi je ressens des résultats beaucoup plus rapidement grâce à ses séances intensives." |
| **Soufiane** | "Ton programme il est carré frérot, franchement rien à dire." |

### Vidéos témoignages
- `images/video1.MOV` — Vidéo témoignage client 1
- `images/video2.MOV` — Vidéo témoignage client 2

---

## 🏷️ PAGES LÉGALES (via en-construction.html)

Les pages légales sont gérées via `en-construction.html?page=xxx` :
- `remboursement` — Politique de remboursement
- `confidentialite` — Politique de confidentialité
- `cgu` — Conditions d'utilisation
- `expedition` — Politique d'expédition
- `cgv` — Conditions générales de vente
- `mentions` — Mentions légales
- `coordonnees` — Coordonnées

---

*Ce fichier est la référence principale du projet. Toute IA reprenant le travail doit le lire en premier.*
