// 함수 타입 지정

function 내함수(x :number) :number {
  return x * 2
}

// void 타입
// 함수에 return 방지장치를 주고 싶을 때 void 타입을 활용

function 내함수2(x :number) :void {
//  return x * 2  // return 쓰면 에러남
}

// 옵션파라미터
// 함수에 파라미터자리를 만들어놨지만 가끔 파라미터 없이 쓸 때

function 내함수3(x? :number) :void {
}
내함수3(); 

// Q1. 이름을 파라미터로 입력하면 콘솔창에 "안녕하세요 홍길동"을 출력해주고
// 아무것도 파라미터로 입력하지 않고 함수를 사용하면 "이름이 없습니다" 를 출력하는 함수를 만들기

function q1(x?: string):void {
  if (x) {
    console.log('안녕하세요',x);
  } else {
    console.log('이름이 없습니다')
  }
}
// Q2. 함수에 숫자 또는 문자를 집어넣으면 자릿수를 세어 출력해주는 함수를 만들어보십시오.
// 예를 들어 '245' 이런 문자를 입력하면 3이 return 되어야합니다.
// 숫자도 마찬가지로 9567 이런 숫자를 입력하면 4가 return 되어야합니다.
// 숫자 또는 문자 이외의 자료가 들어오면 안됩니다.

function q2(x: (string|number)): number {
  if (typeof(x) === 'string') {
    return x.length;
  } else {
    return x.toString().length;
  }
  // return x.toString().length;  // 한줄로도 가능은 함
}

// Q3. 결혼 가능 확률을 알려주는 함수를 만들어봅시다.
// 1. 함수의 파라미터로 월소득(만원단위), 집보유여부(true/false), 매력점수 ('상' or '중' or '하') 를 입력할 수 있어야합니다.
// 2. 월소득은 만원 당 1점, 집보유시 500점 & 미보유시 0점, 매력점수는 '상'일 때만 100점으로 계산합니다.
// 3. 총 점수가 600점 이상일 경우 "결혼가능"을 return 해줘야합니다. 그 외엔 아무것도 return하지 않습니다.
// 예시
// 결혼가능하냐(700, false, '중') 이렇게 사용할 경우 "결혼가능"을 return 해줍니다.
// 결혼가능하냐(100, false, '상') 이렇게 사용할 경우 아무것도 return되지 않습니다.

function 결혼가능하냐(income: number, haveHome: boolean, charm: string): (string|void){
   let score: number = 0;
   score += income;
   if (haveHome) {
    score += 500;
   }
   if (charm === '상') {
    score += 100;
   }
   if (score >= 600) {
    return '결혼가능';
   }
}


