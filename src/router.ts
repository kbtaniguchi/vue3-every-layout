import { createRouter, createWebHashHistory } from 'vue-router'

import Home from '@/pages/Home.vue'
import NotFound from '@/pages/NotFound.vue'

import VBoxPage from '@/pages/layout-primitives/VBoxPage.vue'
import VStackPage from '@/pages/layout-primitives/VStackPage.vue'
import VCenterPage from '@/pages/layout-primitives/VCenterPage.vue'
import VClusterPage from '@/pages/layout-primitives/VClusterPage.vue'
import VCoverPage from '@/pages/layout-primitives/VCoverPage.vue'
import VFramePage from '@/pages/layout-primitives/VFramePage.vue'
import VGridPage from '@/pages/layout-primitives/VGridPage.vue'
import VIconPage from '@/pages/layout-primitives/VIconPage.vue'
import VImposterPage from '@/pages/layout-primitives/VImposterPage.vue'
import VReelPage from '@/pages/layout-primitives/VReelPage.vue'
import VSidebarPage from '@/pages/layout-primitives/VSidebarPage.vue'
import VSwitcherPage from '@/pages/layout-primitives/VSwitcherPage.vue'

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
    { path: '/frame', component: VFramePage, meta: { category: 'Layout Primitive' } },
    { path: '/grid', component: VGridPage, meta: { category: 'Layout Primitive' } },
    { path: '/icon', component: VIconPage, meta: { category: 'Layout Primitive' } },
    { path: '/imposter', component: VImposterPage, meta: { category: 'Layout Primitive' } },
    { path: '/reel', component: VReelPage, meta: { category: 'Layout Primitive' } },
    { path: '/sidebar', component: VSidebarPage, meta: { category: 'Layout Primitive' } },
    { path: '/switcher', component: VSwitcherPage, meta: { category: 'Layout Primitive' } },
    { path: '/modular-scale', component: ModalScalePage, meta: { category: 'Appendix' } },
    { path: '/color-palette', component: ColorPalettePage, meta: { category: 'Appendix' } },
    { path: '/:pathMatch(.*)*', component: NotFound }
  ]
})
