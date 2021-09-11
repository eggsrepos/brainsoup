---
layout: default
title: Archive
---
<div class="primary-box--content row-spacing">
    <div class="page-header">
        <h1 class="header-highlight--primary grungeheader">Explore previous posts</h1>
    </div>
    <div class="body body-spacing">
        <ul class="myposts">
        {% for post in site.posts %}
            <li><a href="{{ post.url }}">{{ post.title}}</a> //
            <span class="postDate">{{ post.date | date: "%b %-d, %Y" }}</span>
            </li>
        {% endfor %}
        </ul>
    </div>
</div>