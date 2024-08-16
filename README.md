### 이곳은 프론트 레포입니다:)

버전 관리 및 개발환경 통일을 위한
Read me 마크다운 파일입니다!

---

## 1. VS code 확장자

1. ES& React/Redux/GraphQL/React-Native snippets

2. React Native Tools 

3. VSCode React Refactor

4. ESLint

5. Prettier

6. code spell checker

7. git codespaces

8. Auto Rename Tag

9. Bracket Pair Colorizer 2

10. Color Highlight

11. git graph


---

## 2. 버전 관리

커밋 메세지는 아래와 같은 방식으로 달아주세요:)

기본 형식

[PREFIX] #이슈번호 - 이슈 내용

예시

```
// 1번 이슈에서 새로운 기능(Feat)을 구현한 경우

[FEAT] #1 - 기능 구현

// 1번 이슈에서 레이아웃(Design)을 구현한 경우

[DESIGN] #1 - 레이아웃 구현
```

Prefix의 의미

[FEAT]: 새로운 기능 구현

[DESIGN]: just 화면. 레이아웃 조정

[FIX]: 버그, 오류 해결, 코드 수정

[ADD]: Feat 이외의 부수적인 코드 추가, 라이브러리 추가, 새로운 View 생성

[DEL]: 쓸모없는 코드, 주석 삭제

[REFACTOR]: 전면 수정이 있을 때 사용합니다

[REMOVE]: 파일 삭제

[MOVE] 프로젝트 구조 변경(폴더링 등)

[CHORE]: 그 이외의 잡일/ 버전 코드 수정, 패키지 구조 변경, 파일 이동, 파일이름 변경

[DOCS]: README나 WIKI 등의 문서 개정

[COMMENT]: 필요한 주석 추가 및 변경

[MERGE]: 머지

[HOTFIX] 겁나 급한 버그 수정 (모두 주목...)

Commit에 대한 첨언

커밋은 잘게 나눌수록 좋다고 합니다~! Pull Request도 세미나 과제에서는 주차 마다 하나씩 올렸는데, 적절한 기능 단위별로 묶어서 PR 올려주세요! PR이 커지면 File Changed가 많아지고 코드리뷰를 하기도 힘들어지기 때문에 협업 시에는 가급적 PR을 잘게 나눠주는 것이 좋습니다!

Merge

- Merge를 할 때는 커밋 메세지를 **[PREFIX] #이슈번호 - 구현내용** 형식의 이슈 이름과 같이 수정해줍니다!
- Merge 후 재사용하지 않는 브랜치는 삭제합니다.
- 최소 1명의 Approve를 받고 Merge합니다.

아래 설명에 뜨는 메세지로 수정해주세요!


---

(아래 내용은 전 팀에서 하던건데 저희는 두명이라서 그냥 참고용으로 넣었습니다...)

***다만 Merge 시에는 꼭 서로 말하기***

1. Issue를 생성한다. // 작업의 단위, 번호 부여

2. Issue의 Feature Branch를 생성한다. // ex. feat/#이슈번호-hs

3. ~작업~ // Add - Commit - Push - Pull Request 의 과정

4. Pull Request가 작성되면 작성자 이외의 다른 팀원이 Code Review를 한다.

5. Code Review가 완료되고, 
	 2명 이상 Approve 하면 Pull Request 작성자가 develop Branch로 merge 한다.
	 // Conflicts 방지

6. 팀원들에게 merge 사실을 알린다.
  
7. 브랜치를 삭제한다.

8. 다른 팀원들은 merge된 작업물을 pull하고 다시 각자 맡은 작업을 이어나간다.

---

### 3. 개발 환경 통일

expo 말고 react native CLI로 세팅하기
(대용량 앱 expo 빌드 느려짐 및 라이브러리 제한 문제)




[맥북 개발환경 세팅](https://deku.posstree.com/ko/react-native/install-on-mac/)



---

### 4. 반응형 앱을 위한 개발 표준화

실제 사용자는 다양한 규격의 기기를 사용하고 있지 때문에, 요소, 텍스트 크기에 대한 단위 표준화가 필요함

React Native Responsive Dimenstion 라이브러리 활용하여 반응형 마련

(그래도 개발은 아이폰/갤럭시 각각1 모델을 기준으로 개발하기)

RN 반응형 디자인 적용법

1. [실제 화면 크기를 가져 오는 방법](https://steemit.com/hive-137029/@anpigon/20221017t150617128z)

2. [관련 라이브러리](https://velog.io/@dongdong98/React-Native-%EB%B0%98%EC%9D%91%ED%98%95-%EB%94%94%EC%9E%90%EC%9D%B8)

React Native Responsive Dimenstion 활용하기

---

### 5. 개발 파트 분배

화면단 (중복된 화면 레이아웃은 괄호에 포함)

--- 

#### 주형님 파트


* 게시판 (핫, 자유, 배달, 학교, 건의, 분실, 홍보, 장터, 공구, 나눔)
    * 게시판 선택 화면
    * 게시물 리스트
    * 게시물 내용(일반)
    * 게시물 내용(공지사항)

* 관리자 페이지

--- 
#### 가은 파트


* 메인

* 로그인

* 회원가입

* 마이페이지
    * 아이디
    * 비밀번호 변경
    * 호수 변동 신청
    * 재사 인증
    * 별명
    * 문의하기
    * 개인정보 처리방침
    * 알림 설정
        * 앱 푸시 알림
    * 회원탈퇴
    * 로그아웃

---

# 개발 관련 기본 구조 설명

## 1. INTRO

[초기 애뮬레이터 구축](https://velog.io/@willy4202/%EB%A6%AC%EC%95%A1%ED%8A%B8-%EB%84%A4%EC%9D%B4%ED%8B%B0%EB%B8%8C-%EC%B4%88%EA%B8%B0-%EC%84%B8%ED%8C%85%EB%B2%95)



[기본 템플릿 구조](https://jake-seo-dev.tistory.com/233)


[템플릿 없다고 에러날때](https://velog.io/@minju1009/React-Native-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EC%B4%88%EA%B8%B0%EC%84%B8%ED%8C%85)
**단 위 블로그는, 4-5번만 진행! TypeScript plugin 설치는 제외하기!!**

[반응형 템플릿 설계 방법](https://jiny-dongle.tistory.com/41)


---
## 2 폴더 구조


### 네이티브 구동 관련 폴더 및 파일
**둘은 가능한 건드리지 않기**

- android: 안드로이드 네이티브 구동에 필요한 파일들 (Gradle 등)

- ios: IOS 네이티브 구동에 필요한 파일들

### 설정 관련 파일

- ...config 중 처음들어보는 파일은 대부분 네이티브와 관련된 설정정보들이다. 일반적으로 수정할 일이 없으나, 수정할 때는 매우 주의해야 한다.

- .watchmanconfig: IOS 개발 시에 파일을 감시해주는 역할을 한다.
- app.json: 앱 이름을 관리한다.
    - 다만 여기서 name 속성은 건들지 않는 것이 좋다. 이름을 바꾸게 되는 경우엔 displayName 만 바꾸는 것이 좋다.
    - 그러나, displayName 을 바꾸어도 실제로 앱 네임이 바뀌지 않는 함정카드가 있다.


- babel.config.js: React Native 에서는 Webpack dev server 대신 Metro dev server 가 바벨을 통해 앱에 쓰이는 코드들의 빌드를 도와준다.
- metro.config.js: 메트로 설정 파일 (웹팩 대신 사용한다.)
- tsconfig.json: 타입스크립트 설정 파일이다.


### 실제 코드 관련 파일

- App.tsx: 현재 메인 화면에 관련된 코드가 들어있다.
- index.js: 웹 리액트를 쓸 때처럼, 이 파일이 앱 진입점으로 사용된다.

### 안드로이드와 자바 연결 파일

- android/app/src/main/java/com/fooddeliveryapp/MainActivity.kt: 안드로이드 액티비티에서 JS 엔진을 이용해 리액트 코드를 실행해준다. 또한 bridge 로 소통도 한다.


## 실제 다루는 폴더 구조!!!

소스코드는 src 디렉토리 밑에 자유롭게 생성한다.

- src/assets: 이미지나 폰트 등
- src/constants: 상수와 관련된 파일
- src/pages: 페이지 단위 컴포넌트
- src/components: 기타 컴포넌트
- src/contexts: context api 모음
- src/hooks: 커스텀 훅 모음
- src/modules: 네이티브 모듈
- src/store: 리덕스 스토어
- src/slices: 리덕스 슬라이스
- types: 타입 정의


---

혹시 프로젝트 내에서 ~~를 찾을 수 없다고 뜨는 경우

EX) react-redux

npm install react-redux

처럼 npm써서 설치하기
(설치하기 전에 인터넷에서 확인해보기)




---

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
