export function formaterDonnee(arbre) {
    return {
        nom: arbre.arbres_libellefrancais,
        nomLatin: arbre.com_nom_latin,
        categorie: arbre.com_qualification_rem,
        adresse: arbre.arbres_adresse,
        arrondissement: arbre.arbres_arrondissement,
        hauteur: arbre.arbres_hauteurenm,
        photo:arbre.com_url_photo1
    }
}