<script setup lang="ts">
import { reactive } from 'vue'

import VSidebar from '@/components/layouts/VSidebar.vue'
import VStack from '@/components/layouts/VStack.vue'
import VCluster from '@/components/layouts/VCluster.vue'
import VBox from '@/components/layouts/VBox.vue'

const data = reactive<{
  justify?: string;
  align?: string;
  space?: string;
}>({
  justify: 'flex-start',
  align: 'flex-start',
  space: 'var(--s0)'
})
</script>

<template>
  <h2 class="page-title">
    Cluster
  </h2>
  <VSidebar
    side-width="50%"
    content-min="40%"
    space="var(--s1)"
  >
    <div>
      <VCluster
        class="with-outline"
        :justify="data.justify"
        :align="data.align"
        :space="data.space"
      >
        <p>あいうえお</p>
        <VBox>BOX</VBox>
        <VBox>BOX</VBox>
        <VCluster class="with-outline">
          <p>あいうえお</p>
          <VBox>Nested Cluster BOX</VBox>
        </VCluster>
      </VCluster>
    </div>
    <div>
      <VStack>
        <h3>Props</h3>
        <VStack space="var(--s-5)">
          <label>justify
            <a
              href="https://developer.mozilla.org/ja/docs/Web/CSS/justify-content"
              target="_blank"
            >
              ※
            </a>
          </label>
          <input
            v-model="data.justify"
            type="text"
          >
        </VStack>
        <VStack space="var(--s-5)">
          <label>align
            <a
              href="https://developer.mozilla.org/ja/docs/Web/CSS/align-items"
              target="_blank"
            >
              ※
            </a>
          </label>
          <input
            v-model="data.align"
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
        <h3>Source</h3>
        <VStack space="var(--s-5)">
          <a href="https://github.com/kbtaniguchi/vue3-every-layout/blob/main/src/components/layouts/VCluster.vue">
            this component source
          </a>
          <a href="https://github.com/kbtaniguchi/vue3-every-layout/blob/main/src/pages/layout-primitives/VClusterPage.vue">
            this page source
          </a>
        </VStack>
      </vstack>
    </div>
  </VSidebar>
</template>

<style module>

</style>
