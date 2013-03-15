/*
Project 4
Edward M Murray Jr
ASD 1301
*/
//
$(function(){
	$.getJSON("http://search.twitter.com/search.json?q=%23DuckDynasty&rpp=5&include_entities=true&result_type=popular&callback=?",
	function(data){
		console.log(data);
		for(i=0, j=data.results.length;i<j; i++){
			$('#twitter-data').append(
				"<li>" + "<p>" + "<img src='" + data.results[i].profile_image_url + "'/><br />" + data.results[i].text + "<br />" + "<em>" + data.results[i].created_at + "</em>" + "</p>" + "</li>"
			);
		}
	}
	);
});