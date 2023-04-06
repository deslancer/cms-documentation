import {intro_en, intro_ru, intro_ua} from "./components/introduction.js";
import {menu_en, menu_ru, menu_ua} from "./components/menu.js";
import {getting_started_en, getting_started_ru, getting_started_ua} from "./components/getting_started.js";
import {general_en, general_ru, general_ua} from "./components/general.js";
import {videos_en, videos_ru, videos_ua} from "./components/videos.js";

export default {
    en: {
        ...general_en,
        ...menu_en,
        ...intro_en,
        ...getting_started_en,
        ...videos_en,
    },
    ru: {
        ...general_ru,
        ...menu_ru,
        ...intro_ru,
        ...getting_started_ru,
        ...videos_ru,
    },
    ua: {
        ...general_ua,
        ...menu_ua,
        ...intro_ua,
        ...getting_started_ua,
        ...videos_ua
    },
};
