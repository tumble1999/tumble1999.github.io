var logoutWindow;

$(function() {
    var dialog = document.querySelector('dialog');
    var showModalButton = document.querySelector('.show-modal');
    if (! dialog.showModal) {
      dialogPolyfill.registerDialog(dialog);
    }
      dialog.showModal();
    /*dialog.querySelector('.close').addEventListener('click', function() {
      dialog.close();
    });*/
    
    dialog.querySelector('.githubLogout').addEventListener('click', function() {
        $('.noDialog').hide();
        githubLogout();
        dialog.close();
    });
    dialog.querySelector('.websiteLogout').addEventListener('click', function() {
        $('.noDialog').hide();
        normalLogout();
        dialog.close();
    });
    dialog.querySelector('.cancelLogout').addEventListener('click', function() {
        history.back();
        dialog.close();
    });
});

noDialog = function(){
    $('.noDialog').hide();
    var logoutWant = confirm("Would you like to logout?");
    if (logoutWant) {
        var github = confirm("Would you like to logout of github too?\n(Pressing 'cancel' would continue with normal logout.)");
        if (github) {
            githubLogout();
        } else {
            normalLogout();
        }
    } else {
        history.back();
    }
}

githubLogout = function() {
    logoutWindow = window.open("https://google.com", "_blank", "toolbar=no,scrollbars=yes,resizable=yes,top=0,left=0,width=367,height=461");
    
    var cacheURL = logoutWindow.location;
    
    
}

normalLogout = function() {
    localStorage.clear();
    history.back();
}

getURL() {
console.log(logoutWindow.location);
console.log(logoutWindow.location.href);
}
