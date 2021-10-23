<template>
  <header
    class="
      site__header
      bg-blue-800
      h-24
      md:h-40
      flex
      justify-center
      items-center
    "
  >
    <p class="text-white uppercase font-bold text-4xl">{{ title }}</p>
  </header>
</template>

<script>
export default {
  props: {
    title: String,
  },
};
</script>

<style>
</style>