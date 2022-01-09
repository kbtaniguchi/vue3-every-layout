<script setup lang="ts">
import { reactive } from 'vue'

import VSidebar from '@/components/layouts/VSidebar.vue'
import VStack from '@/components/layouts/VStack.vue'
import VFrame from '@/components/layouts/VFrame.vue'

const data = reactive<{
  ratio: string;
}>({
  ratio: '16:9'
})
</script>

<template>
  <h2 class="page-title">
    Frame
  </h2>
  <VSidebar
    side-width="50%"
    content-min="40%"
    space="var(--s1)"
  >
    <div>
      <VStack>
        <p>With frame</p>
        <VFrame
          class="with-outline"
          :ratio="data.ratio"
        >
          <img
            src="@/assets/img/alberta-gf9d16eebb_1920.jpg"
            alt="alberta picture"
          >
        </VFrame>
        <p>No frame</p>
        <img
          src="@/assets/img/alberta-gf9d16eebb_1920.jpg"
          alt="alberta picture"
        >
      </VStack>
    </div>
    <div>
      <VStack>
        <h3>Props</h3>
        <VStack space="var(--s-5)">
          <label>ratio</label>
          <input
            v-model="data.ratio"
            type="text"
          >
        </VStack>
        <h3>Source</h3>
        <VStack space="var(--s-5)">
          <a href="https://github.com/kbtaniguchi/vue3-every-layout/blob/main/src/components/layouts/VFrame.vue">
            this component source
          </a>
          <a href="https://github.com/kbtaniguchi/vue3-every-layout/blob/main/src/pages/layout-primitives/VFramePage.vue">
            this page source
          </a>
        </VStack>
      </vstack>
    </div>
  </VSidebar>
</template>

<style module>

</style>
