<script setup lang="ts">
import { insertCSS, getEasyUID } from '@/assets/style/script'
import { onMounted, useCssModule } from 'vue'

const componentId = getEasyUID()
const props = withDefaults(defineProps<{
  centered?: string,
  space?: string,
  minHeight?: string,
  noPad?: boolean
}>(), {
  centered: 'h1',
  space: 'var(--s0)',
  minHeight: '100vh',
  noPad: false
})

onMounted(() => {
  const thisStyle = useCssModule()
  const baseMargin = `
  .${thisStyle.cover}[data-component-id="${componentId}"] > * {
    margin-top: ${props.space};
    margin-bottom: ${props.space};
  }
  `
  const adjustFirstChildMargin = `
  .${thisStyle.cover}[data-component-id="${componentId}"] > :first-child:not(${props.centered}) {
    margin-top: 0;
  }
  `
  const adjustLastChildMargin = `
  .${thisStyle.cover}[data-component-id="${componentId}"] > :last-child:not(${props.centered}) {
    margin-bottom: 0;
  }
  `
  const adjustTargetMargin = `
  .${thisStyle.cover}[data-component-id="${componentId}"] > ${props.centered} {
    margin-top: auto;
    margin-bottom: auto;
  }
  `
  insertCSS(baseMargin)
  insertCSS(adjustFirstChildMargin)
  insertCSS(adjustLastChildMargin)
  insertCSS(adjustTargetMargin)
})
</script>

<template>
  <div
    :data-component-id="componentId"
    :class="$style.cover"
    :style="{
      minHeight: props.minHeight,
      padding: props.noPad ? 0 : props.space
    }"
  >
    <slot />
  </div>
</template>

<style module>
.cover {
  display: flex;
  flex-direction: column;
}
</style>
