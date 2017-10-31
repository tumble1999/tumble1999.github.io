---
layout: page
title: Collections
author: tumble1999
---

{% for collection in site.collections %}
## {{collection.label }}
{% for item in site.[collection.label] %}
{% capture name_slug %}
/{{ item.url | remove_first:'/' | split:'/' | last }}
/{% endcapture %}
Name slug: {{ name_slug }}
* {{ item.url }}
  * {{ item.url | remove_first: collection.label }}
  * {{ item.url | remove_first: collection.label | remove_first: "//"}}
  * {{ item.url | remove_first: collection.label | remove_first: "//" | remove_last: name_slug }}
  * {{ item.url | remove_first: collection.label | remove_first: "//" | remove_last: name_slug }} => {{ item.title }}
{% endfor %}
{% endfor %}
