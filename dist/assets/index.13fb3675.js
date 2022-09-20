import {
  o as t,
  c as a,
  a as e,
  t as i,
  b as n,
  d as s,
  u as o,
  e as r,
  F as u,
  r as c,
  f as l,
  g as m,
} from "./vendor.b4b811df.js";
const p = { class: "notification__header" },
  f = n("Notifications "),
  d = { class: "notification__quantity" },
  g = {
    props: {
      notificationCount: { type: Number, required: !0 },
      markAllRead: { type: Function, required: !0 },
    },
    setup(n) {
      const s = n;
      return (o, r) => (
        t(),
        a("div", p, [
          e("h3", null, [f, e("span", d, i(s.notificationCount), 1)]),
          e(
            "button",
            {
              class: "button button--mark-all-read",
              onClick:
                r[1] || (r[1] = (...t) => n.markAllRead && n.markAllRead(...t)),
            },
            "Mark all as read"
          ),
        ])
      );
    },
  };
const _ = { class: "notification__content" },
  y = { class: "notification__content__user-name" },
  b = n(),
  k = { class: "notification__content__prefix" },
  h = n(),
  v = n(),
  w = { key: 0, class: "notification__content__status" },
  C = { class: "notification__content__time" },
  x = { key: 0, class: "notification__content__message" },
  A = {
    props: { notification: { type: Object, required: !0 } },
    setup(n) {
      const u = n,
        c = s(() => ("group" == u.notification.type ? "blue-text" : "")),
        l = s(() => ("unread" == u.notification.status ? "unread-item" : "")),
        m = () => {
          "read" == u.notification.status
            ? (u.notification.status = "unread")
            : (u.notification.status = "read");
        };
      return (n, s) => {
        var p;
        return (
          t(),
          a(
            "li",
            { class: ["notification__item", o(l)], onClick: m },
            [
              e(
                "img",
                {
                  class: "notification__image",
                  src: u.notification.user.image_url,
                },
                null,
                8,
                ["src"]
              ),
              e("div", _, [
                e("p", null, [
                  e("strong", y, i(u.notification.user.name), 1),
                  b,
                  e("span", k, i(u.notification.prefix), 1),
                  h,
                  e(
                    "span",
                    { class: ["notification__content__title", o(c)] },
                    i(u.notification.title),
                    3
                  ),
                  v,
                  "unread" == u.notification.status
                    ? (t(), a("span", w))
                    : r("", !0),
                ]),
                e("span", C, i(u.notification.time), 1),
                "dm" == u.notification.type
                  ? (t(),
                    a(
                      "p",
                      x,
                      i(null == (p = u.notification) ? void 0 : p.message),
                      1
                    ))
                  : r("", !0),
              ]),
              "comment" == u.notification.type
                ? (t(),
                  a(
                    "img",
                    {
                      key: 0,
                      class: "notification__comment-image",
                      src: u.notification.comment_image,
                    },
                    null,
                    8,
                    ["src"]
                  ))
                : r("", !0),
            ],
            2
          )
        );
      };
    },
  },
  q = { class: "notification__list" },
  R = {
    props: { notificationList: { type: Array, required: !0 } },
    setup(e) {
      const i = e;
      return (e, n) => (
        t(),
        a("ul", q, [
          (t(!0),
          a(
            u,
            null,
            c(
              i.notificationList,
              (e) => (
                t(),
                a(A, { key: e.id, notification: e }, null, 8, ["notification"])
              )
            ),
            128
          )),
        ])
      );
    },
  };
const j = { class: "container" };
m({
  setup(i) {
    const n = l([
        {
          user: {
            name: "Mark Webber",
            image_url: "~/src/assets/images/avatar-mark-webber.webp",
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
            image_url: "~/src/assets/images/avatar-angela-gray.webp",
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
            image_url: "~/src/assets/images/avatar-jacob-thompson.webp",
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
            image_url: "~/src/assets/images/avatar-rizky-hasanuddin.webp",
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
            image_url: "~/src/assets/images/avatar-kimberly-smith.webp",
          },
          status: "read",
          prefix: "commented on your picture",
          title: null,
          time: "1 day ago",
          type: "comment",
          comment_image: "/src/assets/images/image-chess.webp",
          id: "1115",
        },
        {
          user: {
            name: "Nathan Peterson",
            image_url: "~/src/assets/images/avatar-nathan-peterson.webp",
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
            image_url: "~/src/assets/images/avatar-anna-kim.webp",
          },
          status: "read",
          prefix: "left the group",
          title: "Chess Club",
          time: "2 weeks ago",
          type: "group",
          id: "1117",
        },
      ]),
      r = s(() => n.value.filter((t) => "unread" == t.status).length),
      u = () => {
        n.value.forEach((t) => (t.status = "read"));
      };
    return (i, s) => (
      t(),
      a("main", j, [
        e(g, { notificationCount: o(r), markAllRead: u }, null, 8, [
          "notificationCount",
        ]),
        e(R, { notificationList: n.value }, null, 8, ["notificationList"]),
      ])
    );
  },
}).mount("#app");
