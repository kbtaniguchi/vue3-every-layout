<script setup lang="ts">
import { reactive } from 'vue'
import VStack from '@/components/layouts/VStack.vue'
import VFrame from '@/components/layouts/VFrame.vue'
import LayoutPrimitiveSampleTemplate from '@/pages/layout-primitives/template/LayoutPrimitiveSampleTemplate.vue'
import VField from '@/components/parts/VField.vue'

const data = reactive<{
  ratio: string;
}>({
  ratio: '16:9'
})
</script>

<template>
  <LayoutPrimitiveSampleTemplate component-name="VFrame">
    <template #usage>
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
    </template>
    <template #props>
      <VField label="ratio">
        <input
          v-model="data.ratio"
          type="text"
        >
      </VField>
    </template>
  </LayoutPrimitiveSampleTemplate>
</template>

<style module>
</style>
