const messages = {
    init: function() {
      // au clic sur un coeur
      const likeElements = document.querySelectorAll('.btn__like');
      for (const likeElement of likeElements) {
        likeElement.addEventListener('click', messages.handleLikeClick);
      }
    },
  
    // création d'une erreur dans la carte la plus proche
    handleLikeClick: function(event) {
      const parent = event.target.closest('.card');
      const sentence = 'Vous devez être connecté pour gérer vos favoris';
      messages.addMessageToElement(sentence, parent);
    },
  
    addMessageToElement: function(messageContent, parentElement) {
      // suppression des messages existants
      const oldMessages = parentElement.querySelectorAll('.message');
      for (const oldMessage of oldMessages) {
        oldMessage.remove();
      }
      // nouveau message
      const messageElement = document.createElement('p');
      messageElement.className = 'message';
      messageElement.textContent = messageContent;
      parentElement.prepend(messageElement);
    }
};

// j'appelle la fonction init du module messages après chargement du HTML
document.addEventListener("DOMContentLoaded", messages.init);