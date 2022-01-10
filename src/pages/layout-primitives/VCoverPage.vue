<script setup lang="ts">
import { reactive } from 'vue'
import VCover from '@/components/layouts/VCover.vue'
import LayoutPrimitiveSampleTemplate from '@/pages/layout-primitives/template/LayoutPrimitiveSampleTemplate.vue'
import VField from '@/components/parts/VField.vue'

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
  <LayoutPrimitiveSampleTemplate component-name="VCover">
    <template #usage>
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
    </template>
    <template #props>
      <VField label="centered">
        <input
          v-model="data.centered"
          type="text"
        >
      </VField>
      <VField label="space">
        <input
          v-model="data.space"
          type="text"
        >
      </VField>
      <VField label="minHeight">
        <input
          v-model="data.minHeight"
          type="text"
        >
      </VField>
      <VField label="noPad">
        <input
          v-model="data.noPad"
          type="checkbox"
        >
      </VField>
    </template>
  </LayoutPrimitiveSampleTemplate>
</template>

<style module>
</style>
