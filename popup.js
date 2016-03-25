

document.addEventListener('DOMContentLoaded', function() {
	var xhttp = new XMLHttpRequest();
	xhttp.responseType = 'json';
	xhttp.onreadystatechange = function() {
		if (xhttp.readyState == 4 && xhttp.status == 200) {
			var response = xhttp.response;
			document.getElementById('status').innerHTML = "<b>Your ip:</b> "+response.query+"<br>"+"<b>Your country:</b> "+response.country+"<br>"+"<b>Your city:</b> "+response.city+"<br>"+"<b>Your timezone:</b> "+response.timezone;
		}
	};
	xhttp.open("GET","http://ip-api.com/json",true);
	xhttp.send();
});
