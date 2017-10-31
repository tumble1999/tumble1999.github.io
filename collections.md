---
layout: page
title: Collections
author: tumble1999
---

{% for collection in site.collections %}
### {{ collection.label }}
{{ collection }}
{% for item in collection %}
#### {{ item }}
{% endfor %}
{% endfor %}
