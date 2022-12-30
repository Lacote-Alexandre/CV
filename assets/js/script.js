// NAVBAR

let lastScrollTop = 0;
navbar = document.getElementById('navbar');

window.addEventListener('scroll', function(){
  const scrollTop = window.pageTOffset || this.document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    navbar.style.top="-50px";
  } else {
    navbar.style.top="0";
  }
  lastScrollTop = scrollTop;

});

// TYPED

var typed = new Typed('.typed', {
  strings: ["Après de multiples expériences dans le commerce, j'ai décidé de me réorienter vers le développement Web. J'ai décidé de rejoindre l'école O'Clock car l'expertise et le programme intensif (6 mois) est parfait pour moi. Je recherche à présent un stage d'un durée allant de 2 à 6 mois et commencant au mois de mars 2023 afin de valider mon diplôme de développeur WEB."],
  typeSpeed: 25,
});

// COMPTEUR LIVE

let compteur = 0;

$(window).scroll(function() {

  const top = $('.counter').offset().top - window.innerHeight;

  if (compteur == 0 && $(window).scrollTop() > top) {
    $('.counter-value').each(function() {
      let $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
        countNum : countTo
      },
      {
        duration: 10000,
        easing: 'swing',
        step: function() {
          $this.text(Math.floor(this.countNum));
        },
        complete: function() {
          $this.text(this.countNum);
        }
      });
    });
    compteur = 1;
  }
});

//AOS

AOS.init();