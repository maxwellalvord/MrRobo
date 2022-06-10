// Business Logic
function beepBoop(number) {
  let 
  let numberArray = Array.from(String(number), Number)
  for (i = 0; i < numberArray.length -1; i++)

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





