---
layout: page
title: Collections
author: tumble1999
---
[
{% for collection in site.collections %}
{{ collection | jsonify }}
{% endfor %}
]
