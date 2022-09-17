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
const notificationList = ref([]);
const fetchData = async () => {
  await fetch("/src/assets/db.json")
    .then((response) => response.json())
    .then((data) => {
      console.log(data.notificationList);
      notificationList.value = data.notificationList;
    });
};

onMounted(() => {
  fetchData();
});

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
