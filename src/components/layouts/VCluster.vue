<script setup lang="ts">
// refs. https://developer.mozilla.org/ja/docs/Web/CSS/justify-content
// refs. https://developer.mozilla.org/ja/docs/Web/CSS/align-items
withDefaults(defineProps<{
  justify?: string;
  align?: string;
  space?: string;
}>(), {
  justify: 'flex-start',
  align: 'flex-start',
  space: 'var(--s0)'
})
</script>

<template>
  <div :class="$style.cluster">
    <slot />
  </div>
</template>

<style module>
.cluster {
  display: flex;
  flex-wrap: wrap;

  justify-content: v-bind(justify);
  align-items: v-bind(align);
  gap: v-bind(space);
}
</style>
