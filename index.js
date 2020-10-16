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
    case 1:
      day = 'Monday'
      break;
    case 2:
      day = 'Tuesday'
      break;
    case 3:
      day = 'Wednesday'
      break;
    case 4:
      day = 'Thursday'
      break;
    case 5:
      day = 'Friday'
      break;
    case 6:
      day = 'Saturday'
      break;
    default:
      day = 'Sunday'
      break;
  }
  
  return day;
}

setInterval(showTime, 1000)

function getQuotes () {
  const quotes = [
    {
      quote:
        "Life is too short and sweet to be spent by cribbing and complaining about things. Here are some random quotes about the most wonderful gift that we've got",
      author: " Life"
    },
    {
      quote:
        "Humor is richly rewarding to the person who employs it. It has some value in gaining and holding attention. But it has no persuasive value at all",
      author: "John Kenneth Galbraith"
    },
    {
      quote:
        "God save me from my friends. I can protect myself from my enemies.",
      author: "Claude Louis Hector de Villars "
    },
    {
      quote: "The price of anything is the amount of life you exchange for it.",
      author: "David Thoreau"
    },
    {
      quote:
        "Life is like a landscape. You live in the midst of it but can describe it only from the vantage point of distance. ",
      author: "Charles Lindbergh"
    },
    {
      quote:
        "A critic is someone who never actually goes to the battle, yet who afterwards comes out shooting the wounded.",
      author: " Tyne Daly"
    }
  ];

  const btn = document.getElementById("btn");
  console.log(btn);

  btn.addEventListener("click", () => {
    let random = Math.floor(Math.random() * quotes.length);
    console.log(random);

    document.getElementById("quote").textContent = quotes[random].quote;
    document.querySelector(".quote-author").textContent = quotes[random].author;
  })
}

getQuotes();