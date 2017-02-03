---
layout: page
title: Authors
---
{% for author in site.authors %}
[{{ author.name }}]({{ site.url }}/authors/{{ author.name }})
{% endfor %}
