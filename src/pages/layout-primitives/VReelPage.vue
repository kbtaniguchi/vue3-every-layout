<script setup lang="ts">
import { reactive } from 'vue'
import VBox from '@/components/layouts/VBox.vue'
import LayoutPrimitiveSampleTemplate from '@/pages/layout-primitives/template/LayoutPrimitiveSampleTemplate.vue'
import VField from '@/components/parts/VField.vue'
import VReel from '@/components/layouts/VReel.vue'

const data = reactive<{
  itemWidth: string;
  space: string;
  height: string;
  noBar: boolean;
}>({
  itemWidth: 'auto',
  space: 'var(--s0)',
  height: 'auto',
  noBar: false
})
</script>

<template>
  <LayoutPrimitiveSampleTemplate component-name="VReel">
    <template #usage>
      <VReel
        class="with-outline"
        :item-width="data.itemWidth"
        :space="data.space"
        :height="data.height"
        :no-bar="data.noBar"
      >
        <VBox
          v-for="n of 10"
          :key="n"
        >
          BOX {{ n }}
        </VBox>
      </VReel>
    </template>
    <template #props>
      <VField label="itemWidth">
        <input
          v-model="data.itemWidth"
          type="text"
        >
      </VField>
      <VField label="space">
        <input
          v-model="data.space"
          type="text"
        >
      </VField>
      <VField label="height">
        <input
          v-model="data.height"
          type="text"
        >
      </VField>
      <VField label="noBar">
        <input
          v-model="data.noBar"
          type="checkbox"
        >
      </VField>
    </template>
  </LayoutPrimitiveSampleTemplate>
</template>

<style module>
</style>
