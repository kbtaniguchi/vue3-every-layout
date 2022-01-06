<script setup lang="ts">
import { reactive } from 'vue'

import VSidebar from '@/components/layouts/VSidebar.vue'
import VStack from '@/components/layouts/VStack.vue'
import VCover from '@/components/layouts/VCover.vue'

const data = reactive<{
  centered: string,
  space: string,
  minHeight: string,
  noPad: boolean
}>({
  centered: 'h1',
  space: 'var(--s0)',
  minHeight: '100vh',
  noPad: false
})
</script>

<template>
  <h2 class="page-title">
    Cover
  </h2>
  <VSidebar
    side-width="50%"
    content-min="40%"
    space="var(--s1)"
  >
    <div>
      <VCover
        class="with-outline"
        :centered="data.centered"
        :space="data.space"
        :min-height="data.minHeight"
        :no-pad="data.noPad"
      >
        <h1>H1</h1>
        <h2>H2</h2>
        <div>
          Div
        </div>
        <h3>H3</h3>
        <p>
          P
        </p>
      </VCover>
    </div>
    <div>
      <VStack>
        <h3>Props</h3>
        <VStack space="var(--s-5)">
          <label>centered</label>
          <input
            v-model="data.centered"
            type="text"
          >
        </VStack>
        <VStack space="var(--s-5)">
          <label>space</label>
          <input
            v-model="data.space"
            type="text"
          >
        </VStack>
        <VStack space="var(--s-5)">
          <label>minHeight</label>
          <input
            v-model="data.minHeight"
            type="text"
          >
        </VStack>
        <VStack space="var(--s-5)">
          <label>noPad</label>
          <input
            v-model="data.noPad"
            type="checkbox"
          >
        </VStack>
        <h3>Source</h3>
        <VStack space="var(--s-5)">
          <a href="https://github.com/kbtaniguchi/vue3-every-layout/blob/main/src/components/layouts/VCover.vue">
            this component source
          </a>
          <a href="https://github.com/kbtaniguchi/vue3-every-layout/blob/main/src/pages/layout-primitives/VCoverPage.vue">
            this page source
          </a>
        </VStack>
      </vstack>
    </div>
  </VSidebar>
</template>

<style module>

</style>
