<template lang="pug">
ul.notification__list
  NotificationItemComponent(v-for="notification in props.notificationList" :key="notification.id" :notification="notification") 
</template>
<script setup>
import NotificationItemComponent from "./NotificationItemComponent.vue";
import { ref } from "vue";
const props = defineProps({
  notificationList: {
    type: Array,
    required: true,
  },
});
</script>
