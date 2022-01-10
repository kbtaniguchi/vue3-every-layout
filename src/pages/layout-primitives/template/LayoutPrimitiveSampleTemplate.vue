<script setup lang="ts">
import VSidebar from '@/components/layouts/VSidebar.vue'
import VStack from '@/components/layouts/VStack.vue'

const props = defineProps<{
  componentName: string;
}>()
</script>

<template>
  <h2 :class="$style.pageTitle">
    {{ componentName }}
  </h2>
  <VSidebar
    side-width="50%"
    content-min="40%"
    space="var(--s1)"
  >
    <div>
      <slot name="usage" />
    </div>
    <div :class="$style.inputField">
      <VStack>
        <h3>Props</h3>
        <slot name="props" />
        <h3>Source</h3>
        <VStack space="var(--s-5)">
          <a :href="`https://github.com/kbtaniguchi/vue3-every-layout/blob/main/src/components/layouts/${props.componentName}.vue`">
            this component source
          </a>
          <a :href="`https://github.com/kbtaniguchi/vue3-every-layout/blob/main/src/pages/layout-primitives/${props.componentName}Page.vue`">
            this page source
          </a>
        </VStack>
      </VStack>
    </div>
  </VSidebar>
</template>

<style module>
.pageTitle {
  padding-bottom: var(--s0)
}

.inputField {
  min-height: 80vh
}
</style>
