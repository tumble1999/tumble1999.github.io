---
title: Logging Out... (V2 Test)
layout: default
---
<div class="mdl-card mdl-shadow--4dp post-container">
div class="mdl-card__title">
	<h2 class="mdl-card__title-text post-title">{{ page.title }}</h2>
</div>
<div class="mdl-card__supporting-text post-content">
Please wait
<a class="noDialog" href="javascript:noDialog()">Nothing is happening.</a>
</div>
</div>

<script src="/js/logoutV2.js"></script>

 <dialog class="mdl-dialog">
    <h4 class="mdl-dialog__title">Would you like to sign out of GitHub too?</h4>
    <div class="mdl-dialog__content">
      <p>
       Would you like to sign out of [GitHub] and this website or just [this website].
      </p>
    </div>
    <div class="mdl-dialog__actions">
      <button type="button" class="mdl-button close">Cancel</button>
      <button type="button" class="mdl-button close">GitHub</button>
      <button type="button" class="mdl-button close">This Website</button>
    </div>
  </dialog>


