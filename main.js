import { formaterDonnee } from "./utils.js";

const URL_API =
  "https://opendata.paris.fr/api/explore/v2.1/catalog/datasets/arbresremarquablesparis/records?limit=100";
function creerCarte(arbre) {
  const carte = document.createElement("article");
  carte.classList.add("carte");

  const badge = document.createElement("span");
  badge.classList.add("badge");
  badge.textContent = arbre.categorie;

  const image = document.createElement("img");
  image.classList.add("carte-image");
  image.src = arbre.photo;
  image.alt = arbre.nom;

  const titre = document.createElement("h2");
  titre.textContent = arbre.nom;

  const nomLatin = document.createElement("p");
  nomLatin.classList.add("nom-latin");
  nomLatin.textContent = arbre.nomLatin;

  const adresse = document.createElement("p");
  adresse.classList.add("adresse");
  adresse.textContent = arbre.adresse;

  const hauteur = document.createElement("p");
  hauteur.classList.add("hauteur");
  hauteur.textContent = "Hauteur : " + arbre.hauteur + " m";

  carte.append(badge, image, titre, nomLatin, adresse, hauteur);
  return carte;
}

async function recupererArbres() {
  try {
    const reponse = await fetch(URL_API);
    const donnees = await reponse.json();
    console.log(donnees);
  } catch (erreur) {
    console.log("Erreur :", erreur);
  }
}

recupererArbres();
