var logoutWindow;

$(function() {
    var dialogLogout = document.querySelector('dialog.dialogLogout');
    var showModalButton = document.querySelector('.show-modal');
    if (! dialogLogout.showModal) {
      dialogPolyfill.registerDialog(dialogLogout);
    }
       dialogLogout.showModal();
    /*dialog.querySelector('.close').addEventListener('click', function() {
      dialog.close();
    });*/
    
    dialogLogout.querySelector('.githubLogout').addEventListener('click', function() {
        $('.noDialog').hide();
        githubLogout();
         dialogLogout.close();
    });
     dialogLogout.querySelector('.websiteLogout').addEventListener('click', function() {
        $('.noDialog').hide();
        normalLogout();
         dialogLogout.close();
    });
     dialogLogout.querySelector('.cancelLogout').addEventListener('click', function() {
        history.back();
         dialogLogout.close();
    });
});

noDialog = function(){
    console.log("noDialog");
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
    console.log("githubLogout");
    
     // Fixes dual-screen position                         Most browsers      Firefox
    var dualScreenLeft = window.screenLeft != undefined ? window.screenLeft : screen.left;
    var dualScreenTop = window.screenTop != undefined ? window.screenTop : screen.top;

    var width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
    var height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;

    var left = ((width / 2) - (367 / 2)) + dualScreenLeft;
    var top = ((height / 2) - (461 / 2)) + dualScreenTop;
    logoutWindow = window.open('/redirect?url=https;//github.com.logout', '_blank', 'toolbar=no, scrollbars=yes, resizable=no, width=367, height=461, top=' + top + ', left=' + left);

    // Puts focus on the newWindow
    if (window.focus) {
        logoutWindow.focus();
    }
    
    
    var pollTimer = window.setInterval(function() {
    if (logoutWindow.closed !== false) { // !== is required for compatibility with Opera
        window.clearInterval(pollTimer);
        normalLogout()
    }
}, 200);
    
    
}

normalLogout = function() {
    console.log("normalLogout");
    localStorage.clear();
    history.back();
}
