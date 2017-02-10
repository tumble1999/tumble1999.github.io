---
layout: page
title: Collections
---
{{ site.collections | jsonify }}
{% for collection in site.collections %}
[{{ collection }}]({{ site.url }}/{{ collection }})
{% endfor %}
