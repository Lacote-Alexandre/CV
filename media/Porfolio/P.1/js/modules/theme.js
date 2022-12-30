// Créer un fichier theme.js dans le dossier js. 
//A l'intérieur, déclarer un module theme.

// Les LOCAL STORAGES SERONT UTILISES ICI

const theme = {

    // les variables du module
    // - elle peut être de plusieurs types :
    //      - chaine de caractères
    //      - nombre (entier/décimal)
    //      - booléen
    //      - tableau indexé
    //      - tableau associatif

    // l'id du bouton qui permet de changer le thème
    buttonSelectorId: "",   

    // la classe CSS qui gère le dark thème
    themeDarkCSSClass: "",  

    // la valeur du theme
    themeValue: "light",

    // les fonctions du module => des méthodes

    changeTheme: function(event) {
        event.preventDefault();

        // body dans un autre JS
        let body = document.querySelector("body");  

        // 1- allumer  : body <body> va passer à <body class="theme-dark">
        // 2- éteindre : <body class="theme-dark"> va passer à <body>
        body.classList.toggle(theme.themeDarkCSSClass);

        // Logique : toggle pour la valeur de la variable themeValue
        // Quand je change le thème, je veux pouvoir sauvegarder la valeur du thème

        // PETIT RAPPEL
        // == : tester une égalité entre deux variables
        // = : affectation d'une valeur dans une variable

        if(theme.themeValue == "light") {
            theme.themeValue = "dark";
        } else if(theme.themeValue == "dark") {
            theme.themeValue = "light";
        }

        console.log(theme.themeValue);
        
        // On sauvegarde l'état de notre thème
        localStorage.setItem("theme", theme.themeValue);

    },
    

    init: function() {
        let bouton = document.getElementById(theme.buttonSelectorId);
        bouton.addEventListener('click', theme.changeTheme);

        // On va ajouter le code qui me permet de lire la valeur du theme
        // Le code lorsque l'utilisateur va revenir sur la page

        // lors de l'initialisation, je lis la valeur contenu dans la clé thème
        const themeValueOfLocalStorage = localStorage.getItem("theme");

        // Si lors de la dernière visite j'ai enregistré la valeur dark
        if(themeValueOfLocalStorage == "dark") {
            console.log("j'initialise le theme en dark")
            let body = document.querySelector("body"); 
            body.classList.add(theme.themeDarkCSSClass); 

            // j'enregistre la valeur dark dans la variable
            theme.themeValue = themeValueOfLocalStorage;
        }
        
    }
}


// Comment je peux lancer la fonction init du module theme, 
// lorsque le page HTML est chargée :

theme.themeDarkCSSClass = "theme-dark";
theme.buttonSelectorId = "theme-switch";
document.addEventListener("DOMContentLoaded", theme.init);



