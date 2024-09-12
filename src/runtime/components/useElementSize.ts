import { watch, ref, type Ref, onBeforeUnmount } from '#imports'

export default function useElementSize(element: Ref<HTMLElement | null>) {
  const width = ref(0)
  const height = ref(0)
  let observer: ResizeObserver | null = null

  function clean() {
    observer?.disconnect()
    observer = null
  }

  watch(element, (val) => {
    if (val) {
      clean()
      observer = new ResizeObserver(() => {
        width.value = element.value?.offsetWidth ?? 0
        height.value = element.value?.offsetHeight ?? 0
      })
      observer.observe(val)
    }
    else {
      clean()
    }
  })

  onBeforeUnmount(() => clean())

  return { width, height }
}
