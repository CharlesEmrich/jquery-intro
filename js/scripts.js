$(document).ready(function() {
  var counter = 0;
  var test = "ugh.";

  $("h1").click(function() {
    alert("This is a header.");
  });

  $("h3").mouseenter(function(event) {
    counter += 1;
    console.log(event);
    alert("Welcome! " + counter + test);
  });

  $("p").click(function() {
    alert("This is a paragraph.");
  });

  $("img").click(function() {
    alert("This is an image.");
  });
});
