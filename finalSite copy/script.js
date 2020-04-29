/*var animatedPaths = [];


function setup() {

    // retrieve all the SVG paths in the html
    var pathEls = document.querySelectorAll('path');

    for (var i = 0; i < pathEls.length; i = i + 1) {

        // for each path
        var pathEl = pathEls[i];

        // Set an offset alonf the path. Here we use thge library anime.js !!Awesome library!!
        // see documentation here: http://animejs.com/documentation/
        var offset = anime.setDashoffset(pathEl);

        pathEl.setAttribute('stroke-dashoffset', offset);

        // Animation parameters
        let tmp = anime({
            targets: pathEl,
            strokeDashoffset: [offset, 0],
            delay: 500,
            duration: 6000,
            easing: 'easeInOutSine',
            autoplay: false
        });

        // storage of animated pats in a collection
        animatedPaths.push(tmp);
    }

    scrollPlay()
}

function scrollPlay() {
    // refresh the scroll position
    window.requestAnimationFrame(scrollPlay);

    // retrieve the current scroll position
    scrollPosition = window.pageYOffset;

    // offsetCorrection
    let yOffsetCorrection = 300

    // get the frame for the current scroll position plus Y correction
    let frame = scrollConvertion(scrollPosition + yOffsetCorrection);

    // animate all the paths
    for (let index = 0; index < animatedPaths.length; index++) {
        animatedPaths[index].seek(frame)
    }
}

function scrollConvertion(scrollPosition) {
    let totalHeight = document.body.clientHeight - window.height;
    let nFrames = 6000;
    return Math.floor((scrollPosition / totalHeight) * nFrames);
}*/
//
//
//
//
// hover image function

let imgs = document.querySelectorAll('img'); 

 console.log(imgs);

 for (let i = 0; i < imgs.length; i++) { 
   imgs[i].addEventListener('mouseenter', printMessage);  
 }  
   function printMessage() { 
     console.log("Do animation"); 
  }

/*function animateImg (scale, duration, elasticity) {
  anime.remove(imgEl);
  anime({
    targets: imgEl,
    scale: scale,
    duration: duration,
    elasticity: elasticity
  });
}*/
  /*function enterImg() {animateImg(1.2, 800, 400); console.log("hello") };
  function leaveImg() {animateImg (1.0, 600, 300)};*/

  /*for(let i = 0; i < imgEl.length; i ++){

    imgEl[i].addEventListener('mouseenter', (event) => {
      anime ({
        targets: imgEl,
        easing: 'easeOutExpo',
        scale: 1,
        translateX: -25,
        translateY: -25,
        duration: 600,
      })
    })

    imgEl[i].addEventListener('mouseleave', (event) => {
      anime({
        targets: imgEl,
        easing: 'easeInExpo',
        scale: 1,
        translateX: 25,
        translateY: 25,
        duration: 600,
      })
    });
  }

  //

  //imgEl.addEventListener('mouseenter', enterImg, false);
  //imgEl.addEventListener('mouseleave', leaveImg, false);
/*
let body = document.querySelectorAll('.container-fluid');

var imgEl = document.querySelectorAll("img");

//document.forEach((service) => {
  document.addEventListener('mouseenter', (event) => {

  })

  document.addEventListener('mouseleave', (event) => {

  }) */
