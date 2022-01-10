<script setup lang="ts">
import { reactive } from 'vue'
import VBox from '@/components/layouts/VBox.vue'
import LayoutPrimitiveSampleTemplate from '@/pages/layout-primitives/template/LayoutPrimitiveSampleTemplate.vue'
import VField from '@/components/parts/VField.vue'

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
  <LayoutPrimitiveSampleTemplate component-name="VBox">
    <template #usage>
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
    </template>
    <template #props>
      <VField label="padding">
        <input
          v-model="data.padding"
          type="text"
        >
      </VField>
      <VField label="borderWidth">
        <input
          v-model="data.borderWidth"
          type="text"
        >
      </VField>
      <VField label="borderColor">
        <input
          v-model="data.borderColor"
          type="text"
        >
      </VField>
      <VField label="backgroundColor">
        <input
          v-model="data.backgroundColor"
          type="text"
        >
      </VField>
    </template>
  </LayoutPrimitiveSampleTemplate>
</template>

<style module>
</style>
