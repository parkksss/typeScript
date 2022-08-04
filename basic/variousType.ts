// 변수에 들어올 타입이 아직 애매하다면?
// 1. Union type

let 이름: string | number = 'kim';

// 소괄호로 묶어도 된다!
let 나이: (string | number) = 100;

var 어레이: (number | string)[] = [1,'2',3]
var 오브젝트: {data : (number | string) } = { data : '123' }
// var 어레이: number | string[] 로 소괄호 없이 쓰면, 어레이 변수에 number 또는 array가 들어올 수 있다고 판단

// 2. any type
// 타입을 마구 바꿔도 에러가 발생하지 않는다
let 이름1: any = 'kim';
이름1 = 123;
이름1 = undefined;

// 3. unknown type
let 이름2: unknown = 'kim';
이름2 = 123;
이름2 = undefined;

// let 변수: string = 이름2; 
// 이렇게 쓰면 에러 발생
// unknown 타입을 다른 곳에 집어넣으려고 하면 그쪽 실드가 발동해서 에러!
let 나이2: unknown;

// let 변수1: string = 나이2;
// 이것도 에러!

// typescript의 엄격함

let 이름3: unknown;

// 이름3 - 1;
// 이름3[0];
// 이름3.data;
// 에러 발생! 
// 간단한 수학연산도 타입이 맞아야 한다!!
// .name 이런건 object 류의 타입만 할 수 있다라고 미리 정의 됨

// (Q1) 다음 변수 4개에 타입을 지정해봅시다.
// let user = 'kim';
// let age = undefined;
// let married = false;
// let 철수 = [user, age, married];

let user: string = 'kim';
let age: undefined|number = undefined;
let married: boolean = false;
let 철수: (string|number|undefined|boolean)[] = [user, age, married];

// (Q2) 학교라는 변수에 타입지정해보십시오.
// let 학교 = {
//       score : [100, 97, 84],
//       teacher : 'Phil',
//       friend : 'John'
//   }
//   학교.score[4] = false;
//   학교.friend = ['Lee' , 학교.teacher]

let 학교: { score: (number|boolean)[], teacher: string, friend: string|string[] } = {
  score : [100, 97, 84],
  teacher : 'Phil',
  friend : 'John'
}

학교.score[4] = false;
학교.friend = ['Lee' , 학교.teacher];