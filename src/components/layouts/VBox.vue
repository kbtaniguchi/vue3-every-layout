<script setup lang="ts">
withDefaults(defineProps<{
  padding?: string;
  borderWidth?: string | 0;
  borderColor?: string;
  backgroundColor?: string;
}>(), {
  padding: 'var(--s0)',
  borderWidth: 'var(--border-thin)',
  borderColor: 'var(--gray0)',
  backgroundColor: 'inherit'
})
</script>

<template>
  <div :class="$style.box">
    <slot />
  </div>
</template>

<style module>
.box {
  --border-thin: 1px;
  --border-bold: 2px;

  border-style: solid;
  padding: v-bind(padding);
  border-width: v-bind(borderWidth);
  border-color: v-bind(borderColor);
  background-color: v-bind(backgroundColor);
}
</style>
