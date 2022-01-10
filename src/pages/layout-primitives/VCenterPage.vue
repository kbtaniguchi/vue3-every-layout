<script setup lang="ts">
import { reactive } from 'vue'
import VCenter from '@/components/layouts/VCenter.vue'
import VBox from '@/components/layouts/VBox.vue'
import LayoutPrimitiveSampleTemplate from '@/pages/layout-primitives/template/LayoutPrimitiveSampleTemplate.vue'
import VField from '@/components/parts/VField.vue'

const data = reactive<{
  max: string;
  gutters: string;
  andText: boolean;
  intrinsic: boolean;
}>({
  max: 'var(--measure)',
  gutters: 'var(--s0)',
  andText: false,
  intrinsic: false
})
</script>

<template>
  <LayoutPrimitiveSampleTemplate component-name="VCenter">
    <template #usage>
      <VCenter
        class="with-outline"
        :max="data.max"
        :gutters="data.gutters"
        :and-text="data.andText"
        :intrinsic="data.intrinsic"
      >
        <p>
          あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほ
        </p>
        <VBox>
          BOX
        </VBox>
        <VCenter class="with-outline">
          <VBox>
            Nested Center BOX
          </VBox>
        </VCenter>
      </VCenter>
    </template>
    <template #props>
      <VField label="max">
        <input
          v-model="data.max"
          type="text"
        >
      </VField>
      <VField label="gutters">
        <input
          v-model="data.gutters"
          type="text"
        >
      </VField>
      <VField label="andText">
        <input
          v-model="data.andText"
          type="checkbox"
        >
      </VField>
      <VField label="intrinsic">
        <input
          v-model="data.intrinsic"
          type="checkbox"
        >
      </VField>
    </template>
  </LayoutPrimitiveSampleTemplate>
</template>

<style module>
</style>
