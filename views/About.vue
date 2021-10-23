<template>
  <div
    style="padding: 16px; margin-left: auto; margin-right: auto"
    class="container md:px-0"
  >
    <Header :name="myName" />
    <main class="site__main py-8 md:py-16 flex flex-col">
      <h4 class="font-thin text-xs uppercase">
        {{ subTitle }}
      </h4>
      <h1
        style="font-family: 'Zen Old Mincho', sans-serif"
        class="
          text-3xl
          leading-10
          md:text-5xl
          pt-4
          pb-10
          md:pb-16
          w-full
          md:w-10/12
        "
        data-aos="fade-up-right"
      >
        {{ title }}
      </h1>
      <div class="site__main-content">
        <ul
          class="list-disc divide-y-2 divide-gray-400"
          v-for="item in infosUtiles"
          :key="item"
        >
          <li>
            <p
              class="
                w-full
                md:w-7/12
                text-lg text-gray-800
                pb-3
                md:pb-6
                leading-6
              "
            >
              {{ item }}
            </p>
          </li>
        </ul>
        <!-- <p
          class="w-full md:w-7/12 pt-4 md:pt-8 text-gray-800 text-sm leading-6"
        >
          {{ contentOne }}
        </p>
        <p
          class="w-full md:w-7/12 pt-4 md:pt-8 text-gray-800 text-sm leading-6"
        >
          {{ contentOne }}
        </p> -->
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
      footer: "© 2021 - Tous droits réservés Mentions légales",
      myPicture: require("../src/assets/img/picture.jpg"),
      subTitle: "ce que je fais",
      title:
        "D'acheter et vendre des crypto monnaies sur les marchés financiers dans le but de générer un profit.",
      contentOne:
        "Ne jamais investir plus que ce que l’on peut se permettre de perdre",
      contentTwo:
        "Développeur et intégrateur spécialiste WordPress sur Bordeaux, je travaille le plus souvent avec des Directeurs Artistiques et des studios web.",
      contentThree:
        "Développeur et intégrateur spécialiste WordPress sur Bordeaux, je travaille le plus souvent avec des Directeurs Artistiques et des studios web.",
      infosUtiles: [
        " Connaître et comprendre le marché",
        "Ne jamais investir plus que ce que l’on peut se permettre de perdre",
        "Suivre l’actualité du Bitcoin",
        "Choisir sa plateforme pour trader crypto monnaie",
        "Maîtriser l’analyse technique",
        "Utiliser des sites de trading social",
        "Mettre en sécurité ses crypto",
        "Parler anglais",
      ],
    };
  },
};
</script>

<style>
</style>