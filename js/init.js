$(function() {
  //LOCAL STORAGE USAGE
  //var someVarName = localStorage.getItem("someVarName");
  //localStorage.setItem("someVarName", someVarName);
  
  var loggedIn = localStorage.getItem("loggedIn");
  var loggedInUser = localStorage.getItem("loggedInUser");
  if(loggedIn=="") {
    loggedIn = "false";
    localStorge.setItem("loggedIn", loggedIn);
  }
  
  $("#user-logged-in").attr("data-user", loggedInUser);
  
  if(loggedIn=="false"){
    $('#user-logged-in').removeClass("hidden");
    $('#user-logged-out').addClass("hidden");
  } else {
    $('#user-logged-in').addClass("hidden");
    $('#user-logged-out').removeClass("hidden");
  }
  
});
