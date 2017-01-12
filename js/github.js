function githubAPI(location, callback) {
	var jsondata;
	var url = "https://api.github.com/" + location + "?access_token=6d824369f0aa243a2621c1ab88e5c2cde444c21a&callback=?";
	$.getJSON(url, callback);
}
