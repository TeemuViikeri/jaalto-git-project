function sum () {
  var number = document.getElementById("number").value
  var number2 = document.getElementById("number2").value
  document.getElementById("result").innerHTML = "result: " + (Number(number) + Number(number2))
}

function minus () {
  var number = document.getElementById("number").value
  var number2 = document.getElementById("number2").value
  document.getElementById("result").innerHTML = "result: " + (Number(number) - Number(number2))
}

function multiply () {
  var number = document.getElementById("number").value
  var number2 = document.getElementById("number2").value
  document.getElementById("result").innerHTML = "result: " + (Number(number) * Number(number2))
}

function divide () {
  var number = document.getElementById("number").value
  var number2 = document.getElementById("number2").value
  document.getElementById("result").innerHTML = "result: " + (Number(number) / Number(number2))
}

function power () {
  var number = document.getElementById("number").value
  var number2 = document.getElementById("number2").value
  document.getElementById("result").innerHTML = "result: " + (Math.pow(number, number2))
}

function squareRoot () {
  var number = document.getElementById("number").value
  document.getElementById("result").innerHTML = "result: " + (Math.sqrt(number))
}

function showTime() {
  var clock = document.getElementById('clock');

  var currentTime = new Date();

  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  var seconds = currentTime.getSeconds();

  if (hours <= 10) {
    hours = '0' + hours;
  }

  if (minutes <= 10) {
    minutes = '0' + minutes;
  }

  if (seconds <= 10) {
    seconds = '0' + seconds;
  }

  var clockTime = `${hours}:${minutes}:${seconds}`
  var weekday = getWeekday(currentTime);
  clock.innerText = clockTime + ' ' + weekday;
}

function getWeekday(date) {
  var day = date.getDay();

  switch (day) {
    case 0:
      day = 'Monday'
      break;
    case 1:
      day = 'Tuesday'
      break;
    case 2:
      day = 'Wednesday'
      break;
    case 3:
      day = 'Thursday'
      break;
    case 4:
      day = 'Friday'
      break;
    case 5:
      day = 'Saturday'
      break;
    default:
      day = 'Sunday'
      break;
  }
  
  return day;
}

setInterval(showTime, 1000)
