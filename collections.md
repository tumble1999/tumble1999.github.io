---
layout: page
title: Collections
author: tumble1999
---

{% for collection in site.collections %}
## {{collection.label }}
{% for item in site.[collection.label] %}
{% capture start %}{{ collection.label }}/{% endcapture %}
{% capture word_count %}{{ item.url | split:'/' |  }}{% endcapture %}
{% assign word_count word_count | minus: 1 %}
*  {{ item.url | remove_first:'/' | replace:'/',' ' | truncate_words: word_count }} => {{ item.title }}
{% endfor %}
{% endfor %}
