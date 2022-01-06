<script setup lang="ts">
const props = withDefaults(defineProps<{
  centered?: string,
  space?: string,
  minHeight?: string,
  noPad?: boolean
}>(), {
  centered: 'h1',
  space: 'var(--s0)',
  minHeight: '100vh',
  noPad: false
})
</script>

<template>
  <div
    :class="[
      $style.cover,
      $style[`${props.centered}-centered`]
    ]"
  >
    <slot />
  </div>
</template>

<style module>
.cover {
  display: flex;
  flex-direction: column;
  min-height: v-bind("props.minHeight");
  padding: v-bind("props.noPad ? 0 : props.space");
}

.cover > * {
  margin-top: v-bind("props.space");
  margin-bottom: v-bind("props.space");
}

.h1-centered > :first-child:not(h1),
.h2-centered > :first-child:not(h2),
.h3-centered > :first-child:not(h3),
.div-centered > :first-child:not(div) {
  margin-top: 0;
}

.h1-centered > :last-child:not(h1),
.h2-centered > :last-child:not(h2),
.h3-centered > :last-child:not(h3),
.div-centered > :last-child:not(div) {
  margin-bottom: 0;
}

.h1-centered > h1,
.h2-centered > h2,
.h3-centered > h3,
.div-centered > div {
  margin-top: auto;
  margin-bottom: auto;
}
</style>
