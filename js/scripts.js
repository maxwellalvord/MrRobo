function beepBoop(number) {
  let finalArray = [];
  let numberArray = Array.from(String(number), Number) 
  console.log(numberArray);
  numberArray.forEach (function(number) {
      finalArray.push(numberArray - (number));
      finalArray.push(numberArray - (number-1));
      finalArray.push(numberArray - (number-2));
      finalArray.push(numberArray - (number-3));
      finalArray.push(numberArray - (number-4));
      finalArray.push(number);
      console.log(finalArray);
    
  }); return finalArray;
}















// UI Logic

$(document).ready(function() {
  $("form#code").submit(function(event){
    event.preventDefault();
    let ogValue = parseInt($("#usernum").val());
    beepBoop(ogValue);
    // $("#robonum").html();
  });
});