---
layout: page
title: Collections
author: tumble1999
---

{% for collection in site.collections %}
## {{collection.label }}
{% for item in site.[collection.label] %}
* {{ item.url }} {{ item.title }}
{% endfor %}
{% endfor %}
