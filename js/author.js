$(function() {
	var ghDiv;
	var user;

	console.clear();
	//console.log(ghDivs);

	$('div.githubAuthor').each(function(id, object) {
		console.log(object);
		console.log("USER:" + this.dataset.user);
		githubAPI("users/" + this.dataset.user,
			function(userInfo) {
				console.log(userInfo.data);

				$(object).find('.userName').text(userInfo.data.name);
				$(object).find('.userImg').text(userInfo.data.avatar_url);
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
});

function githubAPI(location, callback) {
	var jsondata;
	var url = "https://api.github.com/" + location + "?client_id=7632e3d7c347ff4e8638&client_secret=1029673eec28561b7511fdf7c8547864ae412c58&callback=?";
	$.getJSON(url, callback);
}
