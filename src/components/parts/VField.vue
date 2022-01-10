<script setup lang="ts">
import VStack from '@/components/layouts/VStack.vue'

defineProps<{
  label: string;
}>()
</script>

<template>
  <VStack space="var(--s-5)">
    <label>
      <VStack space="var(--s-5)">
        <span
          v-if="label"
          :class="$style.label"
        >
          {{ label }}
        </span>
        <span :class="$style.hintMessage">
          <slot name="hint" />
        </span>
        <slot />
      </VStack>
    </label>
  </VStack>
</template>

<style module>
.label {
  font-style: italic;
}

.hintMessage {
  font-size: 0.9em
}
</style>
