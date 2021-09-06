---
layout: default
title: Archive
---
<h1 class="page-header">Explore previous posts</h1>
<ul class="myposts">
{% for post in site.posts %}
    <li><a href="{{ post.url }}">{{ post.title}}</a>
    <span class="postDate">{{ post.date | date: "%b %-d, %Y" }}</span>
    </li>
{% endfor %}
</ul>