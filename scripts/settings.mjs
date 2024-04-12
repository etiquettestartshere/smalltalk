import { MODULE } from "./const.mjs";

export class settings {

  static init() {
    settings._settings();
  };
  
  static _settings() {

    game.settings.register(MODULE, "hidePortrait", {
      name: "SMALLTALK.Settings.HidePortraitName",
      hint: "SMALLTALK.Settings.HidePortraitHint",
      scope: "client",
      config: true,
      type: Boolean,
      default: false,
      requiresReload: true,
      onChange: false
    });

    game.settings.register(MODULE, "hideSubtitle", {
      name: "SMALLTALK.Settings.HideSubtitleName",
      hint: "SMALLTALK.Settings.HideSubtitleHint",
      scope: "client",
      config: true,
      type: Boolean,
      default: false,
      requiresReload: true,
      onChange: false
    });

    game.settings.register(MODULE, "hideItemImg", {
      name: "SMALLTALK.Settings.HideItemImgName",
      hint: "SMALLTALK.Settings.HideItemImgHint",
      scope: "client",
      config: true,
      type: Boolean,
      default: false,
      requiresReload: true,
      onChange: false
    });

    game.settings.register(MODULE, "hideItemSubtitle", {
      name: "SMALLTALK.Settings.HideItemSubtitleName",
      hint: "SMALLTALK.Settings.HideItemSubtitleHint",
      scope: "client",
      config: true,
      type: Boolean,
      default: false,
      requiresReload: true,
      onChange: false
    });

    game.settings.register(MODULE, "trashButton", {
      name: "SMALLTALK.Settings.TrashIconName",
      hint: "SMALLTALK.Settings.TrashIconHint",
      scope: "client",
      config: true,
      type: Boolean,
      default: false,
      requiresReload: true,
      onChange: false
    });

    game.settings.register(MODULE, "purpleWhispers", {
      name: "SMALLTALK.Settings.PurpleWhispersName",
      hint: "SMALLTALK.Settings.PurpleWhispersHint",
      scope: "client",
      config: true,
      type: Boolean,
      default: false,
      requiresReload: true,
      onChange: () => { Array.from(document.styleSheets).find((e) => e.href?.includes("/modules/smalltalk/purple-whispers")).disabled = 
        (game.settings.get(MODULE, "defaultChat") ? false : true);
      }
    });

    game.settings.register(MODULE, "blueChecks", {
      name: "SMALLTALK.Settings.BlueChecksName",
      hint: "SMALLTALK.Settings.BlueChecksHint",
      scope: "client",
      config: true,
      type: Boolean,
      default: false,
      requiresReload: true,
      onChange: false
    });

    // TODO localize
    game.settings.register(MODULE, "defaultChat", {
      name: "Default Chat",
      hint: "Default Chat",
      scope: "client",
      config: true,
      type: Boolean,
      default: false,
      requiresReload: false,
      onChange: () => { Array.from(document.styleSheets).find((e) => e.href?.includes("/modules/smalltalk/styles")).disabled = 
        (game.settings.get(MODULE, "defaultChat") ? false : true);
      }
    });
  };
};    