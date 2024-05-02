# Small Talk (for D&D Fifth Edition)

A module that makes dnd5e chat messages smaller by reducing overall size, button size, margins, portrait size, subtitle size, and so on (also adds some other opinionated css chat tweaks).

## Settings
- **Hide Portraits**: Remove the portraits from chat cards.
- **Use Token Image**: Use the token image rather than the portrait in chat messages.
- **Hide Subtitle**: Hide the subtitle which shows, among other things, the associated username.
- **Hide Item Image**: Hides the item image on item chat cards.
- **Hide Item Subtitle**: Hides the item subtitle on item chat cards. Caution: this may contain useful information in play.
- **Trash Button**: Replaces the ellipsis context menu button on messages with a trash button (similar to version 2) to allow for one click deletion (use at your own risk).
- **Purple Whispers**: Makes the background of whispered messages a slight pinkish purple and labels them, to better distinguish them from public messages.
- **Blue Hit Checks**: Use blue instead of green for successful checks and maxed dice (may be more red-green colorblind friendly).
- **Default Chat Appearance**: Use a (mostly) default chat message size and appearance (in order to only use one of the extra settings).

All settings are off by default.

![image](https://github.com/etiquettestartshere/smalltalk/blob/main/img/smalltalk1.webp) ![image](https://github.com/etiquettestartshere/smalltalk/blob/main/img/smalltalk2.webp)

## Compatibility
I have not tested compatibility with many other modules that modify chat cards, and unless I use that module myself I am unlikely to (see CONTRIBUTING.md for more info). The only modules I have personally tested for compatibility are my other chat card based module [Effective Tray](https://github.com/etiquettestartshere/effectivetray) and Zhell's [Retroactive Advantage](https://github.com/krbz999/foundryvtt-retroactive-advantage-5e).
___
###### **Technical Details**

**Scope:** CSS tweaks, some hidden behind settings & brute force additions to the head.

**License:** MIT License.