<script setup lang="ts">
import { reactive } from 'vue'

import VStack from '@/components/layouts/VStack.vue'
import VBox from '@/components/layouts/VBox.vue'
import LayoutPrimitiveSampleTemplate from '@/pages/layout-primitives/template/LayoutPrimitiveSampleTemplate.vue'
import VField from '@/components/parts/VField.vue'

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
  <LayoutPrimitiveSampleTemplate component-name="VStack">
    <template #usage>
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
    </template>
    <template #props>
      <VField label="space">
        <input
          v-model="data.space"
          type="text"
        >
      </VField>
      <VField label="recursive">
        <input
          v-model="data.recursive"
          type="checkbox"
        >
      </VField>
      <VField label="splitAfter">
        <input
          v-model="data.splitAfter"
          type="number"
        >
      </VField>
    </template>
  </LayoutPrimitiveSampleTemplate>
</template>

<style module>
</style>
