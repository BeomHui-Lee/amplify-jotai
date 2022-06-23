# 기여자 확인 사항

## 개발 스택

프레임워크: [Next.js](https://nextjs.org/)

언어: [Typescript](https://www.typescriptlang.org/)

스타일: [Tailwindcss](https://tailwindcss.com/)

서버상태관리: [React Query](https://react-query.tanstack.com/)

## 개발툴

IDE(Integrated Development Environment)는 WebStorm IDE를 공통으로 사용한다.

## 개발환경 설정

### 프로젝트 불러오기

IDE에서 import

![webstorm-project-import01.png](docs/webstorm-project-import01.png)
or
![webstorm-project-import02.png](docs/webstorm-project-import02.png)

### Node.js 설치

- Node.js 14.19.2 or later

Yarn/NPM: Yarn 사용
(Node.js 16.9.0이상일 경우 따로 설치하시지 않아도 됩니다.)

- Node.js 16.9.0 릴리스와 함께 Corepack이라는 새로운 도구가 제공됩니다.
- Corepack은 Yarn 및 Pnpm과 같은 패키지 관리자와 노드 프로젝트 간의 브리지 역할을 하여 Corepack을 사용하면 개발 컴퓨터나 빌드 서버에 타사 패키지 관리자를 사용할 수 있습니다.
- Corepack을 활성화하려면 터미널에 다음 명령을 입력하기만 하면 됩니다. 그리고 패키지를 설치합니다.

```bash
corepack enable
yarn
```

### pre-commit 설치

```bash
brew install pre-commit
```

commit시 hook을 이용하여 다음 3가지 동작을 수행합니다.

- trailing-whitespace # 끝 공백을 전부 제거해줍니다.
  - end-of-file-fixer # EOL(end of line) 자동생성
  - check-yaml # yaml 파일 틀린 포맷 검사
  - conventional-pre-commit # 커밋메시지 컨벤션 검사

#### pre-commit은 .husky 경로에 사전 설정되어 있습니다.

pre-commit 설정은 원래 .git/hooks/... 에 아래 커맨드를 통해서 생성됩니다.(따로 설정하지 않으셔도 됩니다. 상단의 pre-commit 설치만 해주시면 됩니다.)

```bash
pre-commit install
pre-commit install --hook-type commit-msg # 커밋메시지 컨벤션 검토 추가
```

생성된 pre-commit, commit-msg 설정을 husky에 사용하기 위해서 미리 사전에 .husky 경로에 반영하였습니다.

### Formatting & Linting

ESLint 와 Prettier 를 사용, 초기 설정 및 전체 규칙의 경우 [Formatting & Linting 페이지](https://www.notion.so/greenlabs/Formatting-Linting-141f67ac3b4b4e2fb9e65332590329bd)를 참고

## 빌드 관련 커맨드

```bash
# 패키지 설치 및 업데이트
yarn
# 개발 모드로 빌드 후 local에 serving하기(port 8000)
yarn dev
# production 모드로 빌드 후 local에 serving하기(port 8000)
yarn start
# dist폴더에 빌드 후 번들 결과 결과 만들기
yarn build
# 전체파일 Lint 하기
yarn lint
# 전체파일 Lint error fixing 하기
yarn lint:fix
```

## commit 메시지 컨벤션

commit 메시지는 [Conventional Commits](https://www.conventionalcommits.org/)에 맞추어 작성 합니다.

merge전에 commit history와 message를 정리할 수 있으면 정리 부탁 드립니다.

pre-commit-config.yaml에 걸어둔 `conventional-pre-commit` 훅이 커밋메시지 컨벤션 검사를 합니다.
메시지 작성시 다음과 같은 포맷을 지켜주세요

- description은 생략되어도 괜찮습니다. 필요하다 생각되시면 작성해주세요
- Commit Type의 종류
  - feat: 새로운 기능 추가
  - fix: 버그 수정
  - refactor: 기능변경없이 코드의 품질 개선
  - test: 테스트 코드 추가
  - ci: GithubAction pre-commit yaml,package.json 파일 등등 수정

<figure class="third">
  <img src="docs/commit-convention-example1.png" alt="drawing" style="width:300px;"/>
  <img src="docs/commit-convention-example2.png" alt="drawing" style="width:300px;"/>
</figure>

### Jetbrain Conventional Commit Plugin

`Conventional Commit`이라는 Plugin을 사용하시면 커밋 메시지 템플릿을 제공해줍니다. 취향에 따라 선택해서 사용하시면 될듯합니다.

<img src="docs/introduce_plugin.png" alt="drawing" style="width:500px;"/>
<img src="docs/plugin_example.png" alt="drawing" style="width:500px;"/>

## 프로젝트 배포 프로세스

[자재플랫폼 개발 프로세스](https://www.notion.so/greenlabs/branch-fd2109e258f946d6a1678008c7741d01)의 내용을 참고하세요.

## 프로젝트 파일 구조

<pre>
├ components : 화면을 구성하는데 필요한 UI Component & Container
    ├ common
        ├ button
            ├ _hook.tsx : Button hook
            ├ signup.tsx : Button UI
        ...
    ...
├ constants : App 에 필요한 상수
├ docs : App 관련 documents
├ feature : Next.js route pages
    ├ page1
        ├ container.tsx : page1 container
        ├ index.tsx : page1 presenter
    ├ page2
        ├ container.tsx : page2 container
        ├ index.tsx : page2 presenter
    ...
├ pages : Next.js route pages
    ├ _app.tsx
    ├ _document.tsx
    ├ page1.tsx
    ├ page2.tsx
    ...
├ public : "base URL" based static files
├ service : 외부 services
├ styles : stylesheets
</pre>

<img src="docs/next.js-front-overview.drawio.png" alt="next.js-front-overview" style="width:300px;"/>

## 기본적인 개발 방법

- 기본적으로 Container & Presenter Pattern 방식으로 개발하며 관련해서는 찾아보시기 바랍니다.
  찾기 귀찮으면 다음 블로그 참고(잘 설명한 것이 있으면 업데이트해 주세요.): [https://burning-camp.tistory.com/84](https://burning-camp.tistory.com/84)
- Container & Presenter Pattern을 [HOC(Higher Order Component)](https://ko.reactjs.org/docs/higher-order-components.html)로 구현한 기본 베이스 코드는 `feature/__base-pattern` 폴더의 내용을 참고해 주세요.
  이를 복사하여 Page나 Component를 만드셔도 됩니다.
- 스타일은 [Tailwindcss](https://tailwindcss.com/)를 사용하고 있으므로 Presenter에 className을 직접 적용하여 스타일링 합니다.
  - 스타일이 숨겨질 수 있도록 UI Component들을 잘 캡슐화 해주세요.
  - [React 공식 홈페이지](https://ko.reactjs.org/docs/faq-structure.html)에서 [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/)을 얘기하고 있습니다. Component 조립이 쉽게 될 수 있도록 고려하면서 개발하면 될 것 같습니다.
- Client State Management ADR(Architecture decision record)
  - 이슈
    - 클라이언트 상태 관리가 필요해 보임
  - 결정
    - 복잡한 논리가 구현해야 할 사항이 현재는 없고 dependency와 함께 앱 사이즈 커지지 않도록 React-Query의 QueryClient를 직접 이용하여 client 상태를 관리하기로 결정하였습니다.
  - 고려
    - Server Side State Management는 React-Query로 하기로 했는데 Client 상태관리를 어떻게 해야할지(Redux-Toolkit을 사용해야 할지...)고민하였습니다.
    - 현재 App의 복잡성만 높이는 것은 아닌지 해서 간단한 상태관리([Recoil](https://recoiljs.org/ko/), [Jotai](https://jotai.org/), [Zustand](https://zustand-demo.pmnd.rs/)...)를 사용해야 할지 고민하였습니다.
  - 전제
    - 장기적으론 좋아보이진 않지만 간단한 앱에 라이브러리만 많아질 것 같아 가볍게 가기로 하였습니다.
    - Apollo Client의 [Local State Management](https://www.apollographql.com/docs/react/local-state/local-state-management)에서 아이디어를 가져왔습니다. 서버 상태 관리와 함께 클라이언트 상태 관리를 하나의 라이브러리(React-Query, `service/client-service.ts`)에서 함께하는 것으로 일단 적용합니다.
    - **추후 논의하여 클라이언트 상태 관리 라이브러리가 필요하다면 적용하도록 합니다.**
