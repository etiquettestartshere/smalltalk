import { MODULE } from "./const.mjs";

export class smallTalk {

  static init() {
    smallTalk._blueChecks();
    smallTalk._hidePortrait();
    smallTalk._hideSubtitle();
    smallTalk._hideItemImg();
    Hooks.on("dnd5e.renderChatMessage", smallTalk._GM);
  };

  static _blueChecks() {
    const blue = game.settings.get(MODULE, "blueChecks");
    const link = `<link rel="stylesheet" href="/modules/smalltalkdnd5e/styles/blue-hit-check.css" />`
    if (blue) document.head.insertAdjacentHTML('beforeend', link);
  };

  static _hidePortrait() {
    const hideArt = game.settings.get(MODULE, "hidePortrait");
    const link = `<link rel="stylesheet" href="/modules/smalltalkdnd5e/styles/hide-portrait.css" />`
    if (hideArt) document.head.insertAdjacentHTML('beforeend', link);
  };

  static _hideSubtitle() {
    const hideArt = game.settings.get(MODULE, "hideSubtitle");
    const link = `<link rel="stylesheet" href="/modules/smalltalkdnd5e/styles/hide-subtitle.css" />`
    if (hideArt) document.head.insertAdjacentHTML('beforeend', link);
  };

  static _hideItemImg() {
    const hideArt = game.settings.get(MODULE, "hideItemImg");
    const link = `<link rel="stylesheet" href="/modules/smalltalkdnd5e/styles/hide-item-img.css" />`
    if (hideArt) document.head.insertAdjacentHTML('beforeend', link);
  };

  static _GM(message, html) {
    if (!message.speaker.actor && !message.speaker.token) {
      const subtitle = html.querySelector('.message-header .subtitle');
      subtitle.textContent = String.fromCharCode(8203);
    };  
  };
};