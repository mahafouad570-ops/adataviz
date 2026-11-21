import { formaterDonnee, filtrerParArrondissement } from "./utils.js";

test("formaterDonnee renvoie un objet propre", () => {
    const arbreBrut = {
          arbres_libellefrancais: "Orme",
          com_nom_latin: "Ulmus minor",
          com_qualification_rem: "Historique",
          arbres_adresse: "3 place Saint-Gervais",
          arbres_arrondissement: "PARIS 4E ARRDT",
          arbres_hauteurenm: 12,
          com_url_photo1: "photo.jpg",
          arbres_genre: "Ulmus"
    }

    expect(formaterDonnee(arbreBrut)).toEqual({
        nom: "Orme",
        nomLatin: "Ulmus minor",
        categorie: "Historique",
        adresse: "3 place Saint-Gervais",
        arrondissement: "PARIS 4E ARRDT",
        hauteur: 12,
        photo: "photo.jpg"
    })
})

test("filtrerParArrondissement garde seulment les arbres de l'arrondissement choisi", () => {
    const arbres= [
        { nom:"Orme", arrondissement:"PARIS 4E ARRDT" },
        { nom:"Chéne", arrondissement:"PARIS 11E ARRDT" },
    ]
 expect(filtrerParArrondissement(arbres, "PARIS 4E ARRDT")).toEqual([
        { nom:"Orme", arrondissement:"PARIS 4E ARRDT" }
    ])
})

test("filtrerParArrondissement renvoie tous les arbres si aucun choix", ()=> {
    const arbres = [
        { nom:"Orme", arrondissement:"PARIS 4E ARRDT" },
        { nom:"Chéne", arrondissement:"PARIS 11E ARRDT" },
    ]
    expect(filtrerParArrondissement(arbres,"")).toEqual(arbres)
})