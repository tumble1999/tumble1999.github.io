---
layout: page
title: Collections
author: tumble1999
---

{% for collection in site.collections %}
<!-- {{collection-->
### {{ collection.label }}

{% for item in collection.files %}
#### {{ item.title }}
{% endfor %}
{% endfor %}
