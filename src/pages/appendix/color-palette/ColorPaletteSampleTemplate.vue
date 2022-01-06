<script setup lang="ts">
import { range } from '@/assets/functions/utilities'
import VGrid from '@/components/layouts/VGrid.vue'
import VBox from '@/components/layouts/VBox.vue'

const props = defineProps<{
  title: string;
  cssVarName: string;
}>()

const scaleNumbers = [...range(-3, 3)]
</script>

<template>
  <h3>{{ props.title }}</h3>
  <h4>ex1. Applied to Button's back-ground-color</h4>
  <VGrid
    min="5rem"
    :class="$style.textWhite"
  >
    <button
      v-for="scaleNumber in scaleNumbers"
      :key="scaleNumber"
      :style="{backgroundColor: `var(${props.cssVarName}${scaleNumber})`}"
    >
      ボタン
    </button>
  </VGrid>
  <h4>ex2. Darkest text on Lightest background</h4>
  <VBox :style="{backgroundColor: `var(${props.cssVarName}-3)`}">
    <p :style="{color: `var(${props.cssVarName}3)`}">
      あいうえお
    </p>
  </VBox>
</template>

<style module>
.textWhite * {
  color: var(--white)
}
</style>
