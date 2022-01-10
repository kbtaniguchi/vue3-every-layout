<script setup lang="ts">
import { reactive } from 'vue'
import LayoutPrimitiveSampleTemplate from '@/pages/layout-primitives/template/LayoutPrimitiveSampleTemplate.vue'
import VField from '@/components/parts/VField.vue'
import VIcon from '@/components/layouts/VIcon.vue'
import VCluster from '@/components/layouts/VCluster.vue'

const data = reactive<{
  space: string;
  label: string;
}>({
  space: '',
  label: ''
})
</script>

<template>
  <LayoutPrimitiveSampleTemplate component-name="VIcon">
    <template #usage>
      <VCluster>
        <button>
          <VIcon
            class="with-outline"
            :space="data.space"
            :label="data.label"
          >
            <svg>
              <use href="@/assets/style/icons.svg#cross" />
            </svg>
            with Button
          </VIcon>
        </button>
        <VIcon
          class="with-outline"
          :space="data.space"
          :label="data.label"
        >
          <svg>
            <use href="@/assets/style/icons.svg#hamburger" />
          </svg>
          Icon only
        </VIcon>
      </VCluster>
    </template>
    <template #props>
      <VField label="space">
        <input
          v-model="data.space"
          type="text"
        >
      </VField>
      <VField label="label">
        <input
          v-model="data.label"
          type="text"
        >
      </VField>
    </template>
  </LayoutPrimitiveSampleTemplate>
</template>

<style module>
</style>
