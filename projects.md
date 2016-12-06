---
layout: page
title: Projects
---
<head>
<script src="https://ajax.microsoft.com/ajax/jquery/jquery-1.4.2.min.js" type="text/javascript"></script>
<script src="https://tumblenet.github.io/TumbleNet-Resources/javascript/api/github/github.js"></script>
<script src="/js/projects.js"></script>
</head>


{% for project in site.projects %}

[{{ project.title }}]({{ project.url }})
<p id="github" data-ghRepo=""></p>
{% endfor %}
