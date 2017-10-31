---
layout: page
title: Collections
author: tumble1999
---

{% for collection in site.collections %}
## {{collection.label }}
{% for item in site.[collection.label] %}
* {{ item.url | remove_first: collection.label | remove_first: "//"}} {{ item.title }}
{% endfor %}
{% endfor %}
