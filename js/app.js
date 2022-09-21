const app = Vue.createApp({
  data() {
    return {
      notificationList: [
        {
          user: {
            name: "Mark Webber",
            image_url: "../images/avatar-mark-webber.webp",
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
            image_url: "../images/avatar-angela-gray.webp",
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
            image_url: "../images/avatar-jacob-thompson.webp",
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
            image_url: "../images/avatar-rizky-hasanuddin.webp",
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
            image_url: "../images/avatar-kimberly-smith.webp",
          },
          status: "read",
          prefix: "commented on your picture",
          title: null,
          time: "1 day ago",
          type: "comment",
          comment_image: "../images/image-chess.webp",
          id: "1115",
        },
        {
          user: {
            name: "Nathan Peterson",
            image_url: "../images/avatar-nathan-peterson.webp",
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
            image_url: "../images/avatar-anna-kim.webp",
          },
          status: "read",
          prefix: "left the group",
          title: "Chess Club",
          time: "2 weeks ago",
          type: "group",
          id: "1117",
        },
      ],
    };
  },
  computed: {
    unreadItemCount() {
      return this.notificationList.filter((i) => i.status == "unread").length;
    },
    // groupTextColor() {
    //   return this.notification.type == "group" ? "blue-text" : "";
    // },
    // addUnreadStyles() {
    //   return this.notification.status == "unread" ? "unread-item" : "";
    // },
  },
  methods: {
    toggleReadUnread(notification) {
      if (notification.status == "read") {
        notification.status = "unread";
      } else {
        notification.status = "read";
      }
    },
    markAllRead() {
      this.notificationList.forEach((item) => (item.status = "read"));
    },
    groupTextColor(notification) {
      return notification.type == "group" ? "blue-text" : "";
    },
    addUnreadStyles(notification) {
      return notification.status == "unread" ? "unread-item" : "";
    },
  },
});

app.mount("#app");
