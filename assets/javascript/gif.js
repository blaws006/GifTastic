$(document).ready(function () {

	//Need an array variable to list heroes in
	var heroList = ["Thor", "Iron Man", "Spider-Man", "Hulk", "Black Panther"];
	//This variable defines the class of image number
	var imageNum = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
	// This variable defines the id of Toggle Number 
	var toggleNum = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];

	// Needs to List 10
	// We need a function that appends a button with the name a corresponding hero to label the button in the comicButtons div

	//This function loops through the list of heroes and creates a button per hero	
	function heroButton() {
		$("#comicButtons").empty();
		for (var i = 0; i < heroList.length; i++) {
			var buttons = $("<button type='button' class='btn btn-primary btn-sm button-style'>");
			buttons.attr("id", heroList[i]);
			buttons.attr("data-hero", heroList[i])
			buttons.text(heroList[i]);
			$("#comicButtons").append(buttons);
		};
	};
	heroButton();
	//This function adds an additional button when the form is submitted with a new hero name
	$(".addComic").click(function (event) {
		event.preventDefault();
		var submit = $("input.hero-input").val();
		buttons = $("<button type='submit' class='btn btn-primary btn-sm'>");
    heroList.push(submit);
    heroButton();
	});
	heroButton();
	//Goes through the entire document and looks for button events and ensure they function as buttons
	//Also define the API URL that will be called later to generate hero gifs
	$(document).on("click", "button", function (event) {
		$("#heroes").empty();
		var queryEq = this.id;
		console.log(this.id);
		var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=8b447b4b060c42a9bd847406d1309c6b&q=" + queryEq + "&limit=10&offset=0&lang=en";
		console.log(queryURL);

		//AJAX API Call
		$.ajax({
			url: queryURL,
			method: 'GET'
		}).done(function (response) {
			//Once API call complete loop through JSON object and generate both gif and still jpg
			console.log(response)
			for (var i = 0; i < response.data.length; i++) {

				for (var i = 0; i < imageNum.length; i++) {

					var heroDiv = $("<div>");
					heroDiv.addClass("col-sm-12 col-md-6 col-lg-2");
					var ratingP = $("<p>")
					ratingP.text("Rated: " + response.data[i].rating)
					var ratingImgOn = $("<img>")
					ratingImgOn.attr("src", response.data[i].images.fixed_height.url);
					ratingImgOn.attr("id", imageNum[i])
					ratingImgOn.addClass("img-fluid")
					ratingImgOn.addClass("toggleOn" + toggleNum[i])
					var ratingImgOff = $("<img>")
					ratingImgOff.attr("src", response.data[i].images.fixed_height_still.url);
					ratingImgOff.attr("id", imageNum[i])
					ratingImgOff.addClass("img-fluid")
					ratingImgOff.addClass("toggleOff" + toggleNum[i])
					heroDiv.append(ratingImgOn)
					heroDiv.append(ratingImgOff)
					heroDiv.prepend(ratingP)
					$("#heroes").append(heroDiv);


				}


			}

			// Click functions for the images that toggles between the gif and still jpg for each image
			var clicked = false;
			var clickCount = 0;

			$("img#zero").click(function () {
				clickCount++;
				clicked = true;
				console.log(clickCount);
				if (clickCount === 1) {
					$(".toggleOnZero").show()
					$(".toggleOffZero").hide()
				} else if (clickCount === 2) {
					$(".toggleOnZero").hide()
					$(".toggleOffZero").show()
					clickCount = 0;
          clicked = false;
					return clickCount;
					
				}
			});
			$("img#one").click(function () {
				clickCount++;
				clicked = true;
				console.log(clickCount);
				if (clickCount === 1) {
					$(".toggleOnOne").show()
					$(".toggleOffOne").hide()
				} else if (clickCount === 2) {
					$(".toggleOnOne").hide()
					$(".toggleOffOne").show()
					clickCount = 0;
					console.log(this)
					return clickCount;
					clicked = false;
				}
			});
			$("img#two").click(function () {
				clickCount++;
				clicked = true;
				console.log(clickCount);
				if (clickCount === 1) {
					$(".toggleOnTwo").show()
					$(".toggleOffTwo").hide()
				} else if (clickCount === 2) {
					$(".toggleOnTwo").hide()
					$(".toggleOffTwo").show()
					clickCount = 0;
					console.log(this)
					return clickCount;
					clicked = false;
				}
			});
			$("img#three").click(function () {
				clickCount++;
				clicked = true;
				console.log(clickCount);
				if (clickCount === 1) {
					$(".toggleOnThree").show()
					$(".toggleOffThree").hide()
				} else if (clickCount === 2) {
					$(".toggleOnThree").hide()
					$(".toggleOffThree").show()
					clickCount = 0;
					console.log(this)
					return clickCount;
					clicked = false;
				}
			});
			$("img#four").click(function () {
				clickCount++;
				clicked = true;
				console.log(clickCount);
				if (clickCount === 1) {
					$(".toggleOnFour").show()
					$(".toggleOffFour").hide()
				} else if (clickCount === 2) {
					$(".toggleOnFour").hide()
					$(".toggleOffFour").show()
					clickCount = 0;
					console.log(this)
					return clickCount;
					clicked = false;
				}
			});
			$("img#five").click(function () {
				clickCount++;
				clicked = true;
				console.log(clickCount);
				if (clickCount === 1) {
					$(".toggleOnFive").show()
					$(".toggleOffFive").hide()
				} else if (clickCount === 2) {
					$(".toggleOnFive").hide()
					$(".toggleOffFive").show()
					clickCount = 0;
					console.log(this)
					return clickCount;
					clicked = false;
				}
			});
			$("img#six").click(function () {
				clickCount++;
				clicked = true;
				console.log(clickCount);
				if (clickCount === 1) {
					$(".toggleOnSix").show()
					$(".toggleOffSix").hide()
				} else if (clickCount === 2) {
					$(".toggleOnSix").hide()
					$(".toggleOffSix").show()
					clickCount = 0;
					console.log(this)
					return clickCount;
					clicked = false;
				}
			});
			$("img#seven").click(function () {
				clickCount++;
				clicked = true;
				console.log(clickCount);
				if (clickCount === 1) {
					$(".toggleOnSeven").show()
					$(".toggleOffSeven").hide()
				} else if (clickCount === 2) {
					$(".toggleOnSeven").hide()
					$(".toggleOffSeven").show()
					clickCount = 0;
					console.log(this)
					return clickCount;
					clicked = false;
				}
			});
			$("img#eight").click(function () {
				clickCount++;
				clicked = true;
				console.log(clickCount);
				if (clickCount === 1) {
					$(".toggleOnEight").show()
					$(".toggleOffEight").hide()
				} else if (clickCount === 2) {
					$(".toggleOnEight").hide()
					$(".toggleOffEight").show()
					clickCount = 0;
					console.log(this)
					return clickCount;
					clicked = false;
				}
			});
			$("img#nine").click(function () {
				clickCount++;
				clicked = true;
				console.log(clickCount);
				if (clickCount === 1) {
					$(".toggleOnNine").show()
					$(".toggleOffNine").hide()
				} else if (clickCount === 2) {
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