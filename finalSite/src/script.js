var animatedPaths = [];

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

function scrollPlay() {

    // retrieve the current scroll position
    scrollPosition = window.pageYOffset;

    // offsetCorrection
    let yOffsetCorrection = 0

    // get the frame for the current scroll position plus Y correction
    let frame = scrollConvertion(scrollPosition + yOffsetCorrection);

    // animate all the paths
    for (let index = 0; index < animatedPaths.length; index++) {
        animatedPaths[index].seek(frame);
    }
    // refresh the scroll position
    window.requestAnimationFrame(scrollPlay);
}

function scrollConvertion(scrollPosition) {
    let totalHeight = document.body.clientHeight - window.innerHeight;
    let nFrames = 6000;
    return Math.floor((scrollPosition / totalHeight) * nFrames);
}

scrollPlay();


// hover image function

let imgs = document.querySelectorAll('img');

for (let i = 0; i < imgs.length; i++) {
    imgs[i].addEventListener('mouseenter', enterImg);
    imgs[i].addEventListener('mouseleave', leaveImg);
}

function printMessage() {
    console.log("Do animation");
}

function animateImg(translateX, translateY, duration, elasticity, target) {
    anime.remove(imgs);
    anime({
        targets: target,
        translateX: translateX,
        translateY: translateY,
        duration: duration,
        elasticity: elasticity
    });
}

function enterImg(evt) {
    animateImg(-25, 25, 800, 300, evt.target)
};

function leaveImg(evt) {
    animateImg(0, 0, 600, 200, evt.target)
};
