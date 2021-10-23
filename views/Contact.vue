<template>
  <div class="site h-screen" style="background: '#EDEFF1'">
    <div
      style="padding: 16px; margin-left: auto; margin-right: auto"
      class="container md:px-0"
    >
      <Header :name="myName" />
      <div class="site__contact py-6 md:py-16 flex flex-col md:flex-row">
        <div class="site__contact-pic w-full md:w-1/2">
          <img class="md:w-11/12 rounded-md" :src="myPicture" alt="" />
        </div>
        <div class="site__contact-text mt-4 md:mt-0 w-full md:w-1/2">
          <h4
            class="text-4xl pb-4"
            style="font-family: 'Zen Old Mincho', sans-serif"
          >
            Entrer en contact
          </h4>
          <p class="text-sm leading-6">
            Avez une des commentaires pour nous? <br />
            Remplissez le formulaire ci-dessous pour contacter.
          </p>
          <form action="" method="post" class="flex flex-col">
            <input
              type="text"
              class="border-2 px-2 py-1 rounded-md mt-4"
              placeholder="adresse mail"
            />
            <textarea
              type="text"
              class="border-2 px-2 py-1 rounded-md my-4"
              placeholder="message"
            />
            <button class="bg-blue-800 text-white rounded-md py-2">
              valider
            </button>
          </form>
        </div>
      </div>
      <Footer :content="footer" />
    </div>
  </div>
</template>

<script>
document.title = "Dr BlackHat  |  Contact";
import Header from "../src/components/Header.vue";
import Footer from "../src/components/Footer.vue";
export default {
  name: "Contact",
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      myName: "Dr BlackHat",
      footer: "© 2021 - Tous droits réservés Mentions légales",
      myPicture: require("../src/assets/img/picture.jpg"),
    };
  },
};
</script>

<style>
</style>