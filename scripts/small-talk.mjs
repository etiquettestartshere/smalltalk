import { MODULE } from "./const.mjs";

export class smallTalk {

  static init() {
    smallTalk._blueChecks();
    smallTalk._hidePortrait();
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
};