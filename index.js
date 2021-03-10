// Write your solution here
let drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name) {
    drivers.push(name);
}

function destructivelyPrependDriver(name) {
    drivers.unshift(name);
}

function destructivelyRemoveLastDriver(params) {
    drivers.pop();
}

function destructivelyRemoveFirstDriver() {
    drivers.shift(name);
}

function appendDriver(name) {
    let newArray = drivers.concat(name);
    return newArray;

}

function prependDriver(name) {
    //Using spread
    let newArray2 = [name, ...drivers];
    return newArray2;
}

function removeLastDriver() {
  let newArr = drivers.slice(0, -1);
  return newArr;
}


function removeFirstDriver() {
    let newArr = drivers.slice(1, 4);
    console.log(newArr);
    return newArr;
  }