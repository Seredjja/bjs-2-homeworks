"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let d = Math.pow(b, 2) - 4 * a * c;
  if (d === 0) {
    let root = -b / (2 * a);
    arr.push(root);
  }
  if (d > 0) {
    let rootFirst = (-b + Math.sqrt(d)) / (2 * a);
    let rootSecond = (-b - Math.sqrt(d)) / (2 * a);
    arr.push(rootFirst);
    arr.push(rootSecond);
  }
  
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let monthlyPercent = (percent / 100) / 12;
  let creditBody = amount - contribution;
  let monthlyPayment = creditBody * (monthlyPercent + (monthlyPercent / ((1 + monthlyPercent)**countMonths - 1)));
  let totalAmount = (monthlyPayment * countMonths + contribution).toFixed(2) - contribution;
  console.log(totalAmount);
}