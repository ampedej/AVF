/*
Project 4
Edward M Murray Jr
ASD 1301
*/
//
$(function(){
	$.ajax({
  url : "http://api.wunderground.com/api/cbfd448ed7906dea/geolookup/conditions/q/FL/Orlando.json",
  dataType : "jsonp",
  success : function(data) {
  console.log(data);
			$('#weather-data').append(
				"<li>" + data.location.city + "</li>"
			);
		}
  });
});
