// Business Logic
function beepBoop(numbers) {
  let answer = "";
  let numberArray = Array.from(String(numbers), Number);
  let spaceArray = numbers.split(" ");
  spaceArray.forEach(function(numbers) {

    if (numbers == 1) {
    answer = "0 beep";
  } else if (numbers == 2) {
    answer = "0 beep boop";
  } else if (numbers == 3) {
    answer = "0 beep boop Wybmn"
  }  else if (numbers == 4) {
    answer = "0 beep boop Wybmn 4"
  } else if (numbers == 5) {
    answer = "0 beep boop Wybmn 4 5"
  } else if (numbers == 6) {
    answer = "0 beep boop Wybmn 4 5 6"
  } else if (numbers == 7) {
    answer = "0 beep boop Wybmn 4 5 6 7"
  } else if (numbers == 8) {
    answer = "0 beep boop Wybmn 4 5 6 7 8"
  } else if (numbers == 9) {
    answer = "0 beep boop Wybmn 4 5 6 7 8 9"
  } else if (numbers == 10) {
    answer = "0 beep boop Wybmn 4 5 6 7 8 9 beep"
  } else if (numbers == 11) {
    answer = "0 beep boop Wybmn3 4 5 6 7 8 9 beep beep"
  } else if (numbers == 12) {
    answer = "0 beep boop Wybmn 4 5 67 8 9 beep beep boop"
  } else if (numbers == 13) {
    answer = "0 beep boop 3 4 5 6 7 8 9 beep beep boop Wybmn"
  } else if (numbers == 14) {
    answer = "0 beep boop Wybmn 4 5 6 7 8 9 beep beep boop Wybmn beep"
  } else if (numbers == 15) {
    answer = "0 beep boop Wybmn 4 5 6 7 8 9 beep beep boop Wybmn beep beep"
  } 
}); return answer;
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
    $("#robonum").html(beepBoop(ogValue));
    $(".container p").show()
  });
});
  
