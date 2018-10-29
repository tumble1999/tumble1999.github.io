function githubAPI(location, callback) {
	var jsondata;
	var url = "https://api.github.com/" + location + "?access_token=dc908f64c3cbee0ee76d85f92f9844607be030ce&callback=?";
	$.getJSON(url, callback);
}
