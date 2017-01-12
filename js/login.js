$(function() {
	
	var state = getQueryVariable('state');
	if (state=="bZ0TyBHhOCS6goHFQ8qj") {
		var code = getQueryVariable('code');
		console.log(code);
		$.getJSON('https://tumble1999-login.herokuapp.com/authenticate/'+code, function(data) {
			$getJSON('https://api.github.com/user?access_token='+data.token+'&callback=?', function(data) {
				localStorge.setItem("loggedIn", "true");
				localStorge.setItem("loggedInUser", data.data.login);
				window.location.replace('/');
			 });
		});
	} else {
		window.location.replace('https://github.com/login/oauth/authorize?client_id=dce7328a9a7ea4492070&allow_signup=true&redirect_uri=http://tumble1999.github.io/login&state=bZ0TyBHhOCS6goHFQ8qj');
	}
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
