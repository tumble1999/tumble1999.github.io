---
permalink: collections.json
---
{% for collection in site.collections %}
  {{ collection | jsonify }}
{% endfor %}

