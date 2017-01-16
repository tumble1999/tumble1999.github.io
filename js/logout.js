$(function() {
    localStorage.clear();
    //window.location.replace('/');
    var logoutWindow = window.open("https://github.com/logout", "_blank", "toolbar=no,scrollbars=yes,resizable=yes,top=0,left=0,width=367,height=461");
    history.back()
});

noDialog = function(){
    $('.noDialog').hide();
}
