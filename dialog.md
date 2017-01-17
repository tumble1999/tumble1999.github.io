---
title: 
layout: empty
---

    <h4 class="mdl-dialog__title">Allow data collection?</h4>
    <div class="mdl-dialog__content">
      <p>
        Allowing us to collect data will let us get you the information you want faster.
      </p>
    </div>
    <div class="mdl-dialog__actions">
      <button type="button" class="mdl-button">Agree</button>
      <button type="button" class="mdl-button close">Disagree</button>
    </div>

<script>
$(function() {
  $(".cardTitle").text(getQueryVariable("title"));
  $(".cardText").text(getQueryVariable("text"));
  $(".cardTexOptions").html(listLinks(window.opener.dialogWindowLinkNames, window.opener.dialogWindowLinkHref.length, index));
  
  // window.opener.dialogWindowLinkNames.length
  // window.opener.dialogWindowLinkHref.length
  
  
});

getQueryVariable = function(variable) {
   var query = window.location.search.substring(1);
   var vars = query.split('&');

   for (var i = 0; i < vars.length; i++) {
     var pair = vars[i].split('=');

     if (pair[0] === variable) {
       return decodeURIComponent(pair[1].replace(/\+/g, '%20'));
     }
   }
 }
 
 listLinks = function(arrayNames, arrayHrefs, index) {
   var output = "<a class='mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect' href='" + arrayHrefs[index] + "'>" + arrayNames[index] + "</a>";
   return output + listLinks(arrayNames, arrayHrefs, index + 1);
 }

</script>
