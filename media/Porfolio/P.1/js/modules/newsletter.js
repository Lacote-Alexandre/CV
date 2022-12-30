
const newsletter = {
    forbiddenEmailExtensions: [
      '@yopmail.com',
      '@yopmail.fr',
      '@yopmail.net',
      '@cool.fr.nf',
      '@jetable.fr.nf',
      '@courriel.fr.nf',
      '@moncourrier.fr.nf',
      '@monemail.fr.nf',
      '@monmail.fr.nf',
      '@hide.biz.st',
      '@mymail.infos.st',
    ],
    elementSelector: '.newsletter',
    inputElementSelector: '.newsletter__field',
    menuitemButtonElementSelector: '.item__newsletter',
    closeElementSelector: '.newsletter__close',
    newsletterShowClass: 'newsletter--on',


    element: '',
    inputElement: '',
    formElement: '',

    init: function() {
      // on mémorise les élements qui nous intéresse
      newsletter.element = document.querySelector(newsletter.elementSelector);
      newsletter.inputElement = document.querySelector(newsletter.inputElementSelector);
      
      // clic sur l'item de menu newsletter
      const menuitemElement = document.querySelector(newsletter.menuitemButtonElementSelector);
      menuitemElement.addEventListener('click', newsletter.handleClick);
  
      // écoute du scroll
      window.addEventListener('scroll', newsletter.handleScroll);
  
      // petite croix pour fermer
      const closeElement = document.querySelector(newsletter.closeElementSelector);
      closeElement.addEventListener('click', newsletter.hide);
  
      // écoute de la soumission du formulaire
      newsletter.formElement = newsletter.element.querySelector('form');
      newsletter.formElement.addEventListener('submit', newsletter.handleSubmit);
    },
  
    // ajout d'une classe pour passer en display:block
    show: function() {
      newsletter.element.classList.add(newsletter.newsletterShowClass);
    },
  
    // suppression d'une classe pour repasser en display:none
    hide: function() {
      newsletter.element.classList.remove(newsletter.newsletterShowClass);
    },
  
    // au clic on va afficher la newsletter et cibler le champ
    handleClick: function(event) {
      event.preventDefault();
      newsletter.show();
      newsletter.inputElement.focus(); // on cible le champ, cool pour l'ux
    },
  
    // à partir d'un certain niveau de scroll on affiche le bloc
    handleScroll: function() {
      if (window.scrollY > 250) {
        newsletter.show();
        // on peut arrêter d'écouter, ça ne s'affichera plus au scroll
        window.removeEventListener('scroll', newsletter.handleScroll);
      }
    },
  
    // méthode de validation avec valeur de retour *_*
    checkBadEmail: function(email) {
      for (const extension of newsletter.forbiddenEmailExtensions) {
        if (email.includes(extension)) {
          return true;
        }
      }
      return false;
    },
  
    // pour un email jetable on empeche la soumission
    handleSubmit: function(event) {
      // if (newsletter.inputElement.value.includes('@yopmail.com')) { // version simple pour commencer
      if (newsletter.checkBadEmail(newsletter.inputElement.value)) {
        event.preventDefault();
        // on a accès aux autres modules définis globalement
        // ici le module messages
        // Pour cela, on doit charger dans le HTML

        /*
            <script src="js/modules/messages.js" defer />
            <script src="js/modules/newsletter.js" defer />
        */
        messages.addMessageToElement('Les adresses jetables ne sont pas admises', newsletter.element);
      }
    },
  };

// j'appelle la fonction init du module newsletter après chargement du HTML
document.addEventListener("DOMContentLoaded", newsletter.init);