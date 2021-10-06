---
layout: default
title: Archive
pagination:
  enabled: true
  per_page: 10
---
<div class="page-header">
  <h1 class="page-header__title">Explore previous posts</h1>
</div>
<ul class="archive-list">
{% for post in paginator.posts %}
    <a href="{{ post.url }}">
        <li class="box-border">
            <h2 class="archive-list__title">{{ post.title}}</h2>
            <div class="archive-list__excerpt">{{ post.excerpt | strip_html | truncatewords: 40 }}</div>
            {% if post %}
            {% assign categories = post.categories %}
            {% endif %}
            <div class="archive-list__category">
            {% for category in categories %}
            {{ category }}
            {% unless forloop.last %}, {% endunless %}
            {% endfor %}
            </div>
        </li>
    </a>
{% endfor %}
</ul>

<!-- Pagination links -->
{% if paginator.total_pages > 1 %}
<div class="pagination">
  {% if paginator.next_page %}
    <a href="{{ paginator.next_page_path }}">&larr; Older</a>    
  {% else %}<span></span>
  {% endif %}  
  <span class="center">
    {{ paginator.page }} of {{ paginator.total_pages }}
  </span>
  {% if paginator.previous_page %}
  <a class="right" href="{{ paginator.previous_page_path }}">
    Newer &rarr;
  </a>
  {% else %}<span></span>
  {% endif %}
</div>
{% endif %}
