function githubAPI(location, callback) {
	var jsondata;
	var url = "https://api.github.com/" + location + "?client_id=d303c3ac5d6e32f036a2&client_secret=b27cf3e29e2654cd5b63e3c06ef54b6080883e14&callback=?";
	$.getJSON(url, callback);
}
