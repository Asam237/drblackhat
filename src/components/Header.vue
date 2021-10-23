<template>
  <header
    class="
      site__header
      flex flex-col
      md:flex-row
      md:justify-between
      md:items-center
    "
    style="font-family: 'Rubik', sans-serif; border-bottom-width: 1px"
  >
    <div class="site__header-name pb-2">
      <h4
        @click="homeCLick"
        class="cursor-pointer font-semibold hover:underline hover:text-blue-800"
      >
        {{ name }}
      </h4>
    </div>
    <div class="site__header-main">
      <nav>
        <ul class="flex flex-col pt-2 md:pt-0 md:flex-row">
          <a
            @click="changeByClick"
            :href="link.url"
            v-for="link in links"
            class="ml-0 md:ml-4 uppercase hover:text-blue-800 hover:underline"
            :key="link.url"
          >
            {{ link.name }}
          </a>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  methods: {
    homeCLick: function () {
      return (document.location = "/");
    },
    changeByClick: function () {
      if (document.location == "/") {
        return (document.location = this.home);
      }
      if (document.location == "/about") {
        return (document.location = this.about);
      }
    },
  },
  data() {
    return {
      home: "/",
      about: "/about",
      links: [
        { url: "/about", name: "about" },
        { url: "/contact", name: "contact" },
        { url: "/viewwork", name: "view work" },
      ],
    };
  },
  props: {
    name: String,
  },
};
</script>

<style>
</style>