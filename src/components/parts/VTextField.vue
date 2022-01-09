<script setup lang="ts">
import { computed } from 'vue'
import VStack from '@/components/layouts/VStack.vue'

const props = withDefaults(defineProps<{
  label?: string;
  modelValue?: string;
}>(), {
  label: '',
  modelValue: ''
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const value = computed({
  get: () => props.modelValue,
  set: val => {
    emit('update:modelValue', val)
  }
})
</script>

<template>
  <VStack space="var(--s-5)">
    <label v-if="label">{{ label }}</label>
    <input
      v-model="value"
      type="text"
    >
  </VStack>
</template>

<style module>
</style>
