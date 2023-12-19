<picture>
<source media="(prefers-color-scheme: dark)" srcset="assets/images/logo.png">
 <source media="(prefers-color-scheme: light)" srcset="assets/images/logo.png">
 <img alt="Logo de print-it" src="assets/images/logo.png">
</picture>


# Projet Carrousel Print It 

## Sommaire

1. [Contexte du Projet](#contexte-du-projet)
2. [Étapes du Projet](#étapes-du-projet)
    - [Étape 1: Mise à Jour du Code HTML](#étape-1-mise-à-jour-du-code-html)
    - [Étape 2: Ajout d'Event Listeners sur les Flèches](#étape-2-ajout-devent-listeners-sur-les-flèches)
    - [Étape 3: Ajout de Bullet Points au Slider](#étape-3-ajout-de-bullet-points-au-slider)
    - [Étape 4: Modification du Slide au Clic sur le Bouton](#étape-4-modification-du-slide-au-clic-sur-le-bouton)
    - [Étape 5: Mise en Place du Défilement Infini](#étape-5-mise-en-place-du-défilement-infini)
    - [Explication du Code JavaScript](#explication-du-code-javascript)
        - [1. Déclaration des slides et initialisation de l'index](#1-déclaration-des-slides-et-initialisation-de-lindex)
        - [2. Sélection des éléments du DOM](#2-sélection-des-éléments-du-dom)
        - [3. Fonction pour changer de diapositive](#3-fonction-pour-changer-de-diapositive)
        - [4. Création de l'élément de titre](#4-création-de-lélément-de-titre)
        - [5. Initialisation du titre sur le chargement de la page](#5-initialisation-du-titre-sur-le-chargement-de-la-page)
        - [6. Création des points (bullets)](#6-création-des-points-bullets)
        - [7. Fonction pour mettre à jour les points](#7-fonction-pour-mettre-à-jour-les-points)
        - [8. Gestion des événements pour les boutons suivant/précédent](#8-gestion-des-événements-pour-les-boutons-suivantprécédent)

Retrouvez la version en ligne ici: [GitHub Pages](https://cedricrgt45.github.io/print-it.github.io/)

---

## Contexte du Projet

En tant que développeur front-end en freelance, vous avez décroché une offre pour dynamiser le site Internet statique de l'imprimerie familiale "Print It". Vous avez reçu des instructions de Lucien Gerodo, le directeur, pour créer un carrousel interactif. Ce projet vise à vous familiariser avec JavaScript à travers différentes étapes.

## Étapes du Projet

### Étape 1: Mise à Jour du Code HTML

- Analysez le code HTML et CSS existant.
- Ajoutez les images des flèches (`arrow_left.png` et `arrow_right.png`) pour permettre la navigation dans le carrousel.
- Utilisez le chapitre "Abordez d’autres techniques de mise en page" du cours "Créez votre site web avec HTML5 et CSS3" comme ressource.

### Étape 2: Ajout d'Event Listeners sur les Flèches

- Ajoutez des event listeners sur les flèches pour gérer le changement des images.
- Testez les event listeners en ajoutant des `console.log` ou des `alert`.
- Assurez-vous de différencier le clic sur la flèche gauche de celui sur la flèche droite.
- Utilisez les chapitres "Récupérez un élément d’une page web" et "Modifiez un élément d’une page web" du cours "Apprenez à programmer avec JavaScript" comme ressources.

### Étape 3: Ajout de Bullet Points au Slider

- Ajoutez des bullet points en bas du slider, un par image.
- Différenciez le point de la diapositive en cours avec une classe spécifique.
- Utilisez la documentation MDN sur les tableaux pour compter le nombre d'éléments dans le tableau "slides" du fichier `script.js`.
- Utilisez le chapitre "Modifiez un élément d’une page web" du cours "Apprenez à programmer avec JavaScript".

### Étape 4: Modification du Slide au Clic sur le Bouton

- Au clic sur la flèche droite, changez le point actif, l'image, et le texte correspondant.
- Au clic sur la flèche gauche, effectuez les mêmes changements pour les éléments précédents.
- Utilisez les index du tableau et construisez correctement le chemin de la nouvelle image.
- Utilisez la propriété `innerHTML` pour intégrer le texte de la diapositive.
- Consultez le chapitre "Modifiez un élément d’une page web" du cours "Apprenez à programmer avec Javascript".

### Étape 5: Mise en Place du Défilement Infini

- Ajoutez des conditions pour gérer le défilement infini.
- Si on est à la dernière image et qu'on clique à droite, affichez la première image, et le point sélectionné est le premier.
- Si on est à la première image et qu'on clique à gauche, affichez la dernière image, et le point sélectionné est le dernier.
- Consultez le chapitre "Contrôlez du code grâce aux conditions

" du cours "Apprenez à programmer avec Javascript".

### Explication du Code JavaScript

#### 1. Déclaration des slides et initialisation de l'index

```javascript
const slides = [
  // ... (tableau d'objets représentant les diapositives)
];

let index = 0;
```

**Explication :** La variable `slides` est un tableau d'objets, chaque objet représentant une diapositive avec une image et une balise associée. L'index est initialisé à 0 pour pointer sur la première diapositive.

#### 2. Sélection des éléments du DOM

```javascript
const imgSlide = document.querySelector(".slider-img");
const nextButton = document.querySelector(".arrow_right");
const prevButton = document.querySelector(".arrow_left");
const imgTarget = "assets/images/slideshow/";
const dotContainer = document.querySelector("#dots");
const slider = document.getElementById("slider");
```

**Explication :** Ces lignes de code sélectionnent des éléments HTML à l'aide de sélecteurs de classe ou d'ID. Ils représentent l'image du carrousel, les boutons suivant/précédent, le chemin cible des images, le conteneur des points (bullets), et le conteneur principal du slider.

#### 3. Fonction pour changer de diapositive

```javascript
function ChangeSlide(direction) {
  // ...
}
```

**Explication :** Cette fonction prend en paramètre la direction du changement de diapositive (1 pour suivant, -1 pour précédent) et met à jour l'index en conséquence. Elle gère le changement d'image et la mise à jour du titre de la diapositive.

#### 4. Création de l'élément de titre

```javascript
let title = document.getElementById("titleContent");
title = document.createElement("p");
title.setAttribute("id", "titleContent");
slider.appendChild(title);
```

**Explication :** Un élément de paragraphe (<p>) est créé et ajouté en tant qu'enfant de l'élément du slider. Cet élément de titre représente le texte de la diapositive.

#### 5. Initialisation du titre sur le chargement de la page

```javascript
title.innerHTML = slides[index].tagLine;
```

**Explication :** Le texte de la première diapositive est défini comme contenu initial de l'élément de titre.

#### 6. Création des points (bullets)

```javascript
slides.forEach((slide, i) => {
  // ...
});
```

**Explication :** Une boucle forEach parcourt chaque diapositive et crée un élément de point (<span>) pour chaque diapositive. Les points sont ajoutés au conteneur dotContainer et associés à un événement de clic.

#### 7. Fonction pour mettre à jour les points

```javascript
function updateDots(index) {
  // ...
}
```

**Explication :** Cette fonction met à jour les classes des éléments de point pour refléter la diapositive actuelle sélectionnée.

#### 8. Gestion des événements pour les boutons suivant/précédent

```javascript
nextButton.addEventListener("click", () => {
  ChangeSlide(1);
  updateDots(index);
});

prevButton.addEventListener("click", () => {
  ChangeSlide(-1);
  updateDots(index);
});
```

**Explication :** Des écouteurs d'événements sont ajoutés aux boutons suivant/précédent, déclenchant le changement de diapositive correspondant et mettant à jour les points.

