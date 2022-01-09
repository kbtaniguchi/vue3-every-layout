<script setup lang="ts">
import { reactive } from 'vue'

import VBox from '@/components/layouts/VBox.vue'

import VTextField from '@/components/parts/VTextField.vue'
import LayoutPrimitiveSampleTemplate from '@/pages/layout-primitives/template/LayoutPrimitiveSampleTemplate.vue'

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
      <VTextField
        v-model="data.padding"
        label="padding"
      />
      <VTextField
        v-model="data.borderWidth"
        label="borderWidth"
      />
      <VTextField
        v-model="data.borderColor"
        label="borderColor"
      />
      <VTextField
        v-model="data.backgroundColor"
        label="padding"
      />
    </template>
  </LayoutPrimitiveSampleTemplate>
</template>

<style module>
</style>
