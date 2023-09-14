//Q1
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

//Q2
for (let i = 2; i <= 20; i += 2) {
  console.log(i);
}

//Q3
let tries = 1;
let number = 1;
let addNumber = 1;
while (tries < 100) {
  addNumber += 1;
  number = number + addNumber;
  tries += 1;
}
console.log(number);

//Q4
function addArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + parseInt(arr[i]);
  }
  console.log(sum);
}
const arrNumb = ["1", "1", "2", "3", "5", "8"];
addArray(arrNumb);
