<script setup lang="ts">
import {insertCSS, getEasyUID} from "@/assets/style/script";
import {onMounted, useCssModule} from "vue";

const componentId = getEasyUID();
const props = withDefaults(defineProps<{
  space?: string;
  recursive?: boolean;
  splitAfter?: number;
}>(), {
  space: 'var(--s0)',
  recursive: false,
  splitAfter: 0
});

onMounted(() => {
  const thisStyle = useCssModule();
  const space = `
  .${thisStyle.stack}[data-component-id="${componentId}"] ${props.recursive ? '' : '>'} * + * {
    margin-top: ${props.space};
  }
  `;
  insertCSS(space);

  if (!props.splitAfter) return;
  const adjustHeight = `
  .${thisStyle.stack}[data-component-id="${componentId}"]:only-child {
    height: 100%
  }
  `;
  const split = `
  .${thisStyle.stack}[data-component-id="${componentId}"] > :nth-child(${props.splitAfter}) {
    margin-bottom: auto;
  }
  `;
  insertCSS(adjustHeight);
  insertCSS(split);
});
</script>

<template>
  <div :data-component-id="componentId"
       :class="$style.stack">
    <slot/>
  </div>
</template>

<style module>
.stack {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
</style>