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
				$(object).find('.userImg').attr("src", userInfo.data.avatar_url);
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
