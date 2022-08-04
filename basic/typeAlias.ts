// type alias (타입 변수만들기)
// type 타입변수명 = 타입종류

type AnimalType = string | number | undefined;
let 동물: AnimalType;

type 사람 = {
  name: string,
  age: number,
}
let teacher: 사람 = {
  name: 'john',
  age: 20,
}

// object 속성 readonly 키워드 로 잠그기
// readonly 속성: 타입명

type GirlfriendType = {
  readonly name: string,
}
const 여친: GirlfriendType = {
  name: '엠버'
}
// 여친.name = '유라' // 변경불가능 -> 에러 발생


// 옵션 : ? 연산자 - "undefined 타입도 가질 수 있다~"

type SquareType = {
  color?: string,
  width: number,
}
let 네모2: SquareType = {
  width : 100
}

// type alias extend
// 1. union type으로 변수 합치기
// or 연산자 이용해서 union type 만들기

type NameType = string;
type AgeType = number;
type NewOne = NameType | AgeType;

// 2. & 연산자로 object 타입 합치기
// & 연산자 이용해서 object 안의 두개의 속성을 합쳐준다

type PositionXType = {
  x: number
};
type PositionYType = {
  y: number
};
type XandYType = PositionXType & PositionYType;
let 좌표: XandYType = {
  x : 1,
  y : 2
}

// 주의! type 키워드는 재정의 불가능

type Name = string;
// type Name = number;  // 에러

// Q1. object 타입을 정의한 type alias 두개를 & 기호로 합칠 때 중복된 속성이 있으면 어떻게 될까?
type AType = { a: string, b: number };
type BType = { a: string, c: boolean };
type AandBType = AType & BType;

let 중복이면: AandBType = {
  a: '확인',
  b: 3,
  c: true
}
// 별다른 에러 없음

// Q2. 다음 조건을 만족하는 타입을 만들어보자(type alias로)
// 1. 이 타입은 object 자료형이어야합니다.
// 2. 이 타입은 color 라는 속성을 가질 수도 있으며 항상 문자가 들어와야합니다.
// 3. 이 타입은 size 라는 속성이 있어야하며 항상 숫자가 들어와야합니다.
// 4. 이 타입은 position 이라는 변경불가능한 속성이 있어야하며 항상 숫자가 담긴 array 자료가 들어와야합니다.

type 수수께끼 = { color?: string, size: number, readonly position: number[] };

// Q3. 다음을 만족하는 type alias를 연습삼아 간단히 만들어보자.
// 1. 대충 이렇게 생긴 object 자료를 다룰 일이 많습니다. { name : 'kim', phone : 123, email : 'abc@naver.com' }
// 2. object 안에 있는 이름, 전화번호, 이메일 속성이 옳은 타입인지 검사하는 type alias를 만들어봅시다.
// 3. 각 속성이 어떤 타입일지는 자유롭게 정하십시오.

type 연습 = { name: string, phone: number, email: string };
let 회원가입정보: 연습 = {
  name: 'kim',
  phone: 123,
  email: 'abc@naver.com'
};

// Q4. 다음을 만족하는 type alias를 만들어보자.
// 1. 숙제2와 똑같은데 이번엔 이름, 전화번호, 이메일, 미성년자여부 속성을 옳은 타입인지 검사하는 type alias를 만들어봅시다.
// 2. 미성년자 여부 속성은 true/false만 들어올 수 있습니다.
// 3. 멋있게 숙제2에서 만들어둔  type alias를 재활용해봅시다. (extend)

type 추가 = { adult: boolean };
type New연습 = 연습 & 추가;

let 새로운회원가입정보: New연습 = {
  name: 'kim',
  phone: 1234,
  email: 'abc@google.com',
  adult: false
}