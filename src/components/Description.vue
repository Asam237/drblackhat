<template>
  <section class="site__description py-8 md:py-16 flex flex-col md:flex-row">
    <font-awesome-icon icon="user-secret" />
    <div
      data-aos="fade-right"
      class="site__description-picture w-full md:w-1/2"
    >
      <img class="w-full md:w-3/4 rounded-lg" :src="myPicture" alt="" />
    </div>
    <div
      data-aos="fade-left"
      class="
        site__description-text
        flex flex-col
        w-full
        md:w-1/2
        mt-4
        md:mt-0
        md:justify-center
      "
    >
      <h1
        class="text-4xl pb-4"
        style="font-family: 'Zen Old Mincho', sans-serif"
      >
        {{ title }}
      </h1>
      <p class="leading-7 md:w-10/12" style="font-family: 'Karla', sans-serif">
        {{ content }}
      </p>
      <h4
        style="font-family: 'Zen Old Mincho', sans-serif"
        class="uppercase mt-2"
      >
        Follow me on social network
      </h4>
    </div>
  </section>
</template>

<script>
export default {
  name: "Description",
  data() {
    return {
      title: "Hi there!",
      content:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis nesciunt illo veniam perspiciatis, ipsa deserunt ratione quia est voluptates nemo.",
      myPicture: require("../assets/img/picture.jpg"),
    };
  },
};
</script>

<style>
</style>