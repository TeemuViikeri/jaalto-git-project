// CLOCK
function showTime() {
  var clock = document.getElementById("clock");

  var currentTime = new Date();

  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  var seconds = currentTime.getSeconds();

  if (hours < 10) {
    hours = "0" + hours;
  }

  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  var clockTime = `${hours}:${minutes}:${seconds}`;
  var weekday = getWeekday(currentTime);
  clock.innerText = clockTime + " " + weekday;
}

function getWeekday(date) {
  var day = date.getDay();

  switch (day) {
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
      break;
    default:
      day = "Sunday";
      break;
  }

  return day;
}

setInterval(showTime, 1000);

// QUOTES
function getQuotes() {
  const quotes = [
    {
      quote:
        "Life is too short and sweet to be spent by cribbing and complaining about things. Here are some random quotes about the most wonderful gift that we've got",
      author: " Life",
    },
    {
      quote:
        "Humor is richly rewarding to the person who employs it. It has some value in gaining and holding attention. But it has no persuasive value at all",
      author: "John Kenneth Galbraith",
    },
    {
      quote:
        "God save me from my friends. I can protect myself from my enemies.",
      author: "Claude Louis Hector de Villars ",
    },
    {
      quote: "The price of anything is the amount of life you exchange for it.",
      author: "David Thoreau",
    },
    {
      quote:
        "Life is like a landscape. You live in the midst of it but can describe it only from the vantage point of distance. ",
      author: "Charles Lindbergh",
    },
    {
      quote:
        "A critic is someone who never actually goes to the battle, yet who afterwards comes out shooting the wounded.",
      author: " Tyne Daly",
    },
  ];

  const btn = document.getElementById("btn");

  btn.addEventListener("click", () => {
    let random = Math.floor(Math.random() * quotes.length);

    document.getElementById("quote").textContent = quotes[random].quote;
    document.querySelector(".quote-author").textContent = quotes[random].author;
  });
}

getQuotes();

// LISTING
const alert = document.querySelector(".alert");
const form = document.querySelector(".list-form");
const inputList = document.getElementById("listing-input");
const submitBtn = document.querySelector(".submit-btn");
const container = document.querySelector(".item-container");
const list = document.querySelector(".item-listing");
const clearBtn = document.querySelector(".clear-btn");

let editElement;
let editFlag = false;
let editID = "";

form.addEventListener("submit", addItem);
clearBtn.addEventListener("click", clearItems);

function addItem(event) {
  // Prevents submit event's default action, form submitting
  event.preventDefault();
  // When submit button is clicked, take value of input field and save it to a variable
  const value = inputList.value;
  // This id value will be later used as an attribute id value
  const id = new Date().getTime().toString();
  if (value && !editFlag) {
    const element = document.createElement("article");
    element.classList.add("list-item");
    // data-* attributes are used to store extra information via attributes which scripts can target
    const attr = document.createAttribute("data-id");
    attr.value = id;
    element.setAttributeNode(attr);
    element.innerHTML = `<p class="title">${value}</p>
     <div class="btn-container">
        <button type="button" class="edit-btn"><i class="fas fa-edit"></i></button>
        <button type="button" class="delete-btn"><i class="fas fa-trash"></i></button>
     </div>`;
    const deleteBtn = element.querySelector(".delete-btn");
    const editBtn = element.querySelector(".edit-btn");
    deleteBtn.addEventListener("click", deleteItem);
    editBtn.addEventListener("click", editItem);
    list.appendChild(element);
    displayAlert("item added to the list", "success");
    container.classList.add("show-container");

    addToLocalStorage(id, value);
    setBackToDefault();
  } else if (value && editFlag) {
    editElement.innerHTML = value;
    displayAlert("value changed", "success");
    editLocalStorage(editID, value);
    setBackToDefault();
  } else {
    displayAlert("please enter value", "danger");
  }
}

function displayAlert(text, action) {
  alert.textContent = text;
  alert.classList.add(`alert-${action}`);
  setTimeout(() => {
    alert.textContent = "";
    alert.classList.remove(`alert-${action}`);
  }, 3000);
}

function clearItems() {
  const items = document.querySelectorAll(".grocery-item");

  if (items.length > 0) {
    items.forEach((item) => {
      list.removeChild(item);
    });
  }

  container.classList.remove("show-container");
  displayAlert("list emptied", "success");
  setBackToDefault();
  // localStorage.removeItem("list");
}

function deleteItem(e) {
  const element = e.currentTarget.parentElement.parentElement;
  const id = element.dataset.id;

  list.removeChild(element);

  if (list.children.length === 0) {
    container.classList.remove("show-container");
  }

  displayAlert("Item removed", "success");
  setBackToDefault();
  // removeFromLocalStorage(id);
}

function editItem(e) {
  const element = e.currentTarget.parentElement.parentElement;
  editElement = e.currentTarget.parentElement.previousElementSibling;
  inputList.value = editElement.innerHTML;
  editFlag = true;
  editID = element.dataset.id;
  submitBtn.textContent = "edit";
}

function setBackToDefault() {
  inputList.value = "";
  editFlag = false;
  editID = "";
  submitBtn.textContent = "submit";
}

function addToLocalStorage(id, value) {
  console.log("added to local storage");
}

function removeFromLocalStorage(id) {
  console.log("Removed from local storage.");
}

function editLocalStorage(id, value) {
  console.log("Edited in local storage");
}

// TIMELINE
function checkTimelineCardStates() {
  var items = document.querySelectorAll(".timeline li");

  // Returns true if list item set as function's parameter is in view
  function isElementInViewport(el) {
    // Get list item's size and position
    var rect = el.getBoundingClientRect();
    // Return if ...
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  // Add class "in-view" to list item when callbackFunc is called
  // Function will iterate over list items again and again passing them to isElementInViewPort(el)
  // Check main.css styling file to check what values "in-view" class element get
  function callbackFunc() {
    for (var i = 0; i < items.length; i++) {
      if (isElementInViewport(items[i])) {
        items[i].classList.add("in-view");
      }
    }
  }

  // Check if elements are in view after page has been loaded
  window.addEventListener("load", callbackFunc);
  // Check if elements are in view after page has been resized
  window.addEventListener("resize", callbackFunc);
  // Check if elements are in view after page has been scrolled
  window.addEventListener("scroll", callbackFunc);
}

checkTimelineCardStates();

// CALCULATOR
function sum() {
  var number = document.getElementById("number").value;
  var number2 = document.getElementById("number2").value;
  document.getElementById("result").innerHTML =
    "result: " + (Number(number) + Number(number2));
}

function minus() {
  var number = document.getElementById("number").value;
  var number2 = document.getElementById("number2").value;
  document.getElementById("result").innerHTML =
    "result: " + (Number(number) - Number(number2));
}

function multiply() {
  var number = document.getElementById("number").value;
  var number2 = document.getElementById("number2").value;
  document.getElementById("result").innerHTML =
    "result: " + Number(number) * Number(number2);
}

function divide() {
  var number = document.getElementById("number").value;
  var number2 = document.getElementById("number2").value;
  document.getElementById("result").innerHTML =
    "result: " + Number(number) / Number(number2);
}

function power() {
  var number = document.getElementById("number").value;
  var number2 = document.getElementById("number2").value;
  document.getElementById("result").innerHTML =
    "result: " + Math.pow(number, number2);
}

function squareRoot() {
  var number = document.getElementById("number").value;
  document.getElementById("result").innerHTML = "result: " + Math.sqrt(number);
}
