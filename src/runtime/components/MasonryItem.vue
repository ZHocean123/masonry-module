<script setup lang="ts">
import useElementSize from './useElementSize'
import { watch, nextTick, computed, onMounted, ref, useTemplateRef, inject, type ComputedRef } from '#imports'

const props = defineProps<{ colSpan: number }>()

const masonryProps = inject<ComputedRef<{ gap: number, renderWidth: number, currentCols: number }>>('masonryProps')

const contentRef = useTemplateRef('contentRef')

const { height: containerHeight } = useElementSize(contentRef)

const ready = ref(false)

onMounted(() => {
  if (import.meta.client) {
    nextTick(() => ready.value = true)
  }
})

watch(containerHeight, () => {
  if (contentRef.value) {
    contentRef.value.parentElement!.style.gridRowEnd = `span ${Math.round(containerHeight.value)}`
  }
})

const itemColSpan = computed(() => {
  if (props.colSpan > 1 && masonryProps!.value.currentCols > 1) {
    return `span ${Math.min(masonryProps!.value.currentCols, props.colSpan)}`
  }
  return ''
})
</script>

<template>
  <div
    class="masonry-item"
    :style="{
      'grid-column': itemColSpan,
      'visibility': ready ? 'visible' : 'hidden',
    }"
  >
    <div
      ref="contentRef"
      class="masonry-content"
      style="margin: -0.5px;"
      :style="{ padding: `${(masonryProps!.gap) / 2}px` }"
    >
      <slot />
    </div>
  </div>
</template>

<style scoped>

</style>
