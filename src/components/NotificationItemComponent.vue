<template lang="pug">
li.notification__item(:class="addUnreadStyles" @click="toggleReadUnread")
  img.notification__image(:src="require(`${props.notification.user.image_url}`)")  
  div.notification__content
    p #[strong.notification__content__user-name {{ props.notification.user.name }}]  #[span.notification__content__prefix {{ props.notification.prefix }} ] #[span.notification__content__title(:class="groupTextColor") {{ props.notification.title }} ] #[span.notification__content__status(v-if="props.notification.status == 'unread'")]
    span.notification__content__time {{ props.notification.time }}
    p.notification__content__message(v-if="props.notification.type== 'dm'") {{ props.notification?.message}}
  img.notification__comment-image(v-if="props.notification.type=='comment'", :src="props.notification.comment_image")
</template>
<script setup>
import { computed } from "vue";
const props = defineProps({
  notification: {
    type: Object,
    required: true,
  },
});
const groupTextColor = computed(() => {
  return props.notification.type == "group" ? "blue-text" : "";
});
const addUnreadStyles = computed(() => {
  return props.notification.status == "unread" ? "unread-item" : "";
});
const toggleReadUnread = () => {
  if (props.notification.status == "read") {
    props.notification.status = "unread";
  } else {
    props.notification.status = "read";
  }
};
</script>
<style lang="scss">
@import "../assets/sass/variables";
@import "../assets/sass/mixins";
.notification {
  &__item {
    font-size: $font-size-paragraph;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 2.4rem;
    padding: 1.5rem;
    margin: 1rem 0;
    border-radius: 1rem;
    cursor: pointer;
  }
  &__image {
    width: 5rem;
    align-self: flex-start;
  }
  &__content {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    line-height: 1.4;
    gap: 0.15rem;
    &__prefix {
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
    &__status {
      border-radius: 50%;
      margin-left: 0.5rem;
      width: 1rem;
      height: 1rem;
      display: inline-block;
      background-color: $color-primary-red;
    }
    &__message {
      margin: 1rem 0;
      padding: 1.5rem;
      border: 1px solid $color-secondary-light-grayish-blue-2;
      color: $color-secondary-dark-grayish-blue;
    }
  }
  &__comment-image {
    align-self: flex-start;
    width: 5rem;
  }
}
.blue-text {
  color: $color-primary-blue;
}
.unread-item {
  background-color: $color-secondary-light-grayish-blue-1;
}
</style>
