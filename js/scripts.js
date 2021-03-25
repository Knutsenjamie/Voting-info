$(document).ready(function() {
  
  const age = parseInt(prompt("Enter Your Age"));

  if (age >= 18) {
    $('#eligible').show();
    } else if (age < 18){
    $('#Ineligible').show();  
    } else {
    alert("Please enter a number.")
    }
});
