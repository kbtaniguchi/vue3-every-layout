<script setup lang="ts">
import { reactive } from 'vue'
import VBox from '@/components/layouts/VBox.vue'
import LayoutPrimitiveSampleTemplate from '@/pages/layout-primitives/template/LayoutPrimitiveSampleTemplate.vue'
import VField from '@/components/parts/VField.vue'
import VSidebar from '@/components/layouts/VSidebar.vue'
import VStack from '@/components/layouts/VStack.vue'

const data = reactive<{
  side: 'left' | 'right';
  sideWidth: string;
  contentMin: string;
  space: string;
  noStretch: boolean;
}>({
  side: 'left',
  sideWidth: 'auto',
  contentMin: '50%',
  space: 'var(--s0)',
  noStretch: false
})
</script>

<template>
  <LayoutPrimitiveSampleTemplate component-name="VSidebar">
    <template #usage>
      <VSidebar
        class="with-outline"
        :side="data.side"
        :side-width="data.sideWidth"
        :content-min="data.contentMin"
        :space="data.space"
        :no-stretch="data.noStretch"
      >
        <VBox>
          Side Box
          <VStack space="var(--s-2)">
            <span>Stack item1</span>
            <span>Stack item2</span>
          </VStack>
        </VBox>
        <VBox>
          content Box
        </VBox>
      </VSidebar>
    </template>
    <template #props>
      <VField label="side">
        <input
          v-model="data.side"
          type="text"
        >
      </VField>
      <VField label="sideWidth">
        <input
          v-model="data.sideWidth"
          type="text"
        >
      </VField>
      <VField label="contentMin">
        <input
          v-model="data.contentMin"
          type="text"
        >
      </VField>
      <VField label="space">
        <input
          v-model="data.space"
          type="text"
        >
      </VField>
      <VField label="noStretch">
        <input
          v-model="data.noStretch"
          type="checkbox"
        >
      </VField>
    </template>
  </LayoutPrimitiveSampleTemplate>
</template>

<style module>
</style>
