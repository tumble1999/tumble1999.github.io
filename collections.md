---
layout: page
title: Collections
---
{% for collection in site.collections %}
[{{ collection }}]({{ site.url }}/{{ collection }})
{% endfor %}