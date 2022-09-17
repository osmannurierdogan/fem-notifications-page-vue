<template lang="pug">
main.container
  NotificationHeaderComponent(:notificationCount="unreadItemCount", :markAllRead="markAllRead")
  NotificationListComponent(:notificationList="notificationList")
</template>

<script setup>
import FooterComponent from "./components/FooterComponent.vue";
import NotificationHeaderComponent from "./components/NotificationHeaderComponent.vue";
import NotificationListComponent from "./components/NotificationListComponent.vue";
import { computed, ref, onMounted } from "vue";
const notificationList = ref([
  {
    user: {
      name: "Mark Webber",
      image_url: "./src/assets/images/avatar-mark-webber.webp",
    },
    status: "unread",
    prefix: "reacted to your recent posts",
    title: "My first tournament today!",
    time: "1m ago",
    type: "post",
    id: "1111",
  },
  {
    user: {
      name: "Angela Gray",
      image_url: "./src/assets/images/avatar-angela-gray.webp",
    },
    status: "unread",
    prefix: "followed you",
    title: null,
    time: "5m ago",
    type: "follow",
    id: "1112",
  },
  {
    user: {
      name: "Jacob Thompson",
      image_url: "./src/assets/images/avatar-jacob-thompson.webp",
    },
    status: "unread",
    prefix: "has joined your group",
    title: "Chess Club",
    time: "1 day ago",
    type: "group",
    id: "1113",
  },
  {
    user: {
      name: "Rizky Hasanuddin",
      image_url: "./src/assets/images/avatar-rizky-hasanuddin.webp",
    },
    status: "read",
    prefix: "sent you a private message",
    title: null,
    time: "5 days ago",
    type: "dm",
    message:
      "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
    id: "1114",
  },
  {
    user: {
      name: "Kimberly Smith",
      image_url: "./src/assets/images/avatar-kimberly-smith.webp",
    },
    status: "read",
    prefix: "commented on your picture",
    title: null,
    time: "1 day ago",
    type: "comment",
    comment_image: "./src/assets/images/image-chess.webp",
    id: "1115",
  },
  {
    user: {
      name: "Nathan Peterson",
      image_url: "./src/assets/images/avatar-nathan-peterson.webp",
    },
    status: "read",
    prefix: "reacted to your recent post",
    title: "5 end-game strategies to increase your win rate",
    time: "2 weeks ago",
    type: "post",
    id: "1116",
  },
  {
    user: {
      name: "Anna Kim",
      image_url: "./src/assets/images/avatar-anna-kim.webp",
    },
    status: "read",
    prefix: "left the group",
    title: "Chess Club",
    time: "2 weeks ago",
    type: "group",
    id: "1117",
  },
]);
// const fetchData = async () => {
//   await fetch("/src/assets/db.json")
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data.notificationList);
//       notificationList.value = data.notificationList;
//     });
// };
//
// onMounted(() => {
//   fetchData();
// });

const unreadItemCount = computed(
  () => notificationList.value.filter((i) => i.status == "unread").length
);
const markAllRead = () => {
  notificationList.value.forEach((item) => (item.status = "read"));
};
</script>

<style lang="scss">
@import "./assets/sass/variables";
@import "./assets/sass/mixins";
html {
  font-size: 62.5%;
  @include responsive(tab-port) {
    font-size: 55%;
  }
}
body {
  background-color: $color-secondary-very-light-grayish-blue;
  font-family: $font-family-primary;
}
.container {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  background-color: $color-secondary-white;
  box-shadow: 1rem 1rem 5rem rgba(0, 0, 0, 0.15);
  border-radius: 1rem;
  margin: 7% 25%;
  padding: 3.6rem;
  @include responsive(tab-port) {
    margin: 7% 15%;
  }
  @include responsive(phone) {
    margin: 0;
    padding: 2.4rem;
  }
}
</style>
