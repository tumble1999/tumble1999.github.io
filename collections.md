---
layout: page
title: Collections
---
{{ site.collections | jsonify }}

{% for collection in site.collections %}
(% for item in collection %}
{{ item.collection }}
{% endfor %}
{% endfor %}
