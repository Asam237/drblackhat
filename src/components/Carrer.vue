<template>
  <div class="site__carrer flex flex-col md:flex-row">
    <div class="site__carrer-text w-full md:w-1/2">
      <h4 style="font-family: 'Rubik', sans-serif" class="text-3xl mb-4">
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
      title: "My Career So Far",
      content:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus quos corporis, quis nihil asperiores qui molestiae tempore suscipit! Voluptate, quia.",
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