function Everything(place, when, who) {
  this.place = place;
  this.when = when;
  this.who = who;

   Everything.prototype.destinationInfo = function() {
     return "You went to " + place + " with " + who + " on " + when;
  }
 }

$(document).ready(function() {
  $("form#newInput").submit(function(event) {
    event.preventDefault();

    var inputtedPlace = $("input#place").val();
    var inputtedWhen = $("input#when").val();
    var inputtedWho = $("input#who").val();

    var newEverything = new Everything(inputtedPlace, inputtedWhen, inputtedWho);

    $("ul#listOfPlaces").append("<li><span class='list'>" + inputtedPlace + "</span></li>")

    $(".list").last().click(function(){
      $(".show-destination").show();
      $(".destination").text(newEverything.destinationInfo);
    });
  });
});
