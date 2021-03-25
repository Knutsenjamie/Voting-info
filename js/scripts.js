$(document).ready(function() {
  const age = parseInt(prompt("Enter Your Age"));

  if (age => 18) {
  $('#eligible').show();
  } else {
  $('#Ineligible').show();  
  }
});
