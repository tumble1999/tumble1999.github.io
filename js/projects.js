$(function() {
        $('div#github').projects();
});

jQuery.fn.projects = function() {
        ghdiv=this;
        
        var d=document.getElementById('github')
        $('div#github').html("test")

        /*
        var mydiv=document.getElementById('githun')

        //Using DOM's getAttribute() property
        var brand=mydiv.getAttribute("data-brand") //returns "toyota"
        mydiv.setAttribute("data-brand", "mazda") //changes "data-brand" to "mazda"
        mydiv.removeAttribute("data-brand") //removes "data-brand" attribute entirely
        
        //Using JavaScript's dataset property
        var brand=mydiv.dataset.brand //returns "toyota"
        mydiv.dataset.brand='mazda' //changes "data-brand" to "mazda"
        mydiv.dataset.brand=null //removes "data-brand" attribute
        */
        var repo=d.dataset.repo;
        var user=d.dataset.user;

        //githubAPI("repos/" + user + "/" + repo, function(data) {
        //        var repos = data.data; // JSON Parsing
                
        //});
}

