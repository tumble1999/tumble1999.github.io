$(function() {
	var state = getQueryVariable('state');
	if (state=="bZ0TyBHhOCS6goHFQ8qj") {
		var code = getQueryVariable('code');
		window.location.replace("https://github.com/login/oauth/authorize?client_id=dce7328a9a7ea4492070&client_secret=32a13ccd5f5d63f86229d1df56b4e4893e48f8f4&code=" + code);
	}
});


function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split('&');

    for (var i = 0; i < vars.length; i++) {
      var pair = vars[i].split('=');

      if (pair[0] === variable) {
        return decodeURIComponent(pair[1].replace(/\+/g, '%20'));
      }
    }
  }

function githubAPI(location, callback) {
	var jsondata;
	var url = "https://api.github.com/user?access_token=" +  + "&callback=?";
	$.getJSON(url, callback);
}
