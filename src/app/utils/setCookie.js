export default function (name, value, days) {
  let date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  let expires = "expires=" + date.toUTCString();
  document.cookie = name + "=" + value + ";" + expires + ";path=/";
}
