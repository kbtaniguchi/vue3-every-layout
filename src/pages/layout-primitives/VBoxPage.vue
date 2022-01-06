<script setup lang="ts">
import { reactive } from 'vue'

import VSidebar from '@/components/layouts/VSidebar.vue'
import VBox from '@/components/layouts/VBox.vue'
import VStack from '@/components/layouts/VStack.vue'

const data = reactive<{
  padding: string;
  borderWidth: string | 0;
  borderColor: string;
  backgroundColor: string;
}>({
  padding: 'var(--s0)',
  borderWidth: 'var(--border-thin)',
  borderColor: 'var(--gray0)',
  backgroundColor: 'inherit'
})
</script>

<template>
  <h2 class="page-title">
    Box
  </h2>
  <VSidebar
    side-width="50%"
    content-min="40%"
    space="var(--s1)"
  >
    <div>
      <VBox
        class="with-outline"
        :padding="data.padding"
        :border-width="data.borderWidth"
        :border-color="data.borderColor"
        :background-color="data.backgroundColor"
      >
        BOX
        <VBox class="with-outline">
          Nested BOX
        </VBox>
      </VBox>
    </div>
    <div>
      <VStack>
        <h3>Props</h3>
        <VStack space="var(--s-5)">
          <label>padding</label>
          <input
            v-model="data.padding"
            type="text"
          >
        </VStack>
        <VStack space="var(--s-5)">
          <label>borderWidth</label>
          <input
            v-model="data.borderWidth"
            type="text"
          >
        </VStack>
        <VStack space="var(--s-5)">
          <label>borderColor</label>
          <input
            v-model="data.borderColor"
            type="text"
          >
        </VStack>
        <VStack space="var(--s-5)">
          <label>backgroundColor</label>
          <input
            v-model="data.backgroundColor"
            type="text"
          >
        </VStack>
        <h3>Source</h3>
        <VStack space="var(--s-5)">
          <a href="https://github.com/kbtaniguchi/vue3-every-layout/blob/main/src/components/layouts/VBox.vue">
            this component source
          </a>
          <a href="https://github.com/kbtaniguchi/vue3-every-layout/blob/main/src/pages/layout-primitives/VBoxPage.vue">
            this page source
          </a>
        </VStack>
      </vstack>
    </div>
  </VSidebar>
</template>

<style module>
</style>
