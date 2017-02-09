var access_token
var admin = false;
var loggedIn = "";
var loggedInUser = "";
var author = false;
$(function() {
	var url = "";
	var admins_url = "";

	UserInit(refresh);
	
	function UserInit(callback) {
		console.log("userInit");
		loggedIn = localStorage.getItem("loggedIn");
		console.log("Logged In: " + loggedIn);
		if(loggedIn=="true") {
			console.log("userLoggedIn");

			access_token = localStorage.getItem("access_token");
			url = "https://api.github.com/user?access_token=" + access_token;
			var admin_code_1 = "ab85ff5428f26f488cd0";
			var admin_code_2 = "3d7057b8ee5e536a4d06";
			admins_url = "https://api.github.com/repos/tumble1999/tumble1999.github.io/collaborators?access_token=" + admin_code_1 + admin_code_2;
			$.getJSON(url, function(currentUser) {
				loggedInUser = currentUser.login;
				console.log("Logged in user: " + loggedInUser);

				$.getJSON(admins_url, function(colabs) {
					//console.log(colabs);
					for(var i = 0; i < colabs.length; i++) {
					    if (colabs[i].login == loggedInUser) {
						admin = true;
						break;
					    }
					}
					console.log(Authors: _SITE_AUTHORS_);
					if ($.inArray(loggedInUser, _SITE_AUTHORS_) != -1) {
						author = true;
					}
					
					console.log("ADMIN: " + admin);
					console.log("author: " + author);
					if (admin) {
						$('.user-admin-only, #user-admin-only').show();
						//$('.user-logged-out, #user-logged-out').show();
					} else {
						$('.user-admin-only, #user-admin-only').hide();
						//$('.user-logged-out, #user-logged-out').hide();
					}
					
					if (author) {
						$('.user-author-only, #user-author-only').show();
						$('.myPosts').attr("href", "/authors/?a=" + loggedInUser);
						//$('.user-logged-out, #user-logged-out').show();
					} else {
						$('.user-author-only, #user-author-only').hide();
						//$('.user-logged-out, #user-logged-out').hide();
					}
					$('.user-logged-in, #user-logged-in').show();
					$('.user-logged-out, #user-logged-out').hide();
					$('#user-logged-in').attr("data-user", loggedInUser);
					$('head').attr("data-user", loggedInUser);
					$('#user-logged-in > img').attr("src", "https://github.com/identicons/" + loggedInUser + ".png");
					$('.favicon').attr("href", "https://github.com/identicons/" + loggedInUser + ".png");
					$('.loggedInUserProfile').attr("href", "http://github.com/" + loggedInUser);

					$('.newCommentUsername').val(loggedInUser);
					$('.newCommentUsername').attr("value", loggedInUser );
					$('.newCommentUsername').parent().addClass('is-dirty');
					console.log("userLoggedIn pt2");
					callback();
				});
			});
		} else {
			console.log("user Logged out");
			access_token = "";
			url = "";
			admins_url = "";

			loggedIn = "false";
			localStorage.setItem("loggedIn", loggedIn);
			$('.user-logged-in, #user-logged-in').hide();
			$('.user-logged-out, #user-logged-out').show();
			$('.user-admin-only, #user-admin-only').hide();
			$('.user-author-only, #user-author-only').hide();
			callback();
		}
	}

	function userLoggedIn() {
		
	}
	function userLoggedOut() {
		
	}
	function userIsNotAdmin() {
		
	}
	function userIsAdmin() {
		
	}
	function getUserInfo(url, admins_url, callback) {
		

	}
});


function refresh() {		
	var ghDiv;
	var user;

	//console.log(ghDivs);

	$('.githubAuthor').each(function(id, object) {
		console.log(object);
		console.log("USER:" + this.dataset.user);
		
		var admin_code_1 = "ab85ff5428f26f488cd0";
			var admin_code_2 = "3d7057b8ee5e536a4d06";
			url = "https://api.github.com/users/" + this.dataset.user + "?access_token=" + admin_code_1 + admin_code_2;
		var admin = "";
		var author = "";
		$.getJSON(url, function(userInfo) {
			console.log(userInfo);
			
			var admins_url = "https://api.github.com/repos/tumble1999/tumble1999.github.io/collaborators?access_token=" + admin_code_1 + admin_code_2;
			$.getJSON(admins_url, function(colabs) {
				for(var i = 0; i < colabs.length; i++) {
				    if (colabs[i].login == userInfo.login) {
					admin =  "[ADMIN] ";
					break;
				    }
				}
				if(_PAGE_AUTHOR_ == userInfo.login) {
					author = "[AUTHOR] "
				}
				
				$(object).find('.userName').text(admin + author + userInfo.name);
				$(object).find('.userImg').attr("src", userInfo.avatar_url);
				$(object).find('.favicon').attr("href", userInfo.avatar_url);

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
}

function amIAnAdmin() {
	if(loggedIn == "true") {
		if(admin) {
			console.log("Yes " + loggedInUser +  ", you are!");
		} else {
			console.log("No " + loggedInUser +  ", stop begging.");
		}
	} else {
		console.log("How would I know, your not even logged in!");
		console.log("You might as well be asking `amILoggedIn()`.");
	}
}

function amILoggedIn() {
	if(loggedIn == "true") {
		console.log("Yes.  Welcome " + loggedInUser + ".");
	} else {
		console.log("No. Go away stranger.");
	}
}


