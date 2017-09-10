$(document).ready(function() {

  //Need an array variable to list heroes in
  var heroList = ["Thor", "Iron-Man", "Spider-Man", "Hulk", "Black Panther"];
  
//We'll need an API call that pulls comic book heroes
  // Needs to List 10
// We need a function that appends a button with the name a corresponding hero to label the button in the comicButtons div
  
  function heroButton() {
    for(var i = 0; i < heroList.length; i++){
      var buttons = $("<button type='button' class='btn btn-primary btn-sm'>");
      buttons.attr("id", heroList[i]);
      buttons.text(heroList[i]);
      $("#comicButtons").append(buttons);
    }

    //Click the button, and gif search appears on screen
  $("button").click(function(){
  	console.log("clicked");
  	$("#heroes").empty();
	var queryEq = this.id;
	console.log(this.id);
	var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=8b447b4b060c42a9bd847406d1309c6b&q=" + queryEq + "&limit=10&offset=0&lang=en";
	console.log(queryURL)
	//AJAX API Call
  $.ajax(
  {url: queryURL,
    method: 'GET'
  }).done(function(response){
  	console.log(response)
  	for(var i = 0; i < response.data.length; i++){
  		
    console.log(response.data[i].images.downsized.url);
    $("#heroes").append("<img src='" + response.data[i].images.downsized.url + "'>")
	}
});
});
};

heroButton();

});