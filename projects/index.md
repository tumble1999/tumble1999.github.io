---
layout: page
title: projects
---

{% for project in site.projects %}
{% capture project_type %}{{ project.layout | remove_first: 'project/' }}{% endcapture %}
{% unless project_type == project.layout %}
{% assign project_types = project_types | push: project.layout %}
{% endunless %}
{% endfor %}

{% assign project_types = project_types | uniq %}

{% for project_type in project_types %}
## {{ project_type | remove_first: 'project/'}}
{% for project in site.projects | where: "layout",project_type %}
- {{ project.title }}
{% endfor %}
{% endfor %}
