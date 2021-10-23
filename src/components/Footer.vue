<template>
  <footer
    style="font-family: 'Karla', sans-serif"
    class="site__footer font-bold text-left md:text-center pt-10 pb-4"
  >
    {{ content }}
  </footer>
</template>

<script>
export default {
  name: "Footer",
  props: {
    content: String,
  },
};
</script>

<style>
</style>