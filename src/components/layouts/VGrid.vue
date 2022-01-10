<script setup lang="ts">
withDefaults(defineProps<{
  min?: string;
  space?: string;
}>(), {
  min: 'calc(var(--measure) / 3)',
  space: 'var(--s0)'
})
</script>

<template>
  <div :class="$style.grid">
    <slot />
  </div>
</template>

<style module>
.grid {
  display: grid;
  grid-gap: v-bind(space);
  grid-template-columns: repeat(auto-fit, minmax(min(v-bind(min), 100%), 1fr));
}
</style>
