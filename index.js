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
