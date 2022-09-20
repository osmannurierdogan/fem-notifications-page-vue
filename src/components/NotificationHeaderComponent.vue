<template lang="pug">
div.notification__header
  h3 Notifications #[span.notification__quantity {{ props.notificationCount }}]
  button.button.button--mark-all-read(@click="markAllRead") Mark all as read
</template>
<script setup>
const props = defineProps({
  notificationCount: {
    type: Number,
    required: true,
  },
  markAllRead: {
    type: Function,
    required: true,
  },
});
</script>
<style lang="scss">
@import "../assets/sass/variables";
.notification {
  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    & h3 {
      font-size: 2.4rem;
    }
    margin-bottom: 3.2rem;
  }
  &__quantity {
    font-weight: $font-weight-extra-bold;
    border-radius: 0.75rem;
    background-color: $color-primary-blue;
    color: $color-secondary-white;
    padding: 0.5rem 1rem;
  }
}
</style>
