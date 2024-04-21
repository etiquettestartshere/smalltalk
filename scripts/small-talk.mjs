import { MODULE } from "./const.mjs";

export class smallTalk {

  static init() {
    smallTalk._blueChecks();
    smallTalk._purpleWhispers();
    smallTalk._hidePortrait();
    smallTalk._hideSubtitle();
    smallTalk._hideItemImg();
    smallTalk._hideItemSubtile();
    Hooks.on("dnd5e.renderChatMessage", smallTalk._GM);
    if (game.settings.get(MODULE, "trashButton")) Hooks.on("dnd5e.renderChatMessage", smallTalk._trash);
    if (game.settings.get(MODULE, "purpleWhispers")) Hooks.on("dnd5e.renderChatMessage", smallTalk._whispers);
    if (game.settings.get(MODULE, "defaultChat")) {
      Array.from(document.styleSheets).find((e) => e.href?.includes("/modules/smalltalk/styles")).disabled = true;
    };  
  };

  static _blueChecks() {
    const blue = game.settings.get(MODULE, "blueChecks");
    if (blue) {
      const link = `<link rel="stylesheet" href="/modules/smalltalk/styles/blue-hit-check.css" />`
      document.head.insertAdjacentHTML('beforeend', link);
    };  
  };

  static _purpleWhispers() {
    const purple = game.settings.get(MODULE, "purpleWhispers");
    if (purple) {
      const link = `<link rel="stylesheet" href="/modules/smalltalk/styles/purple-whispers.css" />`
      document.head.insertAdjacentHTML('beforeend', link);
    };  
  }

  static _hidePortrait() {
    const hideArt = game.settings.get(MODULE, "hidePortrait");
    if (hideArt) {
      const link = `<link rel="stylesheet" href="/modules/smalltalk/styles/hide-portrait.css" />`
      document.head.insertAdjacentHTML('beforeend', link);
    };
  };

  static _hideSubtitle() {
    const hideSub = game.settings.get(MODULE, "hideSubtitle");
    if (hideSub) {
      const link = `<link rel="stylesheet" href="/modules/smalltalk/styles/hide-subtitle.css" />`
      document.head.insertAdjacentHTML('beforeend', link);
    };  
  };

  static _hideItemImg() {
    const hideArt = game.settings.get(MODULE, "hideItemImg");
    if (hideArt) {
      const link = `<link rel="stylesheet" href="/modules/smalltalk/styles/hide-item-img.css" />`
      document.head.insertAdjacentHTML('beforeend', link);
    };  
  };

  static _hideItemSubtile() {
    const hideSub = game.settings.get(MODULE, "hideItemSubtitle");
    if (hideSub) {
      const link = `<link rel="stylesheet" href="/modules/smalltalk/styles/hide-item-subtitle.css" />`
      document.head.insertAdjacentHTML('beforeend', link);
    };  
  };

  static _trash(message, html) {
    html.querySelector('.chat-control').remove();
    const time = html.querySelector('.message-timestamp');
    const newHTML = `
      <a aria-label="Trash" class="chat-control smalltalk-trash">
        <i class="fas fa-trash fa-fw"></i>
      </a>
    `
    time.insertAdjacentHTML("afterend", newHTML);
    const trash = html.querySelector('.smalltalk-trash');
    trash.addEventListener('click', () => {
      message.delete();
    });
  };

  static _GM(message, html) {
    const subtitle = html.querySelector('.message-header .subtitle');
    if ((!message.speaker.actor && !message.speaker.token) || 
        (!game.settings.get(MODULE, "hidePortrait") && game.settings.get(MODULE, "hideSubtitle")) ||
        (message.whisper && !subtitle.textContent.length)) {
      if (subtitle.textContent.includes("To:")) return;
      subtitle.textContent = String.fromCharCode(8203);
    };  
  };

  static _whispers(message, html) {
    if (message.type === 4 || (message.type === 5 && message.whisper.length)) {
      const subtitle = html.querySelector('.message-header .subtitle');
      const label = html.classList.value.includes("blind") ? game.i18n.localize("SMALLTALK.Blind") : game.i18n.localize("SMALLTALK.Whisper");
      if (subtitle.textContent.includes("To:")) return;
      subtitle.textContent === String.fromCharCode(8203) ?
      subtitle.textContent = `(${label})` :
      subtitle.textContent += " " + `(${label})`;
    };
  };
};