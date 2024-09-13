function toCelcius(){
  var temp
  temp = prompt("What is the temperature is degrees F?")
  alert([temp - 32] *5/9)
}
function toFarenheit(){
  var temp
  temp = prompt("What is the temperature in degrees C?");
  alert(1.8*temp + 32)
}
function multiply(){
  var a = prompt("What is the first number?");
  var b = prompt("What is the second number?");
  alert(a*b)
}
function divide(){
  var a = prompt("What is the first number?");
  var b = prompt("What is the second number?");
  alert(a/b);
}
function add(){
  var a = prompt("What is the first number?");
  var b = prompt("What is the second number?");
  alert(a+b);
}
function subtract(){
  var a = prompt("What is the first number?");
  var b = prompt("What is the second number?");
  alert(a-b);
}
function percent(){
  var a = prompt("What is the smaller amount?");
  var b = prompt("What is the total amount?");
  alert(a/b * 100 + "%");
}
function toMiles(){
  var miles = prompt("What is the speed in KPH?");
  alert(miles / 1.609);
}
function toKilometers(){
  var kilometers = prompt("What is the speed in MPH?");
  alert(kilometers*1.609);
}
function toKilos(){
  var pounds = prompt("What is the weight in pounds?")
  alert(pounds/2.20462262)
}
function toPounds(){
  var kilos = prompt("What is the weight in kilograms?")
  alert(kilos * 2.20462262)
}
function toLiters(){
  var gallons = prompt("What is the amount in gallons?")
  alert(gallons * 3.78541178)
}
function toGallons(){
  var liters = prompt("What is the amount in liters?")
  alert(liters/3.78541178)
}
function toMeters(){
  var feet = prompt("What is the length in feet?")
  alert(feet/3.281)
}
function toFeet(){
  var meters = prompt("What is the length in meters?")
  alert(meters*3.281)
}
function toFPS(){
  var miles = prompt("What is the speed in MPH?")
  alert(miles*1.46666)
}
function toMPH(){
  var feet = prompt("What is the speed in Feet per Second?")
  alert(feet/1.46666)
}