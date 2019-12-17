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

$(document).ready(function () {

  function getValues() {
    school = $("input:radio[name=question1]:checked").val();
  }

  $("form#suggestion").submit(function (event) {

    getValues();
    event.preventDefault();

    if (school == "Art") {
      $("#choice").text(answer + language1);
    }

    if (school == "Science") {
      $("#choice").text(answer + language2);
    }

    else if (school == "Both") {
      $("#choice").text(answer + language3);
    }


  })
});