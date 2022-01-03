<script setup lang="ts">
import VStack from "@/components/layouts/VStack.vue";
import ColorPaletteSampleTemplate from "@/pages/appendix/color-palette/ColorPaletteSampleTemplate.vue";
</script>

<template>
  <VStack>
    <h2>Color Palette</h2>
    <ColorPaletteSampleTemplate
        title="Gray Scale"
        css-var-name="--gray"
    />
    <ColorPaletteSampleTemplate
        title="Primary Color"
        css-var-name="--primary-color"
    />
    <ColorPaletteSampleTemplate
        title="Accent Color: informative"
        css-var-name="--informative-color"
    />
    <ColorPaletteSampleTemplate
        title="Accent Color: positive"
        css-var-name="--positive-color"
    />
    <ColorPaletteSampleTemplate
        title="Accent Color: negative"
        css-var-name="--negative-color"
    />
    <ColorPaletteSampleTemplate
        title="Accent Color: attentive"
        css-var-name="--attentive-color"
    />
  </VStack>
</template>

<style module>
.textWhite * {
  color: var(--white)
}
</style>