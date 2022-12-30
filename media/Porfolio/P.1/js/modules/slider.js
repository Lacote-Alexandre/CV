const slider = {
    // la source de vérité pour savoir à quel slider on en est
    position: 0,
  
    init: function() {
      // on mémorise les élements qui nous intéresse
      slider.element = document.querySelector('.slider');
      slider.slidesElements = slider.element.querySelectorAll('.slider__img');
      slider.slidesNumber = slider.slidesElements.length;
  
      // boutons prev/next
      const buttons = slider.element.querySelectorAll('.slider__btn');
      buttons[0].addEventListener('click', slider.previous);
      buttons[1].addEventListener('click', slider.next);
      
      // pastilles de nav
      slider.buildNav();
    },
  
    previous: function() {
      let previousPosition;
      // on détermine la position du slide précédent
      if (slider.position - 1 >= 0) {
        previousPosition = slider.position - 1;
      }
      else {
        previousPosition = slider.slidesNumber - 1;
      }
      // on va à la nouvelle position
      slider.goto(previousPosition);
    },
  
    next: function() {
      let nextPosition;
      // on détermine la position du slide suivant
      if (slider.position + 1 < slider.slidesNumber) {
        nextPosition = slider.position + 1;
      }
      else {
        nextPosition = 0;
      }
      // on va à la nouvelle position
      slider.goto(nextPosition);
    },
  
    goto: function (newPosition) {
      // ancien slide courant
      slider.slidesElements[slider.position].classList.remove('slider__img--current');
      // on mémorise la position du nouveau slide courant 
      slider.position = newPosition;
      // nouveau slide courant
      slider.slidesElements[slider.position].classList.add('slider__img--current');
    },

    buildNav: function() {
      const nav = document.createElement('div');
      nav.className = 'slider__nav';
  
      // autant de pastilles que de slides
      for (let counter = 0; counter < slider.slidesNumber; counter ++) {
        const navItem = document.createElement('button');
        navItem.type = 'button';
        navItem.className = 'slider__nav-item';
        const title = 'Aller au slide #' + (counter + 1);
        navItem.setAttribute('aria-label', title); // https://developer.mozilla.org/fr/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-label_attribute
        navItem.addEventListener('click', function() {
          slider.goto(counter);
        });
        nav.append(navItem);
      }
  
      slider.element.append(nav);
    }
};

document.addEventListener("DOMContentLoaded", slider.init);