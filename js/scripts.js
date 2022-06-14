// Business Logic


function beepBoop(numbers) {
  let numberArray = [];
  let error = [];
  if (numbers > 10000) {
    error.push("invalid number, please enter a number below 10,000.")
    return error;
  }
  for (let i = 0; i <= numbers; i++) {
    if (i.toString().match(/3/)){
      numberArray.push(" Won't you be my neighbor?");
    } else if (i.toString().match(/2/)){
        numberArray.push(" Boop");
    } else if (i.toString().match(/1/)){
        numberArray.push(" Beep");
    } else {
      numberArray.push(" " + i);
    } 
  } return numberArray;
}



// UI Logic

$(document).ready(function() {
  $("form#code").submit(function(event) {
    event.preventDefault();
    let ogValue = parseInt($("#usernum").val());
    $("#robonum").html(beepBoop(ogValue));
    $(".container p").show()
  });
});
  
