export async function fetchData() {
  await fetch("/src/assets/db.json")
    .then((response) => response.json())
    .then((data) => {
      console.log(data.notificationList);
      return data.notificationList;
    });
}
