console.log("01 - Fonctions");

/**
 * création de 2 variables
 */
let nombre1 = 10;
let nombre2 = 20;

/**
 * Additionne les 2 nombres rentrés en paramètre
 * @param {} nb1 
 * @param {*} nb2 
 * @returns 
 */
function additionner(nb1, nb2) {
    return nb1+nb2
}

/**
 * Variable resultat1 à laquelle on affecte le résultat de la fonction additionner
 * sur les 2 variables créées
 */
let resultat1 = additionner(nombre1,nombre2);

/**
 * affichage du résultat dans la console
 */
console.log("resultat1 = " +resultat1);

/**
 * Variable somme avec pour valeur une référence à la fonction additionner
 */
let somme = additionner;

/**
 * Variable resultat1 à laquelle on affecte le résultat de la fonction somme
 * sur les 2 variables créées
 */
let resultat2 = somme(nombre1,nombre2);

/**
 * affichage du résultat dans la console
 */
 console.log("resultat2 = " +resultat2);

 /**
  * variable dont la valeur est une fonction multipliant les paramètres
  */
 let multiplication = function (nb1,nb2){return nb1*nb2};

 /**
 * Variable resultat1 à laquelle on affecte le résultat de la fonction somme
 * sur les 2 variables créées
 */
let resultat3 = multiplication(nombre1,nombre2);

/**
 * affichage du résultat dans la console
 */
 console.log("resultat3 = " +resultat3);

/**
 * Variable dont la valeur est une fonction retournant une chaînes de caractères type :
 * <nomOperation>(<nb1>, <nb2>) = <resultat invocation operation>
 * @param {*} nomOperation 
 * @param {*} operation 
 * @param {*} nb1 
 * @param {*} nb2 
 * @returns 
 */
 let afficherOperation = 
 function ( nomOperation,  operation,  nb1,  nb2)
 {
    return nomOperation + "("+nb1+","+nb2+") = "+operation(nb1,nb2)
 };

 /**
  * Tests d'afficherOperation avec différents paramètres
  * et affichage dans la console
  */
 console.log(afficherOperation("Somme",somme,20,40));
 console.log(afficherOperation("Multiplication",multiplication,10,20));
 console.log(afficherOperation("Soustraction",function(nb1,nb2){return nb1-nb2},15,5));