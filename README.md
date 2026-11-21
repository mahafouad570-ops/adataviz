# Les Doyens de Paris
Site qui affiche les arbres remarquables de Paris, avec un filtre par arrondissement.
J'ai choisi les arbres remarquables car je suis ingénieure agronome.

## Données

- Source : Open Data Paris, jeu de données « Les arbres remarquables »
- API : https://opendata.paris.fr/api/explore/v2.1/catalog/datasets/arbresremarquablesparis/exports/json

## Fonctionnalités

- Récupération des données avec fetch et async / await
- Une carte par arbre : photo, catégorie, nom, nom latin, adresse, hauteur
- Affichage du nombre total d'arbres
- Filtre par arrondissement avec un menu déroulant
- Design mobile first et responsive

## Organisation du code

- utils.js : fonctions pures (formaterDonnee, filtrerParArrondissement)
- utils.test.js : tests Jest des fonctions pures
- main.js : fetch et manipulation du DOM (non testé)

## Lancer le projet

- Ouvrir index.html avec Live Server
- Installer les dépendances : npm install
- Lancer les tests : npm test

## Prompt log

J'ai utilisé Claude (IA) comme assistant pendant ce projet :

- Comprendre le brief et planifier les étapes
- Être guidée  pour écrire le HTML, le CSS et le JavaScript
- Configurer Jest et écrire les tests
- Trouver et corriger des erreurs (console du navigateur)

J'ai écrit tout le code moi-même et je peux expliquer chaque ligne.