function beepBoop(numbers) {
  const textArray = numbers.split(" ");
  console.log(textArray);
}
    
  
  


// Business logic
// function beepBoop(number) {
//   let finalArray = [];
//   let numberArray = Array.from(String(number), Number) 
//   console.log(numberArray);
//   numberArray.forEach (function(number) {
//     console.log(number)
//       finalArray.push(numberArray - (number));
//       finalArray.push(numberArray - (number-1));
//       finalArray.push(numberArray - (number-2));
//       finalArray.push(numberArray - (number-3));
//       finalArray.push(numberArray - (number-4));
//       finalArray.push(numberArray - (number-5));
//       finalArray.push(numberArray - (number-6));
//       finalArray.push(numberArray - (number-7));
//       finalArray.push(number);
//       console.log(finalArray);
    
//   }); return finalArray;
// }












// UI Logic

$(document).ready(function() {
  $("form#code").submit(function(event) {
    event.preventDefault();
    let ogValue = $("#usernum").val();
    beepBoop(ogValue);
    // $("#robonum").html();
  });
});
  
