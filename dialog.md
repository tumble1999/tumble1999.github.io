---
title: 
layout: empty
---
<!-- Square card -->
<style>
.demo-card-square.mdl-card {
  width: 100%;
  height: 100%;
}

</style>

<div class="demo-card-square mdl-card mdl-shadow--2dp">
  <div class="mdl-card__title mdl-card--expand">
    <h2 class="mdl-card__title-text cardTitle">CardTitle</h2>
  </div>
  <div class="mdl-card__supporting-text cardText">
    CardText
  </div>
  <div class="mdl-card__actions mdl-card--border cardOptions">
    <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
      View Updates
    </a>
  </div>
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
