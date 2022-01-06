<script setup lang="ts">
import { reactive } from 'vue'

import VSidebar from '@/components/layouts/VSidebar.vue'
import VStack from '@/components/layouts/VStack.vue'
import VCenter from '@/components/layouts/VCenter.vue'
import VBox from '@/components/layouts/VBox.vue'

const data = reactive<{
  max: string;
  gutters: string;
  andText: boolean;
  intrinsic: boolean;
}>({
  max: 'var(--measure)',
  gutters: 'var(--s0)',
  andText: false,
  intrinsic: false
})
</script>

<template>
  <h2 class="page-title">
    Center
  </h2>
  <VSidebar
    side-width="50%"
    content-min="40%"
    space="var(--s1)"
  >
    <div>
      <VCenter
        class="with-outline"
        :max="data.max"
        :gutters="data.gutters"
        :and-text="data.andText"
        :intrinsic="data.intrinsic"
      >
        <p>
          あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほ
        </p>
        <VBox>
          BOX
        </VBox>
        <VCenter class="with-outline">
          <VBox>
            Nested Center BOX
          </VBox>
        </VCenter>
      </VCenter>
    </div>
    <div>
      <VStack>
        <h3>Props</h3>
        <VStack space="var(--s-5)">
          <label>max</label>
          <input
            v-model="data.max"
            type="text"
          >
        </VStack>
        <VStack space="var(--s-5)">
          <label>gutters</label>
          <input
            v-model="data.gutters"
            type="text"
          >
        </VStack>
        <VStack space="var(--s-5)">
          <label>andText</label>
          <input
            v-model="data.andText"
            type="checkbox"
          >
        </VStack>
        <VStack space="var(--s-5)">
          <label>intrinsic</label>
          <input
            v-model="data.intrinsic"
            type="checkbox"
          >
        </VStack>
        <h3>Source</h3>
        <VStack space="var(--s-5)">
          <a href="https://github.com/kbtaniguchi/vue3-every-layout/blob/main/src/components/layouts/VCenter.vue">
            this component source
          </a>
          <a href="https://github.com/kbtaniguchi/vue3-every-layout/blob/main/src/pages/layout-primitives/VCenterPage.vue">
            this page source
          </a>
        </VStack>
      </vstack>
    </div>
  </VSidebar>
</template>

<style module>
</style>
