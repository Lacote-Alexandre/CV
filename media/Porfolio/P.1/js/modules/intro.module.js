// On va se dire qu'on a deux fonctionnalités sur notre site
// et qu'on va devoir les coder dans un seul fichier JS

// 1- La newsletter

// on va gérer ici la newsletter (la fonctionnalité de notre module)
// Pour écrire notre module, on va créer une variable sur laquelle on va donner
// le nom de la fonctionnalité de ce module ( => newsletter )
// Attention, dans un module, on sépare les fonctions par des virgules

// LA BONNE PRATIQUE ; c'est de coder un module par fonctionnalité / dans un seul fichier JS

// si je développer un slider, je vais écrire
/* const slider = {

}*/

/*
Uncaught ReferenceError: nom is not defined
    at Object.biographie (example.js:23:39)
    at example.js:27:10
*/

// La variable globale nom. On peut y accéder depuis l'intérieur du module.
const nom = "GALLE";

const personne = {
    nom: '',
    prenom: '',
    age: 33,
    biographie: function() {
        // je fais référence à la variable globale
        console.log(nom)
        // je fais référence (personne.nom) à la variable nom qui est dans le module personne.
        console.log("Je m'appelle " + personne.nom + " " + personne.prenom + " et j'ai " + personne.age + " ans !")
    }
};

// J'appelle la méthode biographie en faisant <nom du module>.fonction()
personne.biographie();
// Si je veux afficher directement la valeur du nom de la personne, comment je fais ?
// Dans un tableau associatif, si je veux cibler la valeur d'un index, j'ai deux possiblités,
console.log(personne["nom"]);
// Soit je fais
console.log(personne.nom);



