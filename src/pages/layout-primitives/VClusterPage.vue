<script setup lang="ts">
import { reactive } from 'vue'
import VCluster from '@/components/layouts/VCluster.vue'
import VBox from '@/components/layouts/VBox.vue'
import LayoutPrimitiveSampleTemplate from '@/pages/layout-primitives/template/LayoutPrimitiveSampleTemplate.vue'
import VField from '@/components/parts/VField.vue'

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
  <LayoutPrimitiveSampleTemplate component-name="VCluster">
    <template #usage>
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
    </template>
    <template #props>
      <VField label="justify">
        <template #hint>
          <a
            href="https://developer.mozilla.org/ja/docs/Web/CSS/justify-content"
            target="_blank"
          >
            MDN: CSS - justify-content
          </a>
        </template>
        <input
          v-model="data.justify"
          type="text"
        >
      </VField>
      <VField label="align">
        <template #hint>
          <a
            href="https://developer.mozilla.org/ja/docs/Web/CSS/align-items"
            target="_blank"
          >
            MDN: CSS - align-items
          </a>
        </template>
        <input
          v-model="data.align"
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
