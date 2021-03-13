var x = 3;
function switchVisible() {

    switch(x) {
        case 3:
            document.getElementById('Div1').style.display = 'none';
            document.getElementById('Div2').style.display = 'block';
            x++;
          break;
        case 4:
            document.getElementById('Div2').style.display = 'none';
            document.getElementById('Div3').style.display = 'block';
            x++
          break;
        
        case 5:
            document.getElementById('Div3').style.display = 'none';
            document.getElementById('Div4').style.display = 'block';
            x++;
          break;
          case 6:
            document.getElementById('Div4').style.display = 'none';
            document.getElementById('Div5').style.display = 'block';
            x++;
          break;
          default:
          // code block
      } 
}


var counter = 0;

function startTimer(duration, display) {

    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            
            document.getElementById('time').innerHTML = "Finished";
            
            if(counter == 0) {
                setTimeout(function (){

                var audio = new Audio('alarm.mp3');
                audio.play();
                counter++;
              }, 2000);
            }

            
              
        }
    }, 1000);

    
}


var counterTwo = 0 ;

function startTimertwo(duration, display) {

  var timer = duration, minutes, seconds;
  setInterval(function () {
      minutes = parseInt(timer / 60, 10);
      seconds = parseInt(timer % 60, 10);

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      display.textContent = minutes + ":" + seconds;

      if (--timer < 0) {
          
          document.getElementById('timetwo').innerHTML = "Finished";
          
          if(counterTwo == 0) {
              setTimeout(function (){

              var audio = new Audio('alarm.mp3');
              audio.play();
              counterTwo++;
            }, 2000);
          }

          
            
      }
  }, 1000);

  
}

function myFunction() {

  
  }

  function hideButton() {
    document.getElementById('buttontohide').style.display = 'none';
}







function start(){
    var twelveMins = 60 * 12, display = document.querySelector('#time');
    startTimer(twelveMins, display);
}

function starttwo(){
  var sixMins = 60 * 6, display = document.querySelector('#timetwo');
  startTimertwo(sixMins, display);
}






function switchText(text) {
    document.getElementById("text").innerHTML = text;

    document.getElementById('inthemeantime').style.display = 'none';

    document.getElementById('bottompart').style.display = 'none';

    document.getElementById("lastmessage").innerHTML = "Bon appetite!";
    
}




var startwertStr = document.getElementById('thone').innerHTML;
var startWert = parseInt(startwertStr);

var startwertStr_two = document.getElementById('thtwo').innerHTML;
var startWert_two = parseInt(startwertStr_two);

var startwertStr_three = document.getElementById('ththree').innerHTML;
var startWert_three = parseInt(startwertStr_three);

var startwertStr_four = document.getElementById('thfour').innerHTML;
var startWert_four = parseInt(startwertStr_four);

function addServing(){

     var numofnodes = document.getElementById('servingsnumber').innerHTML;
     var aktuell = parseInt(numofnodes);
     var aktuell = aktuell + 1;
     document.getElementById('servingsnumber').innerHTML = aktuell;

     var one = document.getElementById('thone').innerHTML;
     var inhalt = parseInt(one);
     
     var neww = inhalt + startWert;
     document.getElementById('thone').innerHTML = neww + 'g';


     var onee = document.getElementById('thtwo').innerHTML;
     var inhaltt = parseInt(onee);
     
     var newww = inhaltt + startWert_two;
     document.getElementById('thtwo').innerHTML = newww + 'g';


     var oneee = document.getElementById('ththree').innerHTML;
     var inhalttt = parseInt(oneee);
     
     var newwww = inhalttt + startWert_three;
     document.getElementById('ththree').innerHTML = newwww ;


     var oneeee = document.getElementById('thfour').innerHTML;
     var inhaltttt = parseInt(oneeee);
     
     var newwwww = inhaltttt + startWert_four;
     document.getElementById('thfour').innerHTML = newwwww + 'g';
}

