<template lang="pug">
li.notification__item
  //img.notification__image(:src="notification.user.image_url")
  img.notification__image(src="../assets/images/avatar-anna-kim.webp")
  div.notification__content
    p #[strong.notification__content__user-name {{ notification.user.name }}] #[span.notification__content__prefix {{ notification.prefix }}] #[span.notification__content__title {{ notification.title }}]
    span.notification__content__time {{notification.time}}
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
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 2.4rem;
  }
  &__image {
    width: 10%;
    height: auto;
  }
  &__content {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    gap: 0.15rem;
    &__prefix {
      /* color: $color-secondary-grayish-blue; */
      color: $color-secondary-dark-grayish-blue;
      font-weight: $font-weight-medium;
    }
    &__title {
      font-weight: $font-weight-extra-bold;
      color: $color-secondary-dark-grayish-blue;
    }
    &__user-name {
      font-weight: $font-weight-extra-bold;
    }
    &__time {
      color: $color-secondary-dark-grayish-blue;
    }
  }
}
</style>
