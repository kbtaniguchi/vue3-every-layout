<script setup lang="ts">
const props = withDefaults(defineProps<{
  min?: string;
  space?: string;
}>(), {
  min: 'calc(var(--measure) / 3)',
  space: 'var(--s0)'
});
</script>

<template>
  <div :class="$style.grid"
       :style="{
  gridGap: props.space,
  gridTemplateColumns: `repeat(auto-fit, minmax(min(${props.min}, 100%), 1fr))`
}">
    <slot/>
  </div>
</template>

<style module>
.grid {
  display: grid;
}
</style>