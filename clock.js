//Seconds Hand
function seconds(){
  var degrees = 0;
  setInterval(secondsRotation,1000);
  function secondsRotation(){
    var s = document.getElementById('second');
    s.style.transform="rotate("+(degrees+=6)+"deg)";
  }
}




seconds();
