## 코로나 세계 현황판 만들기

최종 프로젝트 폴더입니다

## 자바스크립트 프로젝트에 타입스크립트 적용하기

0. 자바스크립트 파일에 JSDoc으로 타입 시스템 입히기
1. 타입스크립트의 기본 환경 구성
  - [X] NPM 초기화
  - [X] 타입스크립트 라이브러리 설치
  - [X] 타입스크립트 설정 파일 생성 및 기본 값 추가
  - [X] 자바스크립트 파일을 타입스크립트 파일로 변환
  - [X] 'tsc' 명령어로 타입스크립트 컴파일 하기

2. 명시적인 'any' 선언하기
  - 'tsconfig.js'에 'noImplicitAny'를 true로 설정하기
  - 가능한한 구체적인 타입으로 타입 정의
3. 프로젝트 환경 구성
  - babel, eslint, prettier 등의 환경 설정
4. 외부 라이브러리 모듈화 + any Type 없애기
  - node_modules/@types를 import 해오지 못하는 경우에는 @types를 직접 정의할 수 있고, tsconfig에서 직접 정의한 타입을 사용하도록 설정할 수 있다.
  - interface와 type을 적절히 정의하여 any를 대체할 수 있다.
5. strict 옵션 추가 후 타입 정의


## 참고 자료

- [존스 홉킨스 코로나 현황](https://www.arcgis.com/apps/opsdashboard/index.html#/bda7594740fd40299423467b48e9ecf6)
- [Postman API](https://documenter.getpostman.com/view/10808728/SzS8rjbc?version=latest#27454960-ea1c-4b91-a0b6-0468bb4e6712)
- [Type Vue without Typescript](https://blog.usejournal.com/type-vue-without-typescript-b2b49210f0b)