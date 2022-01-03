<script setup lang="ts">
import VStack from "@/components/layouts/VStack.vue";
import {range} from "@/assets/functions/utilities";

const scaleNumbers = [...range(-5, 5)];
</script>

<template>
  <VStack>
    <h2>Modular Scale</h2>
    <h3>ex1. Applied to Text's font-size</h3>
    <VStack>
      <div v-for="scaleNumber in scaleNumbers" key="scaleNumber"
           :style="{fontSize: `var(--s${scaleNumber})`}">
        あいうえお
      </div>
    </VStack>
    <h3>ex2. Applied to Box's padding</h3>
    <VStack :class="$style.boxPaddingScale">
      <div v-for="scaleNumber in scaleNumbers" key="scaleNumber"
           :style="{padding: `var(--s${scaleNumber})`}">
        あ
      </div>
    </VStack>
  </VStack>
</template>

<style module>
.boxPaddingScale div {
  width: min-content;
  border-style: solid;
}
</style>