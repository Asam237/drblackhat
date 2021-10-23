  <template>
  <div class="site h-screen" style="background: '#EDEFF1'">
    <div
      style="padding: 16px; margin-left: auto; margin-right: auto"
      class="container md:px-0"
    >
      <Header :name="myName" />
      <main class="site__main pb-8 md:pb-12">
        <Description />
        <Carrer />
      </main>
      <Footer :content="footer" />
    </div>
  </div>
</template>
  
  <script>
document.title = "Dr BlackHat  |  Home";
import Header from "../src/components/Header.vue";
import Description from "../src/components/Description.vue";
import Carrer from "../src/components/Carrer.vue";
import Footer from "../src/components/Footer.vue";
export default {
  name: "Home",
  components: {
    Header,
    Description,
    Carrer,
    Footer,
  },
  data() {
    return {
      myName: "Dr BlackHat",
      footer: "© 2021 - Tous droits réservés Mentions légales",
    };
  },
};
</script>
  