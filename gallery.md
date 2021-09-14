---
layout: default
title: Gallery
---
<div class="content-wrap">
  <div class="page-header-wrap page-header--divider">
    <h1 class="page-header">Eye Bleach Gallery</h1>
    <p class="page-desc">Curated internet pictures for your viewing pleasure.</p>
  </div>
  <div class="gallery">   
  {% for image in site.static_files %}
  {% if image.path contains '/assets/eyebleach' %}
    <img src="{{ image.path }}">
  {% endif %}
{% endfor %}
  </div>
</div>