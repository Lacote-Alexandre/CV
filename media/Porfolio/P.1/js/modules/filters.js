const reviewsFilter = {

    // Initialisation du module
    // Pour le moment, on ne fait qu'ajouter les écouters évènements
    // mais si le code évolue, on sera déjà prêt à faire d'autres choses ici.
    init: function() {
        

        /**
         * <span class="filter">
             <input type="checkbox" name="rating" value="3" id="rating-3" checked>
             <label for="rating-3">3 étoiles</label>
           </span>
         */

        // On récupère les cases à cocher permettant de filtrer selon la note
        const ratingCheckboxes = document.querySelectorAll('.filter input[name="rating"]');

        // On parcourt chaque case à cocher
        for (const ratingCheckbox of ratingCheckboxes) {
            // et on lui ajoute un écouteur d'évènement au clic
            ratingCheckbox.addEventListener('click', reviewsFilter.handleClickOnRatingCheckbox);
        } 
         
    },

    // Lors d'un clic sur la case à cocher, on va filtrer les commentaires affichés
    handleClickOnRatingCheckbox: function(event) {

        // On récupère la case à cocher à l'origine de l'évènement
        const ratingCheckbox = event.currentTarget;
        
        // Cela nous permet ensuite de savoir sur quelle note on a cliqué
        const rating = ratingCheckbox.value;

        // Il reste alors à afficher ou cacher les commentaires ayant la même note
        reviewsFilter.toggleReviewsFromRating(rating);
        
    },

    // Sélectionne les commentaires ayant une note donnée,
    // et inverse sa visibilité : 
    // - si commentaire caché => on l'affiche 
    // - si commentaire affiché => on le cache
    toggleReviewsFromRating: function(rating) {

        // On commence par récupérer la liste des commentaires ayant la note donnée
        // => et grâce au dataset, c'est vraiment très pratique !
        const reviewsToFilter = document.querySelectorAll('.review[data-rating="'+ rating +'"]');

        // Reste à parcourir chaque commentaire pour inverser sa visibilité
        for (const reviewElement of reviewsToFilter) {
            // On peut faire ça directement avec toggle
            // - si la classe review--hidden est présente, toggle l'enlève
            // - si la classe review--hidden est absente, toggle la rajoute
            reviewElement.classList.toggle('review--hidden');
        }

    },
};

// On initialise les filtres une fois que le DOM est chargé
document.addEventListener('DOMContentLoaded', reviewsFilter.init);