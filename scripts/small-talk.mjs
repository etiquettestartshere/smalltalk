import { MODULE } from "./const.mjs";

export class smallTalk {

  static init() {
    smallTalk._blueChecks();
    smallTalk._hidePortrait();
    smallTalk._hideSubtitle();
    smallTalk._hideItemImg();
    smallTalk._portraitAndSubtitle();
    Hooks.on("dnd5e.renderChatMessage", smallTalk._GM);
  };

  static _blueChecks() {
    const blue = game.settings.get(MODULE, "blueChecks");
    if (blue) {
      const link = `<link rel="stylesheet" href="/modules/smalltalk/styles/blue-hit-check.css" />`
      document.head.insertAdjacentHTML('beforeend', link);
    };  
  };

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

  static _portraitAndSubtitle() {
    const hideArt = game.settings.get(MODULE, "hidePortrait");
    const hideSub = game.settings.get(MODULE, "hideSubtitle");
    if (hideArt && hideSub) {
      const link = `<link rel="stylesheet" href="/modules/smalltalk/styles/portrait-and-subtitle.css" />`
      document.head.insertAdjacentHTML('beforeend', link);
    };  
  };

  static _GM(message, html) {
    if ((!message.speaker.actor && !message.speaker.token) || (!game.settings.get(MODULE, "hidePortrait") && game.settings.get(MODULE, "hideSubtitle"))) {
      const subtitle = html.querySelector('.message-header .subtitle');
      subtitle.textContent = String.fromCharCode(8203);
    };  
  };
};