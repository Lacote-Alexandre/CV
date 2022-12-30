// Créer un fichier theme.js dans le dossier js. 
//A l'intérieur, déclarer un module theme.

// GESTION DES COOKIES

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

    cookieThemeKey: 'theme',

    // les fonctions du module => des méthodes

    // pour lire les valeurs je dois d'abbord séparer les couples clé=valeur
    lireValeurDuCookieTheme: function() {
        const cookiesAsString = document.cookie;
        // cookiesAsString contient : "clé1=valeur1; nuage=cumulus; theme=light; _ga=GA1.1.2028527256.1666727800; _gid=GA1.1.1339591558.1666727800"
        const cookiesAsArray = cookiesAsString.split("; ");
        // Quand je fais le premier split je récupère :
        // tableau   0 => "clé1=valeur1"
        //           1 => "nuage=cumulus"
        // for...of pour rappel récupère la valeur de chaque élément du tableau
        for(const cookie of cookiesAsArray) {
            // Dans cookie, je vais par exemple avoir : "theme=light"
            // Il va falloir chercher la clé qu'on souhaite lire dans le cookie
            // uneChaine.endsWith ? ça permet de chercher à l'intérieur d'une chaine une sous-chaine.
            if(cookie.startsWith(theme.cookieThemeKey)) {    // ici je mets la clé du cookie que je souhaite récupérer
                // Pour chercher la valeur, je dois faire un split sur la chaine
                const cookieInfo = cookie.split("=");
                // cookieInfo représente un tableau =
                    // 0 => "theme"
                    // 1 => "light"
                const value = cookieInfo[1];
                return value;
            }
        }
    },

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

        
        // On sauvegarde l'état de notre thème
        //localStorage.setItem("theme", theme.themeValue);

        // où max-age = temps en seconde
        // si je veux par exemple 365 jours : 365J * 24H * 60Min * 60Sec = 31536000s
        // autre exemple : 1 journée : 1J * 24H * 60Min * 60Sec = 86400s
        document.cookie = "theme="+theme.themeValue+"; max-age=86400";

    },
    

    init: function() {
        let bouton = document.getElementById(theme.buttonSelectorId);
        bouton.addEventListener('click', theme.changeTheme);

        // On va ajouter le code qui me permet de lire la valeur du theme
        // Le code lorsque l'utilisateur va revenir sur la page

        // lors de l'initialisation, je lis la valeur contenu dans la clé thème
        // du cookie
        const themeValueOfLocalStorage = theme.lireValeurDuCookieTheme();

        // Si lors de la dernière visite j'ai enregistré la valeur dark
        if(themeValueOfLocalStorage == "dark") {
            let body = document.querySelector("body"); 
            body.classList.add(theme.themeDarkCSSClass); 

            // j'enregistre la valeur dark dans la variable
            theme.themeValue = themeValueOfLocalStorage;
        }
        
    }
}


// Comment je peux lancer la fonction init du module theme, lorsque le page HTML est chargée :

theme.themeDarkCSSClass = "theme-dark";
theme.buttonSelectorId = "theme-switch";
document.addEventListener("DOMContentLoaded", theme.init);



