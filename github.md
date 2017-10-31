---
title: GitHub Projects
layout: page
author: tumble1999
---
<head>
<script src="https://ajax.microsoft.com/ajax/jquery/jquery-1.4.2.min.js" type="text/javascript"></script>
<script src="/js/projects.js"></script>
</head>


{% for github in site.projects %}
{% if github.layout=='github' %}
<div class="github" data-user="{{ github.user }}" data-repo="{{ github.repo }}" >
<a href="{{ github.url }}"><h2 class="projectTitle">{{ github.repo }}</h2></a>
<p class="projectDescription">A github project made by {{ github.user }}.</p>
  <a class="projectLanguageURL"><span class="projectLanguage"></span></a> |
   <a class="projectStarsURL">Stars: <span class="projectStars"></span></a> |
  <a class="projectForksURL">Forks: <span class="projectForks"></span></a>
</div>
{% endif %}
{% endfor %}
