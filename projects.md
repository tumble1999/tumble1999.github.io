---
layout: page
title: Projects
author: tumble1999
---
<head>
<script src="https://ajax.microsoft.com/ajax/jquery/jquery-1.4.2.min.js" type="text/javascript"></script>
<script src="/js/projects.js"></script>
</head>


{% for project in site.projects %}
<div class="github" data-user="{{ project.user }}" data-repo="{{ project.repo }}" >
<a href="{{ project.url }}"><h2 class="projectTitle">{{ project.repo }}</h2></a>
<p class="projectDescription">A github project made by {{ project.user }}.</p>
  <a class="projectLanguageURL"><span class="projectLanguage"></span></a> | 
   <a class="projectStarsURL">Stars: <span class="projectStars"></span></a> | 
  <a class="projectForksURL">Forks: <span class="projectForks"></span></a>
</div>
{% endfor %}
