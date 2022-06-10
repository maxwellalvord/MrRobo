function beepBoop(numbers) {
  let answer = "";
  let numberArray = Array.from(String(numbers), Number);
  console.log(numberArray)
  console.log(numbers);
  numberArray.forEach(function(numbers) {

    if (numbers == 1) {
    answer = "beep";
    console.log(answer);
  } else if (numbers == 2) {
    answer = "boop";
    console.log(answer);
  }
});
}







// function beepBoop(numbers) {
//   const finalArray = [];
//   const textArray = numbers.split(" ");
//   let numberArray = Array.from(String(numbers), Number);
//   let counter = 0;
//   for (i = 0; i < numberArray; i++) {
//     if (counter < numbers) {
//     finalArray.push(numberArray[i]);
//     counter += 1;
//     } else if (counter < 1 || numbers)
//     finalArray.push((numberArray[i] - counter) + numberArray[i]);
//     counter += 1;

//   console.log(finalArray);
//   }
// }
    
  
  


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
  
