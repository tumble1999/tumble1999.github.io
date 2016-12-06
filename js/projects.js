$(function() {
        $('div#github').each(function() {
                ghdiv=this;
        
                var d=document.getElementById(ghdiv);

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

                githubAPI("repos/" + user + "/" + repo, function(data) {
                        repo = data.data;
                        //PROJECT NAME = repo.full_name
                        //...
                        ghdiv.children('h2.project-title').text(repo.full_name);
                        ghdiv.children('p.project-description').text(repo.description);
                        //ghdiv.children('h1.project-title').text(repo.full_name);
                        //ghdiv.children('h1.project-title').text(repo.full_name);
                });
        });
});

function githubAPI(location, callback) {
  var url = "https://api.github.com/" + location + "?callback=?";
  jQuery.getJSON(url,callback);
}
