/**
 * variable représentant un tableau de villes
 */
let ville = ['nantes', 'paris', 'saint-nazaire', 'angers', 'le mans'];

/**
 * affichage de tous les éléments du tableau dans la console
 */
ville.forEach(element => {
    console.log(element)
});

/**
 * Toutes les villes qui contiennent la lettre 'a'
 */
let contientA = function (element, index, array) {
    return element.includes('a')
}
console.log("lettre A dans toutes les villes = " + ville.every(contientA));

/**
 * Détermine et affiche si au moins une ville possède un tiret
 */
console.log(
    "au moins une ville avec un tiret = " +
    ville.some(function(element, index, array){return element.includes('-')})
)

/**
 * variable contenant un tableau dont les villes n'ont ni tiret ni espace
 */
let villeSansTiretSansEspace = ville.filter(v => ! (v.includes(' ') || v.includes('-')));

console.log("villeSansTiretSansEspace = " +villeSansTiretSansEspace)

/**
 * Tableau de villes finissant par 's' et passage en majuscule
 */
let villesMajSeTerminantParS = ville.filter(v => v.endsWith('s')).map(v => v.toUpperCase());

console.log("villesMajSeTerminantParS = "+ villesMajSeTerminantParS)