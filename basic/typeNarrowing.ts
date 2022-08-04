// 타입 확정하기
// 1. Narrowing
// if 문과 typeof 키워드를 사용해, 현재 파라미터의 타입을 검사

function 내함수4(x: number|string) {
  if (typeof x === 'number') {
    return x + 1;
  }
  else if (typeof x === 'string') {
    return x + 1;
  }
  else {
    return 0;
  }
}

// 2. Assertion
// as 키워드 사용해, 변수를 원하는 타입으로 덮어쓰워주기

function 내함수5(x: number|string) {
  return (x as number) + 1;
}
console.log( 내함수5(123) );

// 옛날 assertion 문법
// as 키워드 대신, <> 사용

(이름 as string) + 1; //현재문법
<string>이름 + 1; //옛날문법

// ---------
// Q1. 숫자여러개를 array 자료에 저장해놨는데 가끔 '4', '5' 이런 식의 문자타입의 숫자가 발견되고 있습니다. 
// 이걸 클리닝해주는 함수가 필요합니다.
// 클리닝함수( ['1', 2, '3'] ) 이렇게 숫자와 문자가 섞인 array를 입력하면, 
// [1,2,3] 이렇게 숫자로 깔끔하게 변환되어 나오는 클리닝함수를 만들어오고 타입지정까지 확실히 해보십시오.

function 클리닝함수(x: (string|number)[]): number[]{
  const 클리닝완료: number[] = [];

  x.forEach((e) => {
    if (typeof e === 'string') {
      클리닝완료.push(parseInt(e));
    } else {
      클리닝완료.push(e);
    }
  });

  return 클리닝완료;
}

// Q2. 다음과 같은 함수를 만들어보자

// let 철수쌤 = { subject : 'math' }
// let 영희쌤 = { subject : ['science', 'english'] }
// let 민수쌤 = { subject : ['science', 'art', 'korean'] }

// 지금 여러 변수에 선생님이 가르치고 있는 과목이 저장이 되어있다.
// 과목 1개만 가르치는 쌤들은 문자 하나로 과목이 저장이 되어있고, 
// 과목 2개 이상 가르치는 쌤들은 array 자료로 과목들이 저장되어있다.
// 철수쌤같은 선생님 object 자료를 집어넣으면, 
// 그 선생님이 가르치고 있는 과목중 맨 뒤의 1개를 return 해주는 함수를 만들어보자. 
// 그리고 타입지정도 엄격하게 해보자!

function 만들함수(x: { subject: (string|string[]) }): string {
  if (typeof x.subject === 'string') {
    return x.subject;
  } else if (Array.isArray(x.subject)) {
    return x.subject[x.subject.length-1];
  } else {
    return '없습니다';
  }
}

