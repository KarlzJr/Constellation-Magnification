// Summary: Slider
// Description: Loops through images on the website
// @author Alejandra Sicairos and @credits - https://www.youtube.com/watch?v=KkzVFB3Ba_o
// @created  5.20.22
var constellation = "virgo";
function getAjax() {
	var endpoint = "https://ohmanda.com/api/horoscope/"+ constellation + "/";
	//Clears the canvas
	$("#output").html("");
    $.ajax({
      // API endpoint
      url: endpoint,
      // POST or GET request
      type: "GET",
    })
    .done(function(data) {
        var name = capitalizeFirstLetter(constellation);
        $("#output").append('<h3>' + name);
        $("#output").append('<p>' + data.horoscope);
    })
    .fail(function(request, error) {
      $("#output").html("Error");
    });
}

$("button").click(function(){
	getAjax();
});

// Will fix the <h3> to be first letter upcase
// ex: picses -> Pisces
//@param: string
//@output: fisrt letter UpperCase
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
