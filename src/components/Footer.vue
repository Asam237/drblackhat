<template>
  <footer
    style="font-family: 'Karla', sans-serif; border-top-width: 1px"
    class="
      site__footer
      font-bold
      text-left
      md:text-center
      pt-2
      pb-4
      flex
      justify-start
      md:justify-between
      items-start
      flex-col
      md:flex-row
      md:items-center
    "
  >
    <div class="footer__text">
      {{ content }}
    </div>
    <div class="footer__social pt-4 md:pt-0">
      <ul class="flex flex-col md:flex-row">
        <a
          class="md:mr-2 hover:text-blue-800 hover:line-through"
          v-for="item in socials"
          :key="item"
          :href="item.ur"
          >{{ item.name }}</a
        >
      </ul>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  props: {
    content: String,
  },
  data() {
    return {
      socials: [
        { ur: "https://telegram.com", name: "Telegram" },
        { ur: "https://facebook.com", name: "Facebook" },
        { ur: "https://web.whatsapp.com", name: "WhatsApp" },
      ],
    };
  },
};
</script>

<style>
</style>