let newSVG = document.querySelectorAll('path');

console.log(newSVG[0])

function setup() {
  anime({
    targets: newSVG[0],
    translateX: 250,
      // strokeDashoffset: [offset, 0],
    duration: anime.random(1000, 2000),
    delay: anime.random(0, 2000),
    loop: true,
    direction: 'alternate',
    easing: 'easeInOutSine',
  });
}


function mouseClicked(){
  console.log("Clicked")

  for (let index = 0; index < newSVG.length; index++) {
    let element = newSVG[index];

    anime({
      targets: element,
      translateX: 250,
      // strokeDashoffset: [offset, 0],
      duration: anime.random(1000, 2000),
      delay: anime.random(0, 2000),
      loop: true,
      direction: 'alternate',
      easing: 'easeInOutSine',
    });
  }
}
