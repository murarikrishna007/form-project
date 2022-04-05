console.log("hello krishna, how are you");

function showTime() {
  let date = new Date();

  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();
  let session = "AM";

  // condition
  if (h == 0) {
    h = 12;
  }

  if (h > 12) {
    h = h - 12;
    session = "PM";
  }

  //   ternori operator use for 60 sec after 1 start that new start 01 // double digit display for browers
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  document.getElementById("digital_clock").innerHTML =
    h + ":" + m + ":" + s + " " + session;

  setTimeout(showTime, 1000);
}
showTime();


