<script setup lang="ts">
const props = withDefaults(defineProps<{
  breakout?: boolean;
  margin?: string;
  fixed?: boolean;
}>(), {
  breakout: false,
  margin: '0px',
  fixed: false
})
</script>

<template>
  <div
    :class="$style.imposter"
    :style="{
      ...props.breakout ? {} : {
        maxWidth: `calc(100% - (${props.margin} * 2))`,
        maxHeight: `calc(100% - (${props.margin} * 2))`,
        overflow: 'auto'
      },
      ...props.fixed ? {
        position: 'fixed'
      } : {}
    }"
  >
    <slot />
  </div>
</template>

<style module>
.imposter {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
