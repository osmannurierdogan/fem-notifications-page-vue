<template lang="pug">
main.container
  NotificationHeaderComponent
  NotificationListComponent
  //FooterComponent
</template>

<script setup>
import FooterComponent from "./components/FooterComponent.vue";
import NotificationHeaderComponent from "./components/NotificationHeaderComponent.vue";
import NotificationListComponent from "./components/NotificationListComponent.vue";
</script>

<style lang="scss">
@import "./assets/sass/variables";
html {
  font-size: 62.5%;
}
body {
  background-color: $color-secondary-very-light-grayish-blue;
  font-family: $font-family-primary;
}
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
}
.container {
  /* width: 120rem; */
  /* align-items: center; */
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  border: 3px solid red;
  margin: 7% 25%;
  padding: 1rem;
}
</style>
