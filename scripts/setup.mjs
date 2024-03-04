import { settings } from "./settings.mjs";
import { smallTalk } from "./small-talk.mjs";

Hooks.once("init", settings.init);
Hooks.once("init", smallTalk.init);