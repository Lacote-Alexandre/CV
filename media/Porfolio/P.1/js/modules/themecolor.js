
const themeColor = {

    // variables

    colorButtonsElements: "",

    bodyEnPorteeGlobal: "",

    // fonctions

    /* nomDuTheme c'est le paramètre / mon monnayeur */
    changeColorTheme: function(nomDuTheme) {
        // 2- Je supprime les classes theme-red, theme-green et theme-bleu du body
        themeColor.bodyEnPorteeGlobal.classList.remove("theme-red");
        themeColor.bodyEnPorteeGlobal.classList.remove("theme-green");
        themeColor.bodyEnPorteeGlobal.classList.remove("theme-blue");

        // 3- Il faut que je lui attribue la class theme-<color> que j'ai récupéré
        themeColor.bodyEnPorteeGlobal.classList.add(nomDuTheme)
    },

    // Je créer la fonction themeColorClick
    // Le paramètre event ici est important.
    themeColorClick: function(event) {

        event.preventDefault();

        const buttonElement = event.currentTarget
        const buttonElementId = buttonElement.id

        themeColor.changeColorTheme(buttonElementId)

        // 1- Une fois que le thème sera changé, je vais enregistrer l'information pour garder en mémoire le dernier thème choisi
        localStorage.setItem("themeCouleur", buttonElementId);

    },


    // On ne l'a pas dans une fonction (fonction principale du module : init)

    init: function() {
        // Pour faire référence à la variable du module
        // je dois pas écrire variable =
        //          je dois écrire nomduModule.variable
        // IDEM POUR LES FONCTIONS
        
        themeColor.bodyEnPorteeGlobal = document.body;
        themeColor.colorButtonsElements = document.querySelectorAll(".theme-button");

        // 2- ICI, lorsque j'ouvre ma page, je vais lire l'information en mémoire
        // SI y'a un thème défini lors de ma dernière visite, je vais appliquer ce thème
        const dernierThemeSauvegarde = localStorage.getItem("themeCouleur")
        if(dernierThemeSauvegarde == "theme-blue" || dernierThemeSauvegarde == "theme-red" || dernierThemeSauvegarde == "theme-green") {
            themeColor.changeColorTheme(dernierThemeSauvegarde)
        }

        for(const colorButtonElement of themeColor.colorButtonsElements) {
            // sur chaque pastille, je place un écouteur.
            // lorsque l'utilisateur clique dessus, la fonction themeColorClick est appelée.
            colorButtonElement.addEventListener('click', themeColor.themeColorClick)
        }
    }
}

/* POUR LA PARTIE ENREGISTREMENT */
// - On va lire la variable (theme-red/ theme-green ou theme-blue) dans le localStorage lorsque l'utilisateur ouvre la page => Lorque j'appelle la fonction init
// - On va enregistrer à la fin c'est à dire une fois que le thème sera changé.


// Pour faire un appel à init
//themeColor.init();

// Une fois le document HTML chargé, je lance la fonction init du module themeColor
document.addEventListener("DOMContentLoaded", themeColor.init);