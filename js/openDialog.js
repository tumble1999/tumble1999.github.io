openDialog = function(title, msg, h, w) {
      var w_ = 218;
      var h_ = 192;
      
      if(w) {
            if(w >= w_) {
                  w_ = h;
                  
            }
      }
      
      if(h) {
            if(h >= h_) {
                  h_ = h;
            }
      }
      
         
      
      // Fixes dual-screen position                         Most browsers      Firefox
        var dualScreenLeft = window.screenLeft != undefined ? window.screenLeft : screen.left;
        var dualScreenTop = window.screenTop != undefined ? window.screenTop : screen.top;

        var width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
        var height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;

        var left = ((width / 2) - (w_ / 2)) + dualScreenLeft;
        var top = ((height / 2) - (h_ / 2)) + dualScreenTop;
        var newWindow = window.open("/dialog?title=" + title + "&text=" + msg, "_blank", "status=0,toolbar=0,location=0,menubar=0,directories=0,resizeable=0,scrollbars=0,width=" + w_ + ",height=" + h_ + ", top=" + top + ", left=" + left)

        // Puts focus on the newWindow
        if (window.focus) {
            newWindow.focus();
        }
      
      return newWindow;
}

whenClosed = function(w, callback) {
      var pollTimer = window.setInterval(function() {
        if (w.closed !== false) { // !== is required for compatibility with Opera
            window.clearInterval(pollTimer);
          callback(w.output)
        }
    }, 200);
}
