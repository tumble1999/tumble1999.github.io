var ghDiv;
var projectTitle;
var projectDescription;

console.clear();
//console.log(ghDivs);

$('div.github').each(function(id, object) {
	console.log(object);
	githubAPI("repos/" + this.dataset.user + "/" + this.dataset.repo,
		function(data) {
			$(object).children('.projectTitle').text(data.data.full_name);
		$(object).children('.projectDescription').text(data.data.description);
		});

	/* githubAPI("repos/" + user + "/" + repo, function(data) {
		console.log("REPO: " + repo + "   USER: " + user);
		repoInfo = data.data;
		console.log("REPO_INFO");
		console.log(repoInfo);
		projectTitle = repoInfo.full_name;
		projectDescription = repoInfo.description;
		console.log(ghDiv.children(".projectTitle").text(projectTitle));
	});*/

});

function githubAPI(location, callback) {
	var jsondata;
	var url = "https://api.github.com/" + location + "?client_id=7632e3d7c347ff4e8638&client_secret=1029673eec28561b7511fdf7c8547864ae412c58&callback=?";
	$.getJSON(url, callback);
}
