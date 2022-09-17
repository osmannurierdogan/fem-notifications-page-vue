<template lang="pug">
div.notification__header
  h3 Notifications #[span.notification__quantity 3]
  button.button.button--mark-all-read Mark all as read
</template>
<style lang="scss">
@import "../assets/sass/variables";
.notification {
  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* border: 3px solid orangered; */
    & h3 {
      font-size: 2.8rem;
      /* border: 3px solid pink; */
    }
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
