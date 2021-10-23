<template>
  <div class="site__carrer flex flex-col md:flex-row">
    <div class="site__carrer-text w-full md:w-1/2">
      <h4
        style="font-family: 'Zen Old Mincho', sans-serif"
        class="text-3xl mb-4"
      >
        {{ title }}
      </h4>
      <p style="font-family: 'Karla', sans-serif" class="leading-7 md:w-11/12">
        {{ content }}
      </p>
    </div>
    <div class="site__carrer-item w-full md:w-1/2">
      <ul class="grid gap-3 grid-cols-2 md:grid-cols-4 mt-10">
        <div
          style="font-family: 'Karla', sans-serif"
          v-for="item in careers"
          :key="item"
        >
          <div
            class="
              site__career
              border-blue-800
              cursor-default
              rounded-2xl
              text-center
              p-1
              hover:bg-blue-800
              hover:text-white
            "
            style="border-width: 1px"
          >
            {{ item }}
          </div>
        </div>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Carrer",
  data() {
    return {
      title: "Ma carrière jusqu'à présent",
      // title: "My Career So Far",
      content:
        "L'explosion de nouvelles entreprises dans l'industrie de la blockchain et la volatilité des prix des actifs ont été responsables de l'augmentation soudaine des fonds d'investissement crypto et le nombre d'ouvertures pour les rôles de Trader a également considérablement augmenté.",
      careers: [
        "Trending",
        "Blockchain",
        "Ethereum",
        "Binance",
        "SHIBA INU",
        "Litecoin",
        "Stellar",
      ],
    };
  },
};
</script>

<style>
</style>