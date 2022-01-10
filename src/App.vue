<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'

import VSidebar from '@/components/layouts/VSidebar.vue'
import VStack from '@/components/layouts/VStack.vue'
import VCluster from '@/components/layouts/VCluster.vue'
import VIcon from '@/components/layouts/VIcon.vue'

const menuOpened = ref(true)

const onHome = (): boolean => {
  return useRoute().fullPath === '/'
}

const thisPageCategory = (): string | undefined => {
  return useRoute().meta.category
}

const toggleMenu = (): void => {
  menuOpened.value = !menuOpened.value
}
</script>

<template>
  <VSidebar>
    <nav
      v-if="menuOpened"
      :class="$style.menu"
    >
      <VStack :split-after="7">
        <h1>
          <router-link to="/">
            Vue3 Every Layout
          </router-link>
        </h1>
        <h2>Layout Primitives</h2>
        <ul>
          <li>
            <router-link to="/box">
              VBox
            </router-link>
          </li>
          <li>
            <router-link to="/stack">
              VStack
            </router-link>
          </li>
          <li>
            <router-link to="/center">
              VCenter
            </router-link>
          </li>
          <li>
            <router-link to="/cluster">
              VCluster
            </router-link>
          </li>
          <li>
            <router-link to="/sidebar">
              VSidebar
            </router-link>
          </li>
          <li>
            <router-link to="/switcher">
              VSwitcher
            </router-link>
          </li>
          <li>
            <router-link to="/cover">
              VCover
            </router-link>
          </li>
          <li>
            <router-link to="/grid">
              VGrid
            </router-link>
          </li>
          <li>
            <router-link to="/frame">
              VFrame
            </router-link>
          </li>
          <li>
            <router-link to="/reel">
              VReel
            </router-link>
          </li>
          <li>
            <router-link to="/imposter">
              VImposter
            </router-link>
          </li>
          <li>
            <router-link to="/icon">
              VIcon
            </router-link>
          </li>
        </ul>
        <h2>Appendix</h2>
        <ul>
          <li>
            <router-link to="/modular-scale">
              Modular Scale
            </router-link>
          </li>
          <li>
            <router-link to="/color-palette">
              Color Palette
            </router-link>
          </li>
        </ul>
        <aside :class="$style.poweredBy">
          powered by:
          <ul>
            <li><a href="https://v3.ja.vuejs.org/">Vue.js</a></li>
            <li><a href="https://every-layout.dev/">Every Layout</a></li>
            <li><a href="https://www.refactoringui.com/">RefactoringUI</a></li>
            <li><a href="https://hue360.herokuapp.com/">HUE/360</a></li>
          </ul>
        </aside>
      </VStack>
    </nav>
    <main :class="$style.mainContent">
      <div
        v-if="!onHome()"
        :class="$style.toolbar"
      >
        <VCluster
          space="var(--s-1)"
          align="center"
          justify="space-between"
        >
          <VCluster>
            <span><router-link to="/">Home</router-link></span>
            <span>/</span>
            <span v-if="thisPageCategory()">{{ thisPageCategory() }}</span>
          </VCluster>
          <button @click="toggleMenu">
            <VIcon>
              <svg>
                <use href="@/assets/style/icons.svg#hamburger" />
              </svg>
              {{ menuOpened ? 'Hide Menu' : 'Show Menu' }}
            </VIcon>
          </button>
        </VCluster>
      </div>
      <router-view />
    </main>
  </VSidebar>
</template>

<style module>
.menu {
  outline: var(--gray-1) dashed 1px;
  padding: var(--s1);
}

.menu h1 {
  font-size: var(--s1);
}

.menu h2 {
  font-size: var(--s0);
}

.menu ul > li {
  padding-left: var(--s0);
}

.menu .poweredBy {
  font-size: var(--s-1);
}

.toolbar {
  margin-left: calc(var(--s0) * -1);
  margin-right: calc(var(--s0) * -1);
  padding-bottom: var(--s0);
}

.mainContent {
  padding: var(--s1);
  min-height: 100vh;
}
</style>
