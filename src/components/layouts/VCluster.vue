<script setup lang="ts">
const props = withDefaults(defineProps<{
  justify?: string; // refs. https://developer.mozilla.org/ja/docs/Web/CSS/justify-content
  align?: string; // refs. https://developer.mozilla.org/ja/docs/Web/CSS/align-items
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

  justify-content: v-bind("props.justify");
  align-items: v-bind("props.align");
  gap: v-bind("props.space");
}
</style>
