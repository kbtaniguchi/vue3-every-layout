<script setup lang="ts">
import { getEasyUID, insertCSS } from '@/assets/style/script'
import { onMounted, useCssModule } from 'vue'

const componentId = getEasyUID()
const props = withDefaults(defineProps<{
  space?: string;
  label?: string;
}>(), {
  space: '',
  label: ''
})

onMounted(() => {
  if (!props.space) return
  const thisStyle = useCssModule()
  const space = `
  .${thisStyle.withIcon}[data-component-id="${componentId}"] > svg {
    margin-inline-end: ${props.space};
  }
  `
  insertCSS(space)
})
</script>

<template>
  <span
    :data-component-id="componentId"
    :class="[
      $style.withIcon,
      props.space ? $style.flex : ''
    ]"
    :role="props.label ? 'img' : ''"
    :aria-label="props.label"
  >
    <slot />
  </span>
</template>

<style module>
.withIcon svg {
  height: 0.75em;
  width: 0.75em;
}

.flex {
  display: inline-flex;
  align-items: baseline;
}
</style>
