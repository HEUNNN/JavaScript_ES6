"use strict";

//JavaScript is synchronous.
//Execute the code block by orger after hoisting. -> hoisting이 된 이후부터 작성 순서에 맞추어 하나씩 동기적으로 실행된다.
//Hoisting: var 변수, function declaration 들이 자동적으로 코드의 제일 위로 올라가 실행되는것

/*
Synchronous: 정해진 순서에 맞게 코드가 실행됨 -> '동기'
Asynchronous: 언제 코드가 실행될지 예측할 수 없음 -> '비동기'
*/

console.log("1");
setTimeout(() => {
  //setTimeout()은 브라우저 API이다.
  console.log("hello"); //callback 함수
}, 2000);
console.log("2");
console.log("3");
/*
1
2
3
hello
*/
