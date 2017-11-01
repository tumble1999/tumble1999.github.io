---
layout: page
title: Projects
---

{% for project in site.projects %}
{% capture project_type %}{{ project.layout | remove_first: 'project/' }}{% endcapture %}
{% unless project_type == project.layout %}
Project Type: {{ project_type }}
{% assign project_types = project_types | push: project.layout %}
{% endunless %}
{% endfor %}

{% assign project_types = project_types | uniq %}

{% for project_type in project_types %}
## {{ project_type | remove_first: 'project/'}}
{% assign projects = site.projects | where: "layout",project_type %}
{% for project in projects | limit: 5 %}
- {{ project.title }}
{% else %}
{% endfor %}

{% else %}
No projects.
{% endfor %}
