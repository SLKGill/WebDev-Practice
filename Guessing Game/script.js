let btn = document.getElementById('btn');
let output = document.getElementById("outputtext");

let number = Math.floor(Math.random()*100);
//console.log(number);

let attempts = document.getElementById('attempts').value = 0;

btn.addEventListener('click', function(){
  attempts++;
  //console.log(attempts)
  document.getElementById('attempts').value= attempts; 
  let input = document.getElementById('userinput').value;
  if(input==number){
    output.innerHTML = `You guessed right, your number was ${number}`
  }
  else if(input < number){
    output.innerHTML = "You guessed too low!"
  };
  if(input>number){
    output.innerHTML = "You guessed too high"
  };
});
