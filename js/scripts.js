function Everything(place, when, who) {
  this.place = place;
  this.when = when;
  this.who = who;
}

 Everything.prototype.destinationInfo = function() {
   return "You went to " + this.place + " with " + this.who + " on " + this.when;
 }

$(document).ready(function() {
  $("form#newInput").submit(function(event) {
    event.preventDefault();

    var inputtedPlace = $("input#place").val();
    var inputtedWhen = $("input#when").val();
    var inputtedWho = $("input#who").val();

    var newEverything = new Everything(inputtedPlace, inputtedWhen, inputtedWho);

    $("ul#listOfPlaces").append("<li><span class='list'>" + newEverything.destinationInfo() + "</span></li>")

    $("input#place").val("");
    $("input#when").val("");
    $("input#who").val("");

  });
});
