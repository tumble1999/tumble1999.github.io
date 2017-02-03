---
layout: page
title: Authors
---
{% for author in site.authors %}
[{{ author.name }}]({{ site.url }}/author/{{ author.name }})
{% endfor %}
