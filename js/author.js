$(function() { 
	var accessToken = localStorage.getItem("accessToken");
	var loggedInUser;
	if (access_token=="") {
		localStorage.setItem("loggedIn", "false");
		loggedInUser = "";
	} else {
		var url = "https://api.github.io/user?access_token=" + accessToken;
		$.getJSON(url, function(currentUser) {
	 		loggedInUser = currentUser.data.login;
		});
		
	}
	var loggedIn = localStorage.getItem("loggedIn");

	$('#user-logged-in').attr("data-user", loggedInUser);
	$('#user-logged-in > img').attr("src", "https://github.com/identicons/" + loggedInUser + ".png");
	$('.loggedInUserProfile').attr("href", "http://github.com/" + loggedInUser);

	  if(loggedIn=="true"){
	    $('.user-logged-in, #user-logged-in').show();
	    $('.user-logged-out, #user-logged-out').hide();
	  } else {
	    $('.user-logged-in, #user-logged-in').hide();
	    $('.user-logged-out, #user-logged-out').show();
	  }
	$('.newCommentUsername').val(loggedInUser);
	$('.newCommentUsername').attr("value", loggedInUser );
   	$('.newCommentUsername').parent().addClass('is-dirty');
	
	var ghDiv;
	var user;
	
	//console.log(ghDivs);

	$('.githubAuthor').each(function(id, object) {
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

