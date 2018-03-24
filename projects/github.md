---
title: GitHub Projects
layout: page
---
<head>
<script src=" https://cdn.rawgit.com/showdownjs/showdown/1.8.6/dist/showdown.min.js"></script>
<script src="/js/projects.js"></script>
</head>


{% for github in site.projects %}
{% if github.layout == 'project/github' %}
<div class="github" data-user="{{ github.user }}" data-repo="{{ github.repo }}" >
<a href="{{ github.url }}"><h2 class="projectTitle">{{ github.repo }}</h2></a>
<p class="projectDescription">A github project made by {{ github.user }}.</p>
  <a class="projectLanguageURL"><span class="projectLanguage"></span></a> |
   <a class="projectStarsURL">Stars: <span class="projectStars"></span></a> |
  <a class="projectForksURL">Forks: <span class="projectForks"></span></a>
</div>
{% endif %}
{% endfor %}
