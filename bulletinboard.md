---
layout: bulletin
title: Bulletin Board
---
{% if site.data.bulletinboard.size > 0 %}
<div class="bb-wrap">
  {% for item in site.data.bulletinboard %}
  {% assign entry = item[1] %}
  <div class="bb-item box-border">
    <p class="bb-item__message">{{ entry.message }}</p>
    <p class="bb-item__author">- {{ entry.name }}</p>
  </div>  
  {% endfor %}
</div>
{% endif %}

<div class="comment-form box-border">
  <h2 class="comment-form__title">Leave a note on the bulletin board</h2>
  <form class="js-form form" method="post" action="https://eggsstaticmaninstance.herokuapp.com/v2/entry/eggsrepos/brainsoup/master/bulletinboard">
   
    
  <div class="textfield">
    <label for="comment-form-message">Message
      <textarea class="textfield__input" name="fields[message]" type="text" id="comment-form-message" placeholder="What do you think?" required rows="6"></textarea>
    </label>
  </div>

  <div class="textfield narrowfield">
    <label for="comment-form-name">Name
      <input class="textfield__input" name="fields[name]" type="text" id="comment-form-name" placeholder="(Required)" required/>
    </label>
  </div>

  <div class="textfield narrowfield">
    <label for="comment-form-email">E-mail
      <input class="textfield__input" name="fields[email]" type="email" id="comment-form-email" placeholder="(Optional)"/>
    </label>
  </div>

  <div class="textfield narrowfield hp">
    <label for="hp">
      <input class="textfield__input" name="fields[hp]" id="hp" type="text" placeholder="Leave blank">
    </label>
  </div>

  <div class="frc-captcha" data-sitekey="FCMG67I39NQD4M26"></div>

  <button class="submit-button" id="comment-form-submit">
    Submit
  </button>  
  </form>
  <article class="modal">
    <div>
      <h3 class="modal-title js-modal-title"></h3>
    </div>
    <div class="mdl-card__supporting-text js-modal-text"></div>
    <div class="mdl-card__actions mdl-card--border">
      <button class="button mdl-button--colored mdl-js-button mdl-js-ripple-effect js-close-modal">Close</button>
    </div>
  </article>
</div>