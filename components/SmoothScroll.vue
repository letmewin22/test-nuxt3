<script setup lang="ts">
onMounted(async () => {
  const { SmoothScroll } = await import('@emotionagency/smoothscroll')
  const { raf } = await import('@emotionagency/utils')

  window.ss = new SmoothScroll({
    el: document.documentElement,
    mobile: false,
    breakpoint: 1060,
    passive: false,
    isFixed: false,
    friction: 0.07,
    stepSize: 0.9,
    scrollbar: true,
    useKeyboard: false,
    raf,
  })
})
</script>

<template>
  <slot />
</template>