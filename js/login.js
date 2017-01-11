$(function() {
var face = getQueryVariable('code');
alert(face);
window.location.replace("/");
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
