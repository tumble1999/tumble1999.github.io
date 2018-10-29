function githubAPI(location, callback) {
	var jsondata;
	var token1 = "1c5d031cbdcf02e19998";
	var token2 = "efe7d31418efdfa6fcde";
	var url = "https://api.github.com/" + location + "?access_token=" + token1 + token2 + "&callback=?";
	$.getJSON(url, callback);
}
