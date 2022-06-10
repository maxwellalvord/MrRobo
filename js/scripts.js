// Business Logic
function beepBoop(number) {
  let finalArray = [];
  let numberArray = Array.from(String(number), Number) 
  console.log(numberArray);
  for (i = number; i < 0; i--) {
    if (i === number) {
      finalArray.push(numberArray[i]);
      console.log(finalArray);
    
  }; return finalArray;
}
















// UI Logic

$(document).ready(function() {
  $("form#code").submit(function(event){
    event.preventDefault();
    let ogValue = parseInt($("#usernum").val());
    beepBoop(ogValue);
    // $("#robonum").html();
  });
})};