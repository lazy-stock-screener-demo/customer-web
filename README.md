# Customer Web

![Preview](https://drive.google.com/uc?export=view&id=1YCW_bVWgqAmjBZEiJcG6MDYpQ4bU4_7M)

## What is it?

It is a project that is part of lazy-stock-screener which is a full-stack micro-service prototype product. Redux for global state, while Hooks for page level (or local level). Leverage API facade design pattern and React Hooks to built a MVP pattern in React.

## Why did I share this project in public?

The full product is still under constructing and the full product is committed to gitlab. I only share part of the use-case in order to demonstrate how I built up the front-end.

## What features do this project have?

- SPA with React Router
- React Router Config manage router in one place.
- Fully controlled Webpack tool without CRA.
- SSR in prod env without Next.js
- Redux for global state while hooks take care of local/page level state
- Lazy Load in page level component, it means only necessary components are loaded.
- Update URL and Page info based on search result
- Auto complete provide suggestion key word
- BreadCrumb based on router
- Filtering and Sorting of key factors.
- Containerized

## How did I build this project?

- MVP pattern + API Facade structure

### Structure Overview

- References
  [Client-Side Architecture Basics [Guide]](https://khalilstemmler.com/articles/client-side-architecture/introduction/)

  ![MVP](https://drive.google.com/uc?export=view&id=1Jexsxyet-Sr8iRHcqt58ViTUPC7wfyNa)

- Redux for global state while Hooks for local state
  - Ref. [React's useReducer Hook vs Redux](https://www.robinwieruch.de/redux-vs-usereducer)
    > Use useState for basic and simple/small size applications.
    > Use useState + useReducer + useContext for advanced/medium size applications.
    > Use useState/useReducer + Redux for complex/large size applications.

### File Structure

- Models (data-fetching + state management can be replaced by Apollo if needed.)
  - data-fetching
    - DTO → Define any payload as data-transfer-object
    - API Services → actual API service that calling axios in here.
    - 解決 redux-thunk 的問題：
      样板代码过多: 与 redux 本身⼀样,通常⼀个请求需要⼤量的代码,⽽且很多都是重复性质的
      耦合严重: 异步操作与 redux 的 action 偶合在⼀起,不⽅便管理
      功能孱弱: 有⼀些实际开发中常⽤的功能需要⾃⼰进⾏封装
  - state-management
    - state-models → define reducer state
    - State Reducers → general redux reducer
  - use-case
    - Login
      - LoginActionCreators → action in redux
      - LoginActionNames → define redux name
      - LoginDTO → define request/response data transfer object
      - LoginLogic → API dispatching logic
      - LoginUseCase → Return a redux-thunk and pass it to presenter for dispatching
- Pages → Assembling static components together and decorate with VM model
  - Components
    - Page → any page level component as an actual web page.
    - Tabs → subcomponent that constructing a page.
    - Sections → breaking down as smaller compoent
  - Layouts → define larger scale page layout and SEO setting
  - routes → define overall router paths also including authorized route.
- Presenters → Define View Models at global or local state management
  - View Model defines various kind of HOC related to API fetching or local hooks dispatching.
  - Redux using API facade pattern
  - Local state reducer
  - Local state DTO
- Views
  - Dump → Put all UI components in here.
  - Logic → Directly connect UI component to global state and use hooks pattern. These components eventually become a standalone component with their inside state.

## TechStacks

- dev
  - Webpack
  - Typescript
  - JSON server
- React Hooks
- React-Router
- Redux + Redux-thunk
- Material UI
- D3
- Axios
- Sensitive data handler: dotenv
- Express.js

## Env

```
HOST=0.0.0.0
PORT=8080
STOCK_DEV_VER=v1
STOCK_DEV_HOST=http://localhost
STOCK_DEV_PORT=5000
STOCK_PROD_VER=v1
STOCK_PROD_HOST=0.0.0.0
STOCK_PROD_PORT=5000
```

## References

- Model Part Idea

  - [https://github.com/stemmlerjs/ddd-forum](https://github.com/stemmlerjs/ddd-forum)

- React SSR

  - [https://github.com/StephenGrider/ReactSSRCasts](https://github.com/StephenGrider/ReactSSRCasts)
  - [https://pjchender.github.io/2018/09/21/react-ssr-筆記/](https://pjchender.github.io/2018/09/21/react-ssr-%E7%AD%86%E8%A8%98/)
  - [https://github.com/ilkeraltin/react-ssr-news](https://github.com/ilkeraltin/react-ssr-news)
  - [https://itnext.io/server-side-rendering-with-react-redux-and-react-router-fa5b67d4965e](https://itnext.io/server-side-rendering-with-react-redux-and-react-router-fa5b67d4965e)

- Loadable-component
  - [https://github.com/gregberge/loadable-components](https://github.com/gregberge/loadable-components)
- Webpack
  - splitChunks
    - [https://www.ucamc.com/e-learning/javascript/357-webpack 如何 code-splitting 拆分代碼 splitchunks](https://www.ucamc.com/e-learning/javascript/357-webpack%E5%A6%82%E4%BD%95code-splitting%E6%8B%86%E5%88%86%E4%BB%A3%E7%A2%BCsplitchunks)
  - Code splitting React components with TypeScript and NO Babel
    - [https://blog.logrocket.com/code-splitting-react-components-with-typescript-and-no-babel/](https://blog.logrocket.com/code-splitting-react-components-with-typescript-and-no-babel/)
