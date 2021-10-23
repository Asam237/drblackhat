<template>
  <div style="padding: 16px" class="container mx-auto md:px-0">
    <Header :name="myName" />
    <main class="site__main py-8 md:py-16 flex flex-col md:flex-row">
      <div class="site__main-picturei w-full md:w-1/2">
        <img class="md:w-3/4 rounded-lg" :src="myPicture" alt="" />
      </div>
      <div
        class="
          site__main-text
          flex flex-col
          md:mt-0
          md:justify-center
          w-full
          md:w-1/2
        "
      >
        <h1 class="text-4xl pb-4" style="font-family: 'Rubik', sans-serif">
          {{ myName }}
        </h1>
        <p class="md:w-10/12 py-2" style="font-family: 'Karla', sans-serif">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus
          molestiae architecto, quam obcaecati odit tenetur praesentium quo
          laborum reprehenderit reiciendis.
        </p>
      </div>
    </main>
    <Footer :content="footer" />
  </div>
</template>

<script>
document.title = "Dr BlackHat  |  About";
import Header from "../src/components/Header.vue";
import Footer from "../src/components/Footer.vue";
export default {
  name: "About",
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      myName: "Dr BlackHat",
      footer: "Dr BlackHat - 2021",
      myPicture: require("../src/assets/img/picture.jpg"),
    };
  },
};
</script>

<style>
</style>