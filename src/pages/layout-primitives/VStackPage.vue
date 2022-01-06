<script setup lang="ts">
import { reactive } from 'vue'

import VStack from '@/components/layouts/VStack.vue'
import VBox from '@/components/layouts/VBox.vue'
import VSidebar from '@/components/layouts/VSidebar.vue'

const data = reactive<{
  space: string;
  recursive: boolean;
  splitAfter: number;
}>({
  space: 'var(--s0)',
  recursive: false,
  splitAfter: 0
})
</script>

<template>
  <h2 class="page-title">
    Stack
  </h2>
  <VSidebar
    side-width="50%"
    content-min="40%"
    space="var(--s1)"
  >
    <div>
      <VStack
        class="with-outline"
        :space="data.space"
        :recursive="data.recursive"
        :split-after="data.splitAfter"
      >
        <VBox>BOX</VBox>
        <VBox>BOX</VBox>
        <VBox>BOX</VBox>
        <VBox>
          <VBox>Nested BOX</VBox>
          <VBox>Nested BOX</VBox>
        </VBox>
        <VStack class="with-outline">
          <VBox>Nested Stack BOX</VBox>
          <VBox>Nested Stack BOX</VBox>
        </VStack>
      </VStack>
    </div>
    <div :class="$style.inputField">
      <VStack>
        <h3>Props</h3>
        <VStack space="var(--s-5)">
          <label>space</label>
          <input
            v-model="data.space"
            type="text"
          >
        </VStack>
        <VStack space="var(--s-5)">
          <label>recursive</label>
          <input
            v-model="data.recursive"
            type="checkbox"
          >
        </VStack>
        <VStack space="var(--s-5)">
          <label>splitAfter</label>
          <input
            v-model="data.splitAfter"
            type="number"
          >
        </VStack>
        <h3>Source</h3>
        <VStack space="var(--s-5)">
          <a href="https://github.com/kbtaniguchi/vue3-every-layout/blob/main/src/components/layouts/VStack.vue">
            this component source
          </a>
          <a href="https://github.com/kbtaniguchi/vue3-every-layout/blob/main/src/pages/layout-primitives/VStackPage.vue">
            this page source
          </a>
        </VStack>
      </VStack>
    </div>
  </VSidebar>
</template>

<style module>
.inputField {
  min-height: 80vh
}
</style>
