var d=document.getElementById('github')

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
var repo=d.dataset.ghRepo
var user=d.dataset.ghUser

githubAPI("users/" + user + "/repos", function(data) {
        var repos = data.data; // JSON Parsing
        sortByName(repos);
        text = text+"<a href='https://github.com/organizations/" + username + "/repositories/new'><button class='mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored mdl-shadow--4dp mdl-color--accent' id='add'><i class='material-icons' role='presentation'>add</i><span class='visuallyhidden'>Add</span></button></a>";
        $(repos).each(function() {
            if (this.name != (username.toLowerCase()+'.github.io')) {
                text = text + "<section class='section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp'><div class='mdl-card mdl-cell mdl-cell--12-col'><div class='mdl-card__supporting-text'><h4>" + this.name + "</h4><h5>" + this.language + "</h5>" + this.description + "</div><div class='mdl-card__actions'><a href='" + this.html_url + "' class='mdl-button'>GitHub</a>";
                if(this.homepage != "null"){
                    text = text + "<a href='" + this.homepage + "' class='mdl-button'>Website</a>";
                }
                if(this.has_issues){
                    text = text + "<a href='" + this.html_url + "/issues' class='mdl-button'>Issues</a>";
                }
                if(this.has_wiki){
                    text = text + "<a href='" + this.html_url + "/wiki' class='mdl-button'>Wiki</a>";
                }
                var repo = this;
                githubAPI("repos/" + username + "/" + this.name + "/releases", function(releaseInfo) {
                if(releaseInfo != ""){
                    text = text + "<a href='" + repo.html_url + "/releases' class='mdl-button'>Wiki</a>";
                }
                });
                
                text = text + "</div></div></section>";
            }
        });
        target.html(text);
    });

