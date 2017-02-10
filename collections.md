---
layout: page
title: Collections
author: tumble1999
---

{% for collection in site.collections %}
{% for item in collection %}
{{ item.collection }}
{% endfor %}
{% endfor %}#


{% for collection in site.collections %}
{% for item in collection %}
<h2>{{ item.collection }}</h2>
{{ collection | jsonify }}
{% endfor %}
{% endfor %}

<h2>Collections</h2>
{{ site.collections | jsonify }}
