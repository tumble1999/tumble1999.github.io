$(function() {
    localStorage.clear();
    //window.location.replace('/');
    var logoutWindow = window.open("https://github.com/logout", "_blank", "toolbar=no,scrollbars=yes,resizable=yes,top=0,left=0,width=367,height=461");
});

noDialog = function(){
    $('.noDialog').hide();
    var logoutWant = confirm("Would you like to logout?");
    if (logoutWant) {
        var github = confirm("Would you like to logout of github too?");
        if (github) {

        } else {
            
        }
    } else {
        history.back();
    }
}
