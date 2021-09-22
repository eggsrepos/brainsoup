---
layout: default
title: Gallery
---
<div class="page-header-wrap">
  <h1 class="page-header">Eye Bleach Gallery</h1>
  <p>Curated internet pictures for your viewing pleasure.</p>
</div>
<div class="content-body">   
{% for image in site.static_files %}
{% if image.path contains '/assets/eyebleach' %}
  <img src="{{ image.path }}">
{% endif %}
{% endfor %}
</div>