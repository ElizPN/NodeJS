



setInterval(function () {
  let today = new Date();
  let time =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  console.log(time);
}, 1000);
