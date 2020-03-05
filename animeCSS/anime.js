// By CSS class
anime({
    targets: '.txt',
    translateX: 390,
    skewX: 50,
    delay: anime.stagger(100),
    direction: 'alternate',
    easing: 'easeInOutExpo'
});

//  By Element ID
let anyName = document.getElementById("id1")
anime({
    targets: anyName,
    translateX: 390,
    delay: anime.stagger(200),
    direction: 'alternate',
    easing: 'easeInOutQuad'
});

// By query selector
let rows = document.querySelectorAll(".txt2")
anime({
    targets: rows,
    translateX: 390,
    delay: anime.stagger(300),
    direction: 'alternate',
    easing: 'easeInOutQuad'
});

// by element Tag
let drawings = document.querySelectorAll("svg")
anime({
    targets: drawings,
    translateX: 390,
    easing: 'easeInQuad'
});

// TRANSFORMATIONS
let transform = document.querySelectorAll(".box3")
anime({
    targets: transform,
    translateX: 575,
    skew: 40,
    scale: 1.2,
    easing: 'easeInQuad'
});

// PROPERTIES
let props = document.querySelectorAll(".image")
anime({
    targets: props,
    translateX: {
        value: 390,
        duration: 800
    },
    rotate: {
        value: 330,
        duration: 1800,
        easing: 'easeInOutSine'
    },
    scale: {
        value: 3,
        duration: 1600,
        delay: 800,
        easing: 'easeInOutQuart'
    },
    loop: true,
    direction: 'alternate',
    delay: 250 // All properties except 'scale' inherit 250ms delay
});
