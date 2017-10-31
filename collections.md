---
layout: page
title: Collections
author: tumble1999
---

{% for collection in site.collections %}
## {{collection.label }}
{% for item in site.[collection.label] %}
{% capture start %}{{ collection.label }}/{% endcapture %}
{% capture start_url %}{{ item.url | remove_first: '/' | remove_first: start }}{% endcapture %}
{% capture word_count %}{{ start_url | split: '/' |  }}{% endcapture %}
{% assign word_count = word_count | minus: '1' %}
*  {{ item.url }} 
  *  {{ item.url | remove_first: '/' }}
  *  {{ item.url | remove_first: '/' | remove_first: start }}
  *  {{ start_url | replace: '/',' '}}
  *  {{ start_url | replace: '/',' ' | truncate_words: word_count }}
  *  {{ start_url | replace: '/',' ' | truncate_words: word_count }} => {{ item.title }}
{% endfor %}
{% endfor %}
