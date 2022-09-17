<template lang="pug">
ul.notification__list
  NotificationItemComponent(v-for="i in 5" :key="i" :notification="notification") {{ i }}
</template>
<script setup>
import NotificationItemComponent from "./NotificationItemComponent.vue";
import { ref } from "vue";
const notification = ref({
  user: {
    name: "Osman Nuri Erdogan",
    image_url:
      "https://media.istockphoto.com/photos/trangthailand-october-24-2019-customer-lay-down-new-macbook-pro-2019-picture-id1183532123?s=612x612",
  },
  status: "unread",
  prefix: "reacted to your recent posts",
  title: "My first tournament today!",
  time: "1 day ago",
});
// return { notification };
</script>
<style lang="scss">
@import "../assets/sass/variables";
</style>
