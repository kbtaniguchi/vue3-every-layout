<script setup lang="ts">
import { getEasyUID, insertCSS } from '@/assets/style/script'
import { onMounted, useCssModule } from 'vue'

const componentId = getEasyUID()
const props = withDefaults(defineProps<{
  threshold?: string;
  space?: string;
  limit?: number;
}>(), {
  threshold: 'var(--measure)',
  space: 'var(--s0)',
  limit: 4
})

onMounted(() => {
  const style = useCssModule()
  const containerSwitcher = `
    .${style.switcher}[data-component-id="${componentId}"] > * {
      flex-grow: 1;
      flex-basis: calc((${props.threshold} - 100%) * 999);
    }
  `
  const quantitySwitcher = `
    .${style.switcher}[data-component-id="${componentId}"] > :nth-last-child(n+${props.limit + 1}),
    .${style.switcher}[data-component-id="${componentId}"] > :nth-last-child(n+${props.limit + 1}) ~ * {
      flex-basis: 100%;
    }
  `
  insertCSS(containerSwitcher)
  insertCSS(quantitySwitcher)
})
</script>

<template>
  <div
    :data-component-id="componentId"
    :class="$style.switcher"
    :style="{
      gap: props.space
    }"
  >
    <slot />
  </div>
</template>

<style module>
.switcher {
  display: flex;
  flex-wrap: wrap;
}
</style>
