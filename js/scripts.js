// back-end logic:

var language1 = "Swift/CSS"
var language2 = "Python"
var language3 = "Ruby/C#/JavaScript"
var answer = "You should try: "
var school;
var xmas;
var date;
var career;
var food;

// front-end logic:

$(document).ready(function() {
  $("form#suggest").submit(function(event) {
   event.preventDefault();
  });
});