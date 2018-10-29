function githubAPI(location, callback) {
	var jsondata;
	var token1 = "35fd416d3251f72db01b";
	var token2 = "d635bdb41770da4f9f61";
	var url = "https://api.github.com/" + location + "?access_token=" + token1 + token2 + "&callback=?";
	$.getJSON(url, callback);
}
