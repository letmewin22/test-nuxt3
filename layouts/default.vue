<script setup lang="ts">
onMounted(async () => {
  // const { default: supportsWebP } = await import('supports-webp')

  // if (await supportsWebP) {
  //   this.$store.commit("app/setIsWebp", true);
  // } else {
  //   this.$store.commit("app/setIsWebp", false);
  // }
  const { hello } = await import('~/assets/scripts/utils/hello')
  hello()

  const { winSizes } = await import('~/assets/scripts/utils/winSizes')
  const { resize } = await import('@emotionagency/utils')
  resize.on(winSizes)

  // const { default: NavbarPos } = await import(
  //   "~/assets/scripts/utils/navbarPos"
  // );
  // this.navbarPos = new NavbarPos();
  // this.navbarPos.init();
})
</script>

<template>
  <Head>
    <Link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
      crossorigin="anonymous"
    />
  </Head>

  <slot />
</template>
