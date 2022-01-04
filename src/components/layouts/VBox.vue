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
  backgroundColor: 'inherit',
});
</script>

<template>
  <div :class="$style.box"
       :style="{
    padding: props.padding,
    borderWidth: props.borderWidth,
    borderColor: props.borderColor,
    backgroundColor: props.backgroundColor
  }">
    <slot/>
  </div>
</template>

<style module>
.box {
  --border-thin: 1px;
  --border-bold: 2px;

  border-style: solid;
}
</style>