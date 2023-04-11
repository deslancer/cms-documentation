import {intro_en, intro_ru, intro_ua} from "./components/introduction.js";
import {menu_en, menu_ru, menu_ua} from "./components/menu.js";
import {getting_started_en, getting_started_ru, getting_started_ua} from "./components/getting_started.js";
import {general_en, general_ru, general_ua} from "./components/general.js";
import {videos_en, videos_ru, videos_ua} from "./components/videos.js";
import {cmsNodes_en, cmsNodes_ru, cmsNodes_ua} from "./components/cms-nodes.js";
import {graph_essentials_en, graph_essentials_ru, graph_essentials_ua} from "./components/graph_essentials.js";

export default {
    en: {
        ...general_en,
        ...menu_en,
        ...intro_en,
        ...getting_started_en,
        ...videos_en,
        ...cmsNodes_en,
        ...graph_essentials_en,
    },
    ru: {
        ...general_ru,
        ...menu_ru,
        ...intro_ru,
        ...getting_started_ru,
        ...videos_ru,
        ...cmsNodes_ru,
        ...graph_essentials_ru,
    },
    ua: {
        ...general_ua,
        ...menu_ua,
        ...intro_ua,
        ...getting_started_ua,
        ...videos_ua,
        ...cmsNodes_ua,
        ...graph_essentials_ua
    },
};
