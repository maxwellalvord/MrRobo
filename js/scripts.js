// Business Logic
function beepBoop(number) {
  let numberArray = Array.from(String(number), Number)
  console.log(numberArray);

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





