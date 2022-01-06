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
})
</script>

<template>
  <div
    :class="[
      $style.center,
      props.intrinsic ? $style.intrinsic : '',
      props.andText ? $style.andText : ''
    ]"
  >
    <slot />
  </div>
</template>

<style module>
.center {
  box-sizing: content-box;
  margin-left: auto;
  margin-right: auto;

  max-width: v-bind("props.max");
  padding-left: v-bind("props.gutters");
  padding-right: v-bind("props.gutters");
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
