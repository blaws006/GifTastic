$(document).ready(function () {
  //Need an array variable to list heroes in
  var heroList = ["Thor", "Iron Man", "Spider-Man", "Hulk", "Black Panther"];
  var imgArrMoving, imgArrStill;
  // Function loops through the heroList array and creates the buttons with the hero names.
  function heroButton() {
    $('.comicButtons').empty();
    $("input.hero-input").val('');
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
    if (submit !== '') {
      buttons = $("<button type='submit' class='btn btn-primary btn-sm'>");
      heroList.push(submit);
      heroButton();
    }
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
        // Clear arrays when button is pushed
        imgArrStill = [];
        imgArrMoving = [];
        // Loops through the response json and
        // 1) Collects the img sources for the moving and still images
        // 2) Appends src urls to img tags
        // 3) Appends still img tags to each heroDiv
        // 4) Appends heroDiv to container Div
        for (var i = 0; i < response.data.length; i++) {
          var heroDiv = $('<div class="col-sm-12 col-md-6 col-lg-2">');
          var imgFixedSrc = response.data[i].images.fixed_height_still.url;
          var imgMoveSrc = response.data[i].images.fixed_height.url;
          var rating = $('<p>');
          rating.text('Rated: ' + response.data[i].rating);
          var imgTagStill = $('<img src="' + imgFixedSrc + '" class="img-fluid still" id="' + i + '">');
          var imgTagMove = $('<img src="' + imgMoveSrc + '" class="img-fluid moving" id="' + i + '">');
          heroDiv.append(imgTagStill);
          heroDiv.prepend(rating);
          $("#heroes").append(heroDiv);
          // Create an array for still and moving img
          imgArrStill.push(imgTagStill[0].outerHTML);
          imgArrMoving.push(imgTagMove[0].outerHTML);
        };
        // Make a function that toggles images via a click event
        $('#heroes').on('click', function (e) {
          if (e.target.matches('.still')) {
            $(e.target).replaceWith(imgArrMoving[e.target.id]);
          } else if (e.target.matches('.moving')) {
            $(e.target).replaceWith(imgArrStill[e.target.id]);
           
          }
        });
      });
  });
});