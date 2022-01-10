<script setup lang="ts">
import { insertCSS } from '@/assets/style/script'
import { onMounted, useCssModule } from 'vue'
import { getEasyUID } from '@/assets/functions/utilities'

const componentId = getEasyUID()
const props = withDefaults(defineProps<{
  side?: 'left' | 'right';
  sideWidth?: string;
  contentMin?: string;
  space?: string;
  noStretch?: boolean;
}>(), {
  side: 'left',
  sideWidth: 'auto',
  contentMin: '50%',
  space: 'var(--s0)',
  noStretch: false
})

onMounted(() => {
  const thisStyle = useCssModule()
  const sidebar = `
  .${thisStyle.withSidebar}[data-component-id="${componentId}"] > ${props.side === 'left' ? ':first-child' : ':last-child'} {
    flex-basis: ${props.sideWidth};
    flex-grow: 1;
  }
  `
  const notSidebar = `
  .${thisStyle.withSidebar}[data-component-id="${componentId}"] > ${props.side === 'left' ? ':last-child' : ':first-child'} {
    flex-basis: 0;
    flex-grow: 999;
    min-width: ${props.contentMin};
  }
  `
  insertCSS(sidebar)
  insertCSS(notSidebar)
})
</script>

<template>
  <div
    :data-component-id="componentId"
    :class="$style.withSidebar"
    :style="{
      gap: props.space,
      alignItems: props.noStretch ? 'flex-start' : 'stretch',
    }"
  >
    <slot />
  </div>
</template>

<style module>
.withSidebar {
  display: flex;
  flex-wrap: wrap;
}
</style>
