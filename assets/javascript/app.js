$(document).ready(function () {
  //Need an array variable to list heroes in
  var heroList = ["Thor", "Iron Man", "Spider-Man", "Hulk", "Black Panther"];
  var count = 0;
  // Function loops through the heroList array and creates the buttons with the hero names.
  function heroButton() {
    $('.comicButtons').empty();
    for (var i = 0; i < heroList.length; i++) {
      var buttons = $("<button type='button' class='btn btn-primary btn-sm button-style'>");
      buttons.attr("id", heroList[i]);
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
  // Goes through the entire document and looks for button events and ensure they function as buttons
  // Also define the API URL that will be called later to generate hero gifs
  $(document).on('click', 'button', function (event) {
    $('#heroes').empty();
    var queryEq = this.id;
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=8b447b4b060c42a9bd847406d1309c6b&q=" + queryEq + "&limit=10&offset=0&lang=en";
    // AJAX API Call
    $.ajax({
        url: queryURL,
        method: 'GET'
      })
      .done(function (response) {

        for (var i = 0; i < response.data.length; i++) {
          var heroDiv = $('<div class="col-sm-12 col-md-6 col-lg-2">');
          var imgFixedSrc = response.data[i].images.fixed_height_still.url;
          var imgMoveSrc = response.data[i].images.fixed_height.url;
          var rating = $('<p>');
          rating.text('Rated: ' + response.data[i].rating);
          var imgTagStill = $('<img src="' + imgFixedSrc + '" class="img-fluid" id="hero-' + i + '">');
          var imgTagMove = $('<img src="' + imgMoveSrc + '" class="img-fluid" id="' + i + '">');
          heroDiv.append(imgTagStill);
          heroDiv.prepend(rating);
          $("#heroes").append(heroDiv);
          // Create an array for still and moving img
          // Clear arrays when button is pushed
        };
        // Make a function that loops through array and toggles images via a click event
      });
  });
});