---
layout: page
title: Collections
author: tumble1999
---

{% for collection in site.collections %}
<!-- {{collection-->
### {{ collection.label }}
* files: {{ collection.files }}
* dir: {{ collection.directory }}
* permalink: {{ collection.permalink }}

{% for item in collection %}
#### {{ item }}
{% endfor %}
{% endfor %}
