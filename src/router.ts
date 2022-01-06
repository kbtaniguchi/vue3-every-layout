import { createRouter, createWebHashHistory } from 'vue-router'

import Home from '@/pages/Home.vue'
import NotFound from '@/pages/NotFound.vue'

import VBoxPage from '@/pages/layout-primitives/VBoxPage.vue'
import VStackPage from '@/pages/layout-primitives/VStackPage.vue'
import VCenterPage from '@/pages/layout-primitives/VCenterPage.vue'
import VClusterPage from '@/pages/layout-primitives/VClusterPage.vue'
import VCoverPage from '@/pages/layout-primitives/VCoverPage.vue'

import ModalScalePage from '@/pages/appendix/ModularScalePage.vue'
import ColorPalettePage from '@/pages/appendix/color-palette/ColorPalettePage.vue'

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
    { path: '/box', component: VBoxPage, meta: { category: 'Layout Primitive' } },
    { path: '/stack', component: VStackPage, meta: { category: 'Layout Primitive' } },
    { path: '/center', component: VCenterPage, meta: { category: 'Layout Primitive' } },
    { path: '/cluster', component: VClusterPage, meta: { category: 'Layout Primitive' } },
    { path: '/cover', component: VCoverPage, meta: { category: 'Layout Primitive' } },
    { path: '/modular-scale', component: ModalScalePage, meta: { category: 'Appendix' } },
    { path: '/color-palette', component: ColorPalettePage, meta: { category: 'Appendix' } },
    { path: '/:pathMatch(.*)*', component: NotFound }
  ]
})
