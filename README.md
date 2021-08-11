# YouTube_Clone

## Udemy react 강좌 

### 내용
class component, function component, state, property 등 react의 기본이면서 중요한 개념에 대해 잘 설명해주셨다.
ES6 문법에 대해서도 자세히는 알려주지 않았지만 이렇게 사용가능하다는 것을 알려줘서 복습 차원에서 너무 좋았다.

내 벨로그(https://velog.io/@gavri) 에 정리되어 있는 내용이지만 실제로 코딩하면서 배우니까 책에선 어려웠던 개념이 이해하기 쉬웠다.

기존 프로젝트에서 state 값을 변경하는 콜백함수를 넘기는 부분이 매번 다르게 작성 되었는데 강좌를 보면서 간결하면서도 가독성있게 넘기는 방법을 알게되었다.



### Tech

- react
  - lodash 
  - youtube-api-search
- bootstrap

### 시연 영상

https://youtu.be/Tlvzr-aQWj4  (15s)

### Error
#### git remote add origin 저장소 
명령어 사용시 remote origin already exists. 에러 발생
이유 : 강의 유튜브의 git에 접속해서 clone 하여 데이터를 불러온 상황에서 내 로컬 저장소와 원격 저장소를 연결할려하니까 이미 연결되어있어서 오류 발생
해결 : git remote remove origin // 저장소와 연결해제
참고) https://coding-factory.tistory.com/619

---
#### bundle.js:2033 Warning: React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: object. You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.
이유 : 컴포넌트를 임포트하여 사용했는데 알고보니 해당 컴포넌트는 구현되어있지 않았음
해결 : 구현.

---
#### Cannot read property 'setState' of undefined
이유 : 바보같이 this.setState 를 사용하는 함수를 class 내에 두지 않고 바깥에 나둬서 찾지 못하는 경우가 생김..
해결 :  클래스 내에 함수 사용

--- 


