<template>
  <div class="site h-screen" style="background: '#EDEFF1'">
    <div style="padding: 16px" class="container mx-auto md:px-0">
      <Header :name="myName" />
      <div class="site__view py-6 md:py-16 flex flex-col items-center">
        <img :src="myPicture" />
        <p class="text-center uppercase">En cours de creation...</p>
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
      footer: "Dr BlackHat - 2021",
      myPicture: require("../src/assets/img/creation.png"),
    };
  },
};
</script>

<style>
</style>