"use strict";
//Array
//Array: 자료구조의 종류 중 하나
//1. 배열 선언
const arr1 = new Array();
const arr2 = [];
//2.index를 사용하여 배열에 접근하기
const fruits = ["apple", "banana"];
console.log(fruits); //['apple', 'banana']
console.log(fruits.length); //2
console.log(fruits[0]); // apple
console.log(fruits[fruits.length - 1]);
console.log(fruits[3]); // undefined

for (let elem of fruits) {
  console.log(elem);
}

fruits.forEach((elem, idx, totalArr) =>
  console.log(`Element: ${elem}, Index: ${idx}, Total Array: ${totalArr}`)
);
/*
.forEach(callback func, thisArg);
callback (value, index, array) =>  void 로 구성
array는 전체적인 배열을 의미
*/

//2. 배열에 요소를 추가/삭제 하기
//추가 ->  push , unshift(맨 앞에 추가)
fruits.push("strawberry", "watermelon");
console.log(fruits);
fruits.unshift("grape");
console.log(fruits);
//삭제 -> pop, shift(맨 뒤의 item 삭제)
fruits.pop();
console.log(fruits);
fruits.shift();
console.log(fruits);
