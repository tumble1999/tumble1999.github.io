$(function() { 
	var access_token
	var url;
	var admins_url;
	var admin_code_1 = "ab85ff5428f26f488cd0"
	var admin_code_2 = "3d7057b8ee5e536a4d06"
	var admin;
	
	//https://api.github.com/repos/tumble1999/tumble1999.github.io/collaborators?access_token=
	
	var loggedIn = localStorage.getItem("loggedIn");
	console.log("Logged In: "loggedIn);
	if (loggedIn=="true") {
		access_token = localStorage.getItem("access_token");
		url = "https://api.github.com/user?access_token=" + access_token;
		var admins_url = "https://api.github.com/repos/tumble1999/tumble1999.github.io/collaborators?access_token=" + admin_code_1 + admin_code_2;
		$('.user-logged-in, #user-logged-in').show();
		$('.user-logged-out, #user-logged-out').hide();
		
	} else {
		access_token = "";
		url = "";
		admins_url = "";
		
		loggedIn = "false";
		localStorage.setItem("loggedIn", loggedIn);
		$('.user-logged-in, #user-logged-in').hide();
		$('.user-logged-out, #user-logged-out').show();
	}
	
	getUserInfo(url, admins_url, function() {
		
		if (admin=="true") {
			$('.user-admin-only, #user-admin-only').show();
			//$('.user-logged-out, #user-logged-out').hide();

		} else {
			$('.user-admin-only, #user-admin-only').hide();
			//$('.user-logged-out, #user-logged-out').show();
		}
		
		
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
});

function getUserInfo(url, admins_url, callback) {
	
	$.getJSON(url, function(currentUser) {
		var loggedInUser = currentUser.login;
		console.log("Logged in user: " + loggedInUser);
		$('#user-logged-in').attr("data-user", loggedInUser);
		$('#user-logged-in > img').attr("src", "https://github.com/identicons/" + loggedInUser + ".png");
		$('.loggedInUserProfile').attr("href", "http://github.com/" + loggedInUser);

		
		$('.newCommentUsername').val(loggedInUser);
		$('.newCommentUsername').attr("value", loggedInUser );
		$('.newCommentUsername').parent().addClass('is-dirty');
		$.getJSON(admins_url, function(colabs) {
			//console.log(colabs);
			admin = false;
			for(var i = 0; i < colabs.length; i++) {
			    if (colabs[i].login == loggedInUser) {
				admin = true;
				break;
			    }
			}
			console.log("ADMIN: " + admin);
			callback();
		});
	});
		
	
}

