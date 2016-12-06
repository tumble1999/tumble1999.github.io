---
layout: page
title: Projects
---
<head>
<script src="https://ajax.microsoft.com/ajax/jquery/jquery-1.4.2.min.js" type="text/javascript"></script>
<script src="/js/projects.js"></script>
</head>


{% for project in site.projects %}

<div id="github" class="{{ project.user }}-{{ project.repo }}" data-repo="{{ project.repo }}" data-user="{{ project.user }}">
<h2 class="project-title">Project Title</h2>
<p class="project-description">Project Description</p>
</div>
{% endfor %}
