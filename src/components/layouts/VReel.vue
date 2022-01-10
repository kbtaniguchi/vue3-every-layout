<script setup lang="ts">
import { insertCSS } from '@/assets/style/script'
import { onMounted, useCssModule } from 'vue'
import { getEasyUID } from '@/assets/functions/utilities'

const componentId = getEasyUID()
const props = withDefaults(defineProps<{
  itemWidth?: string;
  space?: string;
  height?: string;
  noBar?: boolean;
}>(), {
  itemWidth: 'auto',
  space: 'var(--s0)',
  height: 'auto',
  noBar: false
})

onMounted(() => {
  const thisStyle = useCssModule()
  const item = `
  .${thisStyle.reel}[data-component-id="${componentId}"] > * {
    margin: ${props.space};
    margin-right: 0;
    flex: 0 0 ${props.itemWidth};
  }
  `
  const gap = `
  .${thisStyle.reel}[data-component-id="${componentId}"] > * + * {
    margin-left: ${props.space};
  }
  `
  const lastItemSpace = `
  .${thisStyle.reel}[data-component-id="${componentId}"]::after {
    content: '';
    flex-shrink: 0;
    flex-basis: ${props.space};
  }
  `
  insertCSS(item)
  insertCSS(gap)
  insertCSS(lastItemSpace)
})
</script>

<template>
  <div
    :data-component-id="componentId"
    :class="[
      $style.reel,
      props.noBar ? $style.noBar : ''
    ]"
    :style="{
      height: props.height
    }"
  >
    <slot />
  </div>
</template>

<style module>
.reel {
  display: flex;
  overflow-x: auto;
  overflow-y: hidden;
}

.reel > img {
  height: 100%;
  flex-basis: auto;
  width: auto;
}

.reel.noBar::-webkit-scrollbar {
  display: none;
}
</style>
