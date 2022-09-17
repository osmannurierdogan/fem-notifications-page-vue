<template lang="pug">
li.notification__item
  img.notification__image(:src="notification.user.image_url")
  div
</template>
<script setup>
const props = defineProps({
  notification: {
    type: Object,
    required: true,
  },
});
</script>
<style lang="scss">
@import "../assets/sass/variables";
.notification {
  &__item {
    font-size: $font-size-paragraph;
    list-style: none;
  }
}
</style>
