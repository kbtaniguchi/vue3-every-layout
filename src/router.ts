import {createRouter, createWebHashHistory} from "vue-router";
import Home from '@/pages/Home.vue';
import ColorPalettePage from '@/pages/appendix/color-palette/ColorPalettePage.vue';
import ModalScalePage from '@/pages/appendix/ModularScalePage.vue';
import NotFound from '@/pages/NotFound.vue';

export const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {path: '/', component: Home},
        {path: '/modular-scale', component: ModalScalePage},
        {path: '/color-palette', component: ColorPalettePage},
        {path: '/:pathMatch(.*)*', component: NotFound}
    ],
})