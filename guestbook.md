---
layout: guestbook
title: Guestbook
---
<div class="comment-form box-border">
  <h2 class="comment-form__title">Enjoyed your stay? Sign the guestbook</h2>
  <form class="js-form form" method="post" action="https://eggsstaticmaninstance.herokuapp.com/v2/entry/eggsrepos/brainsoup/master/guestbook">
    {% if site.reCaptcha.enabled %}
    <input type="hidden" name="options[reCaptcha][siteKey]" value="{{ site.reCaptcha.siteKey }}">
    <input type="hidden" name="options[reCaptcha][secret]"  value="{{ site.reCaptcha.secret }}">
    {% endif %}
    
  <div class="textfield">
    <label for="comment-form-message">Your message
      <textarea class="textfield__input" name="fields[message]" type="text" id="comment-form-message" placeholder="What do you think?" required rows="6"></textarea>
    </label>
  </div>

  <div class="textfield narrowfield">
    <label for="comment-form-name">Name
      <input class="textfield__input" name="fields[name]" type="text" id="comment-form-name" placeholder="Your name (required)" required/>
    </label>
  </div>

  <div class="textfield narrowfield">
    <label for="comment-form-email">E-mail
      <input class="textfield__input" name="fields[email]" type="email" id="comment-form-email" placeholder="Your email (optional)"/>
    </label>
  </div>

  <div class="textfield narrowfield hp">
    <label for="hp">
      <input class="textfield__input" name="fields[hp]" id="hp" type="text" placeholder="Leave blank">
    </label>
  </div>

  {% if site.reCaptcha.enabled %}
  <div id="reCaptcha" class="g-recaptcha" data-sitekey="{{ site.reCaptcha.siteKey }}"></div>
  {% endif %}

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