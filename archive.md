---
layout: default
title: Archive
---
<div class="page-header header-shadow"><h1>Explore previous posts</h1></div>
<ul class="myposts">
{% for post in site.posts %}
    <li><a href="{{ post.url }}">{{ post.title}}</a>
    <span class="postDate">{{ post.date | date: "%b %-d, %Y" }}</span>
    </li>
{% endfor %}
</ul>