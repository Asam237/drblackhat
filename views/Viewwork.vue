<template>
  <div class="site h-screen" style="background: '#EDEFF1'">
    <div
      style="padding: 16px; margin-left: auto; margin-right: auto"
      class="container md:px-0"
    >
      <Header :name="myName" />
      <div class="site__view py-6 md:py-16 items-center justify-center flex">
        <p
          class="
            text-xs
            md:w-1/2
            bg-blue-800
            py-2
            px-4
            md:text-sm
            rounded-lg
            text-white text-center
            uppercase
          "
        >
          En cours de creation...
        </p>
      </div>
      <Footer :content="footer" />
    </div>
  </div>
</template>

<script>
document.title = "Dr BlackHat  |  View Work";
import Header from "../src/components/Header.vue";
import Footer from "../src/components/Footer.vue";
export default {
  name: "Viewwork",
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      myName: "Dr BlackHat",
      footer: "© 2021 - Tous droits réservés Mentions légales",
      myPicture: require("../src/assets/img/creation.png"),
    };
  },
};
</script>

<style>
</style>