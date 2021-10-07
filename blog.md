---
layout: default
title: Blog
pagination:
  enabled: true
---
{% for post in paginator.posts %}
<div class="section-primary">
  <article class="blog-post">
    <div class="blog-post__header">
      <div class="blog-post__date">{{ post.date  | date: '%B %-d, %Y' }}</div>
      <h1 class="blog-post__title box-border"><a href="{{ post.url }}">{{ post.title }}</a></h1>
    </div>
    {% if post.content contains '<!--more-->' %}
    <div class="content-body">
        {{ post.content | split:'<!--more-->' | first }}
    </div>
    <input type="checkbox" class="read-more-state" id="{{ post.url }}"/>
    <div class="read-more content-body blog-post-sig">
      {{ post.content | split:'<!--more-->' | last }}
    </div>
    <label for="{{ post.url }}" class="read-more-trigger"></label>
    {% else %}
    <div class="content-body">
      {{ post.content }}
    </div>
    {% endif %}
    <div class="comments-link divider"><a href="{{ post.url }}#comments-section">Leave a comment&nbsp;<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M22 3v13h-11.643l-4.357 3.105v-3.105h-4v-13h20zm2-2h-24v16.981h4v5.019l7-5.019h13v-16.981zm-5 6h-14v-1h14v1zm0 2h-14v1h14v-1zm-6 3h-8v1h8v-1z"/></svg></a></div>
  </article>
</div>
{% endfor %}  

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