<script setup lang="ts">
const props = withDefaults(defineProps<{
  max?: string;
  gutters?: string;
  andText?: boolean;
  intrinsic?: boolean;
}>(), {
  max: 'var(--measure)',
  gutters: 'var(--s0)',
  andText: false,
  intrinsic: false
});
</script>

<template>
  <div :class="[
    $style.center,
    props.intrinsic ? $style.intrinsic : '',
    props.andText ? $style.andText : ''
  ]"
       :style="{
    maxWidth: props.max,
    paddingLeft: props.gutters,
    paddingRight: props.gutters
  }">
    <slot/>
  </div>
</template>

<style module>
.center {
  box-sizing: content-box;
  margin-left: auto;
  margin-right: auto;
}

.intrinsic {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.andText {
  text-align: center;
}
</style>