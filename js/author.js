$(function() { 
	var loggedIn = localStorage.getItem("loggedIn");
	  var loggedInUser = localStorage.getItem("loggedInUser");

	  $('#user-logged-in').attr("data-user", loggedInUser);
	$('#user-logged-in > img').attr("src", "https://github.com/identicons/" + loggedInUser + ".png");
	$('.userLoggedInProfile').attr("href", "http://github.com/" + loggedInUser);

	  if(loggedIn=="true"){
	    $('.user-logged-in, #user-logged-in').removeClass("hidden");
	    $('.user-logged-out, #user-logged-out').addClass("hidden");
	  } else {
	    $('.user-logged-in, #user-logged-in').addClass("hidden");
	    $('.user-logged-out, #user-logged-out').removeClass("hidden");
	  }
	$('.newCommentUsername').val(loggedInUser);
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

