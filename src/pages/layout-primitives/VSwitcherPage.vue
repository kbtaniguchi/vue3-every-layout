<script setup lang="ts">
import { reactive } from 'vue'
import LayoutPrimitiveSampleTemplate from '@/pages/layout-primitives/template/LayoutPrimitiveSampleTemplate.vue'
import VField from '@/components/parts/VField.vue'
import VSwitcher from '@/components/layouts/VSwitcher.vue'
import VBox from '@/components/layouts/VBox.vue'

const data = reactive<{
  threshold: string;
  space: string;
  limit: number;
}>({
  threshold: 'var(--measure)',
  space: 'var(--s0)',
  limit: 4
})
</script>

<template>
  <LayoutPrimitiveSampleTemplate component-name="VSwitcher">
    <template #usage>
      <VSwitcher
        class="with-outline"
        :threshold="data.threshold"
        :space="data.space"
        :limit="data.limit"
      >
        <VBox>Box</VBox>
        <VBox>Box</VBox>
        <VBox>Box</VBox>
      </VSwitcher>
    </template>
    <template #props>
      <VField label="threshold">
        <input
          v-model="data.threshold"
          type="text"
        >
      </VField>
      <VField label="space">
        <input
          v-model="data.space"
          type="text"
        >
      </VField>
      <VField label="limit">
        <input
          v-model="data.limit"
          type="number"
        >
      </VField>
    </template>
  </LayoutPrimitiveSampleTemplate>
</template>

<style module>
</style>
