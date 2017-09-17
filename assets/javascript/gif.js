$(document).ready(function() {

  //Need an array variable to list heroes in
  var heroList = ["Thor", "Iron Man", "Spider-Man", "Hulk", "Black Panther"];
  var imageNum = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
  var toggleNum = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"]
//We'll need an API call that pulls comic book heroes
  // Needs to List 10
// We need a function that appends a button with the name a corresponding hero to label the button in the comicButtons div

  function heroButton() {
  	$("#comicButtons").empty();
    for(var i = 0; i < heroList.length; i++){
      var buttons = $("<button type='button' class='btn btn-primary btn-sm'>");
      buttons.attr("id", heroList[i]);
      buttons.attr("data-hero", heroList[i])
      buttons.text(heroList[i]);
      $("#comicButtons").append(buttons);
    };
 };
heroButton();
    $("#addComic").click(function(event){
    	 	event.preventDefault();
 		var submit = $("input#hero-input").val();
    	buttons = $("<button type='submit' class='btn btn-primary btn-sm'>");
    	heroList.push(submit);
      	console.log(heroList);
      	
      	heroButton();
      
    });
   heroButton();
    //Click the button, and gif search appears on screen
 $(document).on("click", "button", function(event){
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
  		
	for(var i = 0; i < imageNum.length; i++){
	

		$("#heroes").append("<img class='img-fluid toggleOff" + toggleNum[i] + "' id='"+ imageNum[i] +"' src='" +response.data[i].images.fixed_height_still.url +"'>")	
		$("#heroes").append("<img class='img-fluid toggleOn"+ toggleNum[i] + "' id='"+ imageNum[i] +"' src='" +response.data[i].images.fixed_height.url +"'>")	


    //We need to be able to play and pause the gif...
    //How do I turn [] into a number? i will not work in this instance
}


}
	
var clicked = false;
	var clickCount = 0;

	$("img#zero").click(function(){
		clickCount++;
		clicked = true;
		console.log(clickCount);
		if (clickCount === 1){
		 $(".toggleOnZero").show()
		$(".toggleOffZero").hide()			
		}
		else if(clickCount === 2) {
		$(".toggleOnZero").hide()
		$(".toggleOffZero").show()
			clickCount = 0;
			console.log(this)	
		return clickCount;
		clicked = false;
		}
	});
$("img#one").click(function(){
		clickCount++;
		clicked = true;
		console.log(clickCount);
		if (clickCount === 1){
		 $(".toggleOnOne").show()
		$(".toggleOffOne").hide()			
		}
		else if(clickCount === 2) {
		$(".toggleOnOne").hide()
		$(".toggleOffOne").show()
			clickCount = 0;
			console.log(this)	
		return clickCount;
		clicked = false;
		}
	});
$("img#two").click(function(){
		clickCount++;
		clicked = true;
		console.log(clickCount);
		if (clickCount === 1){
		 $(".toggleOnTwo").show()
		$(".toggleOffTwo").hide()			
		}
		else if(clickCount === 2) {
		$(".toggleOnTwo").hide()
		$(".toggleOffTwo").show()
			clickCount = 0;
			console.log(this)	
		return clickCount;
		clicked = false;
		}
	});
$("img#three").click(function(){
		clickCount++;
		clicked = true;
		console.log(clickCount);
		if (clickCount === 1){
		 $(".toggleOnThree").show()
		$(".toggleOffThree").hide()			
		}
		else if(clickCount === 2) {
		$(".toggleOnThree").hide()
		$(".toggleOffThree").show()
			clickCount = 0;
			console.log(this)	
		return clickCount;
		clicked = false;
		}
	});
$("img#four").click(function(){
		clickCount++;
		clicked = true;
		console.log(clickCount);
		if (clickCount === 1){
		 $(".toggleOnFour").show()
		$(".toggleOffFour").hide()			
		}
		else if(clickCount === 2) {
		$(".toggleOnFour").hide()
		$(".toggleOffFour").show()
			clickCount = 0;
			console.log(this)	
		return clickCount;
		clicked = false;
		}
	});
$("img#five").click(function(){
		clickCount++;
		clicked = true;
		console.log(clickCount);
		if (clickCount === 1){
		 $(".toggleOnFive").show()
		$(".toggleOffFive").hide()			
		}
		else if(clickCount === 2) {
		$(".toggleOnFive").hide()
		$(".toggleOffFive").show()
			clickCount = 0;
			console.log(this)	
		return clickCount;
		clicked = false;
		}
	});
$("img#six").click(function(){
		clickCount++;
		clicked = true;
		console.log(clickCount);
		if (clickCount === 1){
		 $(".toggleOnSix").show()
		$(".toggleOffSix").hide()			
		}
		else if(clickCount === 2) {
		$(".toggleOnSix").hide()
		$(".toggleOffSix").show()
			clickCount = 0;
			console.log(this)	
		return clickCount;
		clicked = false;
		}
	});
$("img#seven").click(function(){
		clickCount++;
		clicked = true;
		console.log(clickCount);
		if (clickCount === 1){
		 $(".toggleOnSeven").show()
		$(".toggleOffSeven").hide()			
		}
		else if(clickCount === 2) {
		$(".toggleOnSeven").hide()
		$(".toggleOffSeven").show()
			clickCount = 0;
			console.log(this)	
		return clickCount;
		clicked = false;
		}
	});
$("img#eight").click(function(){
		clickCount++;
		clicked = true;
		console.log(clickCount);
		if (clickCount === 1){
		 $(".toggleOnEight").show()
		$(".toggleOffEight").hide()			
		}
		else if(clickCount === 2) {
		$(".toggleOnEight").hide()
		$(".toggleOffEight").show()
			clickCount = 0;
			console.log(this)	
		return clickCount;
		clicked = false;
		}
	});
$("img#nine").click(function(){
		clickCount++;
		clicked = true;
		console.log(clickCount);
		if (clickCount === 1){
		 $(".toggleOnNine").show()
		$(".toggleOffNine").hide()			
		}
		else if(clickCount === 2) {
		$(".toggleOnNine").hide()
		$(".toggleOffNine").show()
			clickCount = 0;
			console.log(this)	
		return clickCount;
		clicked = false;
		}
	});

});

});
   
});