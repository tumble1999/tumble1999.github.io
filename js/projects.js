console.clear();
console.log($('div#github'))
$('div#github').each(function() {
	console.log(this);
	console.log($(this));


	/*
	var mydiv=document.getElementById('githun')
	//Using DOM's getAttribute() property
	var brand=mydiv.getAttribute("data-brand") //returns "toyota"
	mydiv.setAttribute("data-brand", "mazda") //changes "data-brand" to "mazda"
	mydiv.removeAttribute("data-brand") //removes "data-brand" attribute entirely

	//Using JavaScript's dataset property
	var brand=mydiv.dataset.brand //returns "toyota"
	mydiv.dataset.brand='mazda' //changes "data-brand" to "mazda"
	mydiv.dataset.brand=null //removes "data-brand" attribute
	*/

	var repo=this.dataset.repo;
	var user=this.dataset.user;
	console.log("REPO: " + repo);
	console.log("USER: " + user);

	githubAPI("repos/" + user + "/" + repo, function(data) {
		var repoInfo = data.data;
		console.log(repoInfo);
		//PROJECT NAME = repo.full_name
		//...
		$(this).children('h2.project-title').text(repoInfo.full_name);
		$(this).children('p.project-description').text(repoInfo.description);
		//ghdiv.children('h1.project-title').text(repo.full_name);
		//ghdiv.children('h1.project-title').text(repo.full_name);
	});

});

function githubAPI(location, callback) {
	var url = "https://api.github.com/" + location + "?callback=?";
	jQuery.getJSON(url,callback);
}
