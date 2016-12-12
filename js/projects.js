$(function() {
	var ghDiv;
	var projectTitle;
	var projectDescription;

	console.clear();
	//console.log(ghDivs);

	$('div.github').each(function(id, object) {
		console.log(object);
		console.log("USER:" + this.dataset.user + " REPO:" + this.dataset.repo);
		githubAPI("repos/" + this.dataset.user + "/" + this.dataset.repo,
			function(repoInfo) {
				console.log(repoInfo.data);

				$(object).find('.projectTitle').text(repoInfo.data.full_name);
				$(object).find('.projectDescription').text(repoInfo.data.description);
				$(object).find('.projectLanguage').text(repoInfo.data.language);
				$(object).find('.projectLanguageURL').attr("href", repoInfo.data.html_url + "/search?l=" + repoInfo.data.language);
				$(object).find('.projectStars').text(repoInfo.data.stargazers_count);
				$(object).find('.projectStarsURL').attr("href", repoInfo.data.html_url + "/stargazers");
				$(object).find('.projectForks').text(repoInfo.data.forks_count);
				$(object).find('.projectForksURL').attr("href", repoInfo.data.html_url + "/network");
			  $(object).find('.projectWebsite').attr("href", repoInfo.data.homepage);
			  $(object).find('.projectGitHubURL').attr("href", repoInfo.data.html_url);

				// projectReadMe
				$.ajax({
					url: "https://raw.githubusercontent.com/" + repoInfo.data.full_name + "/" + repoInfo.data.default_branch + "/README.md",
					context: document.body,
					success: function(mdText) {
						//where text will be the text returned by the ajax call
						var converter = new showdown.Converter();
						var htmlText = converter.makeHtml(mdText);
						$(object).find('.projectReadMe').append(htmlText); //append this to a div with class outputDiv
					}
				});
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
