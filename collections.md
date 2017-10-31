---
layout: page
title: Collections
author: tumble1999
---

{% for collection in site.collections %}
### {{ collection.label }}
* files: {{ collection.files }}

* dir: {{ collection.directory }}

* files: {{ collection.files }}

* permalink: {{ collection.permalink }}

{% for item in collection %}
#### {{ item.name }}
{% for p in item %}
{{ p.name }}
{% endfor %}
{% endfor %}
{% endfor %}
