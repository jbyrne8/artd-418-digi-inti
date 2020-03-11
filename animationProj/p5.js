var animatedPaths = [];

// the boolean variable controlling the mouse button action
var animationPaused = true;

function setup() {

  // retrieve all the SVG paths in the html
  var pathEls = document.querySelectorAll('.st0');

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
          duration: anime.random(9000, 12000),
          delay: anime.random(0, 200),
          loop: true,
          direction: 'alternate',
          easing: 'easeInOutSine',
          autoplay: false,
          scale: 7
    });

      tmp.pause()
          // storage of animated pats in a collection
          animatedPaths.push(tmp);
    }

}

let yScroll;

// let chars = document.querySelectorAll("path")
// //console.log(chars)
// let charsA;

// function setup(){
//
// charsA = setupAnimation(chars);
//
// }

// function setupAnimation(thePaths){
//
// let temp = [];
//
// for (var i = 0; i < thePaths.length; i++) {
//
//   let p = anime({
//       targets: thePaths[i],
//       easing: 'easeOutSine',
//     });
//     temp.push(p)
// }
//
// return temp;
// }

function draw(){
  yScroll = window.pageYOffset;
  console.log(yScroll)
  updateScale(animatedPaths);
}

function getScaleScroll(){
  return (yScroll / 14000)
}

function updateScale(animPaths){

  for (var i = 0; i < animPaths.length; i++) {
    animPaths[i].seek(yScroll);// = 5 ;//+ getScaleScroll();
  }

}
