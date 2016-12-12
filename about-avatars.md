---
layout: page
author: tumble1999
title: Avatar info
---
The avatars are using github api, specificly [this page](https://developer.github.com/v3/users/).

User Picture Test
<div class="githubAuthor data-user="octocat">
<img class="userIMG" src="http://github.com/identicons/octocat.png">
</div>


User Picture when displayed in a user
<div class="user githubAuthor" data-user="octocat">
  <img src="https://github.com/identicons/octocat.png" class="user-avatar userImg" alt="">
  <div class="user-info">
    <span><a href="http://github.com/octocat" class="userName">octocat</a></span>
    <span>{{ site.time | date: "%b %-d, %Y" }}</span>
  </div>
</div>
