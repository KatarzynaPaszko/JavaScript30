function removeTransition(e) {
  if (e.propertyName != "transform") {
    return;
  }
  this.classList.remove("playing");
}

function playSound(e) {
  var audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
  var key = document.querySelector(`.key[data-key="${e.keyCode}"]`)

  // if you hit key that is not associated with data-key of audio elements, then stop function
  if (!audio) {
    return
  }
  // start playing audio from begening after every key hit
  audio.currentTime = 0;

  audio.play();
  key.classList.add("playing");
}

const keys = document.querySelectorAll(".key");
keys.forEach(element => element.addEventListener('transitionend', removeTransition));
window.addEventListener("keydown", playSound);
