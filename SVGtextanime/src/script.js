
//// the collection of animated path
var animatedPaths = [];

// the boolean variable controlling the mouse button action
var animationPaused = true;

function setup() {

  // retrieve all the SVG paths in the html
  var pathEls = document.querySelectorAll('path');

  for (var i = 0; i < pathEls.length; i++) {

      // for each path
      var pathEl = pathEls[i];

      // Set an offset along the path.
      var offset = anime.setDashoffset(pathEl);

      pathEl.setAttribute('stroke-dashoffset', offset);

      // Animation parameters
      let tmp = anime({
          targets: pathEl,
          strokeDashoffset: [offset, 0],
          duration: anime.random(1000, 3000),
          delay: anime.random(0, 2000),
          loop: true,
          direction: 'alternate',
          easing: 'easeInOutSine',
          autoplay: false
    });

      tmp.play()
          // storage of animated pats in a collection
          animatedPaths.push(tmp);
    }

}
