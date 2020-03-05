anime({
  targets: '.star',
  translateX: 250,
  translateY: 100,
  rotate: {
    value: 360,
    duration: 500
  },
  scale: {
    value: 1.2,
    duration: 700,
    delay: 1000
  },
  direction: 'alternate',
  loop: true,
  easing: 'easeOutSine'
});

anime ({
  targets: '.hellokitty',
  translateX: 200,
  translateY: {
    value: -25,
    delay: 500
  },
  rotate: {
    value: [-20, 20],
    delay: 200,
  },
  direction: 'alternate',
  delay: 500,
  duration: 2000,
  loop: true,
  easing: 'easeOutSine'
});

let anyName = document.getElementById("image1")
anime({
    targets: anyName,
    translateX: [0, 330],
    loop: true,
    direction: 'alternate',
    skewY: 30,
    duration: 4000,
    delay: anime.stagger(200), /**isn't working**/
    easing: 'easeInOutExpo'
});

anime({
    targets: '.image2',
    loop: true,
    direction: 'alternate',
    skewY: 30,
    duration: 4000,
    delay: anime.stagger(200),
    easing: 'easeInOutExpo'
});

anime({
    targets: '.image3',
    loop: true,
    direction: 'alternate',
    translateX: [0, -330],
    skewY: 30,
    duration: 4000,
    delay: anime.stagger(200),
    easing: 'easeInOutExpo'
});
