import { formaterDonnee } from "./utils.js";

const URL_API = "https://opendata.paris.fr/api/explore/v2.1/catalog/datasets/arbresremarquablesparis/records?limit=100"

async function recupererArbres() {
    try {
        const reponse = await fetch(URL_API)
        const donnees = await reponse.json()
        console.log(donnees)
    } catch (erreur) {
        console.log("Erreur :", erreur)
    }
}

recupererArbres()