import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import StackPage from '@/pages/layout-primitives/StackPage.vue'
import ModalScalePage from '@/pages/appendix/ModularScalePage.vue'
import ColorPalettePage from '@/pages/appendix/color-palette/ColorPalettePage.vue'
import NotFound from '@/pages/NotFound.vue'

declare module 'vue-router' {
    // eslint-disable-next-line no-unused-vars
    interface RouteMeta {
        category?: string
    }
}

export const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/stack', component: StackPage, meta: { category: 'Layout Primitive' } },
    { path: '/modular-scale', component: ModalScalePage, meta: { category: 'Appendix' } },
    { path: '/color-palette', component: ColorPalettePage, meta: { category: 'Appendix' } },
    { path: '/:pathMatch(.*)*', component: NotFound }
  ]
})
