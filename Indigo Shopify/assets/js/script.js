$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: false, // Disable navigation arrows
    responsive: {
      0: {
        items: 1
      },
      576: {
        items: 1
      },
      768: {
        items: 2
      },
      992: {
        items: 2
      },
      1200: {
        items: 3
      }
    }
  });