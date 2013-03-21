/*
Week 3
Edward M Murray Jr
AVF 1303
*/
//
$(function(){
	$.ajax({
  url : "http://api.wunderground.com/api/cbfd448ed7906dea/geolookup/conditions/q/FL/Orlando.json",
  dataType : "jsonp",
  success : function(data) {
  console.log(data);
			$('#weather-data').append(
				"<li>" + "City: " + data.location.city + "</li>" +
				"<li>" + "Weather: " + data.current_observation.weather + "</li>" +
				"<li>" + "Temp: " + data.current_observation.temp_f + "</li>" +
				"<li>" + "Humidity: " + data.current_observation.relative_humidity + "</li>" +
				"<li>" + "Wind: " + data.current_observation.wind_string + "</li>" +
				"<li>" + "Dewpoint: " + data.current_observation.dewpoint_string + "</li>"
			);
		}
  });
});
