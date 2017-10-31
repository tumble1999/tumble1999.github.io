---
permalink: collections.json
---
[
{% for collection in site.collections %}
{{collection.label}}
{
{{ collection | jsonify }}
},
{% endfor %}
]

