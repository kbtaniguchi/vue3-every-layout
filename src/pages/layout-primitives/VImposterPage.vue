<script setup lang="ts">
import { reactive } from 'vue'
import LayoutPrimitiveSampleTemplate from '@/pages/layout-primitives/template/LayoutPrimitiveSampleTemplate.vue'
import VField from '@/components/parts/VField.vue'
import VImposter from '@/components/layouts/VImposter.vue'
import VBox from '@/components/layouts/VBox.vue'

const data = reactive<{
  breakout: boolean;
  margin: string;
  fixed: boolean;
}>({
  breakout: false,
  margin: '0px',
  fixed: false
})
</script>

<template>
  <LayoutPrimitiveSampleTemplate component-name="VImposter">
    <template #usage>
      <div :class="$style.位置指定コンテナ">
        <h3>位置指定コンテナ</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </p>
        <VImposter
          class="with-outline"
          :breakout="data.breakout"
          :margin="data.margin"
          :fixed="data.fixed"
        >
          <VBox background-color="white">
            Box in Imposter, Box in Imposter, Box in Imposter, Box in Imposter, Box in Imposter,
            Box in Imposter, Box in Imposter, Box in Imposter, Box in Imposter, Box in Imposter,
            Box in Imposter, Box in Imposter, Box in Imposter, Box in Imposter, Box in Imposter,
          </VBox>
        </VImposter>
      </div>
    </template>
    <template #props>
      <VField label="breakout">
        <input
          v-model="data.breakout"
          type="checkbox"
        >
      </VField>
      <VField label="margin">
        <input
          v-model="data.margin"
          type="text"
        >
      </VField>
      <VField label="fixed">
        <input
          v-model="data.fixed"
          type="checkbox"
        >
      </VField>
    </template>
  </LayoutPrimitiveSampleTemplate>
</template>

<style module>
.位置指定コンテナ {
  background-color: var(--attentive-color-2);
  position: relative;
}
</style>
