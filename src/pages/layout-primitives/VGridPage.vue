<script setup lang="ts">
import { reactive } from 'vue'
import VBox from '@/components/layouts/VBox.vue'
import LayoutPrimitiveSampleTemplate from '@/pages/layout-primitives/template/LayoutPrimitiveSampleTemplate.vue'
import VField from '@/components/parts/VField.vue'
import VGrid from '@/components/layouts/VGrid.vue'

const data = reactive<{
  min: string;
  space: string;
}>({
  min: 'calc(var(--measure) / 3)',
  space: 'var(--s0)'
})
</script>

<template>
  <LayoutPrimitiveSampleTemplate component-name="VGrid">
    <template #usage>
      <VGrid
        class="with-outline"
        :min="data.min"
        :space="data.space"
      >
        <VBox>
          BOX
        </VBox>
        <VBox>
          BOX
        </VBox>
        <VBox>
          BOX
        </VBox>
      </VGrid>
    </template>
    <template #props>
      <VField label="min">
        <input
          v-model="data.min"
          type="text"
        >
      </VField>
      <VField label="space">
        <input
          v-model="data.space"
          type="text"
        >
      </VField>
    </template>
  </LayoutPrimitiveSampleTemplate>
</template>

<style module>
</style>
