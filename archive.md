---
layout: default
title: Archive
---
<div class="content-wrap">
    <div class="page-header-wrap">
        <h1 class="page-header">Explore previous posts</h1>
    </div>
    <ul class="archive-list">
    {% for post in site.posts %}
        <a href="{{ post.url }}">
            <li class="box-border">
                <h1 class="archive-list__title">{{ post.title}}</h1>
                <div class="archive-list__date">{{ post.date | date: "%B %-d, %Y" }}</div>
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
</div>
