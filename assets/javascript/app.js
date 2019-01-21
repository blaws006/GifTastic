$(document).ready(function() {
  	//Need an array variable to list heroes in
    var heroList = ["Thor", "Iron Man", "Spider-Man", "Hulk", "Black Panther"];
    
    // Function loops through the heroList array and creates the buttons with the hero names.
  	function heroButton () {
      $('.comicButtons').empty();
      for (var i = 0; i < heroList.length; i++) {
        var buttons = $("<button type='button' class='btn btn-primary btn-sm button-style'>");
        buttons.attr("id", i);
        buttons.attr("data-hero-" + i, heroList[i])
        buttons.text(heroList[i]);
        $(".comicButtons").append(buttons);
      };
    };
    heroButton();
    
    // Submission on the form creates a new button 
    $(".addComic").click(function (event) {
      event.preventDefault();
      var submit = $("input.hero-input").val();
      buttons = $("<button type='submit' class='btn btn-primary btn-sm'>");
      heroList.push(submit);
      heroButton();
    });
});