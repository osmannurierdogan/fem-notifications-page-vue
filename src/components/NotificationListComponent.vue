<template lang="pug">
ul.notification__list
  NotificationItemComponent(v-for="i in 5" :key="i" :notification="notification.value") {{ i }}
</template>
<script setup>
const notification = {
  user: {
    name: "Osman Nuri Erdogan",
    image_url: "https://google.com",
  },
  status: "unread",
  prefix: "reacted to your recent posts!",
  title: "My first tournament today!",
};
import NotificationItemComponent from "./NotificationItemComponent.vue";
return { notification };
</script>
<style lang="scss">
@import "../assets/sass/variables";
</style>
