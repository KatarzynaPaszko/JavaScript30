window.addEventListener("keydown", function(e){

  var audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
  // if you hit key that is not associated with data-key of audio elements, then stop function
  if (!audio) {
    return
  }
  // start playing audio from begening after every key hit
  audio.currentTime = 0;
  
  audio.play();

})
