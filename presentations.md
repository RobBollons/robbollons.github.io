---
layout: page
title: Presentations
permalink: /presentations/
---

<div class="home">
  <ul class="posts">
    {% for presentation in site.presentations %}
      <li>
        <a class="post-link" href="{{ presentation.url | prepend: site.baseurl }}">{{ presentation.title }}</a>
      </li>
    {% endfor %}
  </ul>
</div>
