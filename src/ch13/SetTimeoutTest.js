function SetTimeoutTest() {
    /**
    * 비동기
    */

   //매개변수(콜백함수, 초), 최상위에 있어야함
   setTimeout(() => {
       print(count);
   }, 2000);

   function print(fx) {
       console.log(4);
       fx();
   }

   function count() {
       console.log(1);
       console.log(2);
       console.log(3);
   }
   
   /**
    * 콜백함수
    * 매개변수 안에 함수 (map, filter 등)
    * 함수의 결과값이 아닌 함수의 주소를 넣음
    */
   function test(fx) {
       console.log("test 함수 호출");
       fx();
   }

   function add() {
       console.log("add 함수 호출");
   }

   test(add);

   return (
       <></>
   );
}

export default SetTimeoutTest;