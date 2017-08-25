const secondHand = document.querySelector(".second-hand");
const minHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

function setDate(){
  const now = new Date();


  const seconds = now.getSeconds();
  if (seconds==60 || seconds==59 ) {
    secondHand.style.transition=`none`;
  }
  const secondsDegrees = ((seconds/60)*360)+90;
  secondHand.style.transform=`rotate(${secondsDegrees}deg)`;

  const minutes = now.getMinutes();
  const minutesDegres = ((minutes/60)*360)+90;
  minHand.style.transform=`rotate(${minutesDegres}deg)`;

  const hour = now.getHours();
  const hourDegres = ((hour/12)*360)+90;
  hourHand.style.transform=`rotate(${hourDegres}deg)`;
};

setInterval(setDate, 1000);
