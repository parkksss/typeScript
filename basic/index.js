// 220803
// 1. 변수에 타입지정 = 변수에 실드를 씌운 것!! 
// type : string, number, boolean, null, undefined, ...
var 이름 = 'kim';
var 나이 = 50;
var 결혼했니 = true;
// 2. array & object 자료
// array는 array 자료안에 들어갈 타입도 같이 기입해줘야 한다 : 타입명[]
var 회원들 = ['kim', 'park'];
// Q. array 안에 여러 자료형을 넣고싶다!
// union type을 사용 "변수명: (string | number)[]"
//  object는 내가 만들 object와 똑같은 모습으로 지정
var 내정보 = { age: 20 };
// 오늘의 tip : 타입지정은 원래 자동으로 된다!
// -> 변수에 커서를 올리면 타입을 알려주는데, 우리가 타입지정 안한것도 타입이 지정돼 있음
// => 타입지정 문법은 생략이 가능하다!! 
var 회원 = 'kim';
// Q1. 여러분의 이름, 나이, 출생지역을 변수로 각각 저장해보기
var myName = 'park yeseul';
var myAge = 31;
var myBirthplace = 'seoul';
// Q2. 가장 좋아하는 곡과 가수이름을 변수에 object 자료형으로 담아보기
var mySong = { title: '눈사람', singer: '정승환' };
// Q3. object 자료의 타입지정 해보기
var project = {
    member: ['kim', 'park'],
    days: 30,
    started: true,
};
