<script setup lang="ts">
import { DefaultMasonryProps, type MasonryProps } from './types'
import useElementSize from './useElementSize'
import { computed, onMounted, provide, useTemplateRef } from '#imports'

const props = withDefaults(defineProps<MasonryProps>(), DefaultMasonryProps)
const itemWidth = computed(() => props.itemWidth + 'px')
const containerRef = useTemplateRef('containerRef')
const { width: containerWidth } = useElementSize(containerRef)
const currentCols = computed(() => {
  return Math.floor((containerWidth.value + 2 * props.gap) / (props.itemWidth + props.gap))
})

provide('masonryProps', computed(() => ({
  gap: props.gap,
  renderWidth: props.itemWidth + props.gap,
  currentCols: currentCols.value,
})))

onMounted(() => {
  if (import.meta.client) {
    containerRef.value?.querySelectorAll('.masonry-container .masonry-item .masonry-content').forEach((item) => {
      item.parentElement!.style.gridRowEnd = `span ${item.clientHeight}`
    })
  }
})
</script>

<template>
  <div
    ref="containerRef"
    style="overflow: hidden;"
  >
    <div
      class="masonry-container"
      style="gap: 1px"
    >
      <slot />
    </div>
  </div>
</template>

<style scoped>
.masonry-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(v-bind(itemWidth), 1fr));
  grid-auto-rows: 0;
}
</style>
