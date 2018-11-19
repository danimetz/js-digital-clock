// Your code here

$(document).ready(function () {
  window.setInterval(getTime, 1000);
  function getTime() {
    // let date = new Date();
    // let hours = date.getHours();
    // let minutes = date.getMinutes();
    // let seconds = date.getSeconds();
    //
    // let time = $('<p>' + hours + ':' + minutes + ':' + seconds + '</p>');
    // $('#clock').html(time)
    $('#clock').html(new Date(Date.now()).toLocaleTimeString('en-US'));
  }

});
