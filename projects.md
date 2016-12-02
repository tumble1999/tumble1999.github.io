---
layout: page
title: Projects
---

{% for project in site.projects %}

[{{ project.title }}]({{ project.url }})
<p id="github" data-ghRepo=""></p>
{% endfor %}
