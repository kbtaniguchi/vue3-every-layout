<script setup lang="ts">
const props = withDefaults(defineProps<{
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
  padding: v-bind("props.padding");
  border-width: v-bind("props.borderWidth");
  border-color: v-bind("props.borderColor");
  background-color: v-bind("props.backgroundColor");
}
</style>
