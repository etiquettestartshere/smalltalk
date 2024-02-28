import { settings } from "./scripts/settings.mjs";
import { smallTalk } from "./scripts/small-talk.mjs";

Hooks.once("init", settings.init);
Hooks.once("init", smallTalk.init);