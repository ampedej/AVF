/*
Week 4
Edward M Murray Jr
AVF 1303
*/
//

//Device properties function
function checkConnection() {
        var networkState = navigator.network.connection.type;

        var states = {};
        states[Connection.UNKNOWN]  = 'Unknown connection';
        states[Connection.ETHERNET] = 'Ethernet connection';
        states[Connection.WIFI]     = 'WiFi connection';
        states[Connection.CELL_2G]  = 'Cell 2G connection';
        states[Connection.CELL_3G]  = 'Cell 3G connection';
        states[Connection.CELL_4G]  = 'Cell 4G connection';
        states[Connection.NONE]     = 'No network connection';

       $('#twitresults').append( device.name + " found these results via " + states[networkState]);
    }

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