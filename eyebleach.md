---
layout: default
title: Eye Bleach Gallery
---
<div class="page-header-wrap">
  <h1 class="page-header">Eye Bleach Gallery</h1>
  <span class="page-desc">Curated internet pictures for your viewing pleasure.</span>
</div>
<div class="content-body">   
{% for image in site.static_files %}
{% if image.path contains '/assets/eyebleach' %}
  <img src="{{ image.path }}">
{% endif %}
{% endfor %}
</div>