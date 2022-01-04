<script setup lang="ts">
import VStack from "@/components/layouts/VStack.vue";
import VBox from "@/components/layouts/VBox.vue";
import VSidebar from "@/components/layouts/VSidebar.vue";
import {reactive} from "vue";

const data = reactive<{
  space: string;
  recursive: boolean;
  splitAfter: number;
}>({
  space: 'var(--s0)',
  recursive: false,
  splitAfter: 0
});
</script>

<template>
  <h2 :class="$style.title">Stack</h2>
  <VSidebar side-width="50%"
            content-min="40%"
            space="var(--s1)">
    <div>
      <VStack class="with-outline"
              :space="data.space"
              :recursive="data.recursive"
              :split-after="data.splitAfter">
        <VBox>BOX</VBox>
        <VBox>BOX</VBox>
        <VBox>BOX</VBox>
        <VBox>
          <VBox>Nested BOX</VBox>
          <VBox>Nested BOX</VBox>
        </VBox>
        <VStack class="with-outline">
          <VBox>Nested Stack BOX</VBox>
          <VBox>Nested Stack BOX</VBox>
        </VStack>
      </VStack>
    </div>
    <div :class="$style.inputField">
      <VStack>
        <h3>Props</h3>
        <VStack space="var(--s-5)">
          <label>space</label>
          <input type="text" v-model="data.space"/>
        </VStack>
        <VStack space="var(--s-5)">
          <label>recursive</label>
          <input type="checkbox" v-model="data.recursive"/>
        </VStack>
        <VStack space="var(--s-5)">
          <label>splitAfter</label>
          <input type="number" v-model="data.splitAfter"/>
        </VStack>
        <a href="https://github.com/kbtaniguchi/vue3-every-layout/blob/main/src/pages/layout-primitives/StackPage.vue">
          source code link
        </a>
      </VStack>
    </div>
  </VSidebar>
</template>

<style module>
.title {
  padding-bottom: var(--s0)
}

.inputField {
  min-height: 80vh
}
</style>