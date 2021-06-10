let correct_ans = getRandomIntInclusive(1, 10);

let Result;


//define function

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); 
  //The maximum is inclusive and the minimum is inclusive
}


for (var j = 1; j <= 3; j++) {

  let input1 = prompt("Guess your Correct Number(1-10)");

  input1 = parseInt(input1);

  if (input1 == correct_ans) {

    Result = "You Win!"
  }

  else if (input1 > correct_ans) {

    Result = "Correct Answer is smaller!"
  }

  else if (input1 < correct_ans) {

    Result = "Correct Answer is Grater!"

  }


  alert(Result)

  if (Result == "You Win!") {
    break;
  }

  

  if( j == 1 ){
    alert("2 Chance Left");
   
  }

  else if( j == 2) {
   alert("Last Chance");
  }

  else{
    
    break;
  }

}

// Outside The loop


if (Result != "You Win!") {

  alert("You lost!");

}

