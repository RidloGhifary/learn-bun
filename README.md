# Learn-Bun

## Introduction

- Bun is a technology similar to NodeJS, is a tool that we can u to run **Javascript** code
- Bun created by Jarred Summer, as a **NodeJS** replacement
- Bun build using **Zig** programming language
- Bun build from _Webkit Javascript Core_, not like **NodeJs** which used V8
- Bun is a free & open source technology, so we can use it freely or contribute on
- [bun.sh](https://bun.sh)

## Why Bun

- Why do we learn bun, does nodejs not enough?
- Bun claimed that he is faster than **NodeJs**
- Also **Bun** can be used on **Javascript**, and as a default **Bun** can be used on **Typescript**
- Bun is not just a tool for running **Javascript** or **Typescript**, unlike **NodeJs**, on **Bun** every tool already provided, like Runtime for running **Javascript** / **Typescript**, Test runner for unit testing, and package manager that compatible with **Node Package Manager**

## Benchmark Bun vs Deno vs NodeJS

![alt text](<assets/Screen Shot 2024-06-23 at 14.33.38.png>)

## Install Bun

- Bun can be installed on Linux, MacOS & Windows
- To check that Bun was installed successfully, open a new terminal window and run bun --version.

```sh
bun --version
```

- [Check detail for Installing bun](https://bun.sh/docs/installation)

## Create a Project

- Lets create a folder called learn-bun, get in the folder and use terminal to type

```sh
bun init
```

- When we are creating a project, we provided languages that we can choose

## Run file

- Use `bun run` to execute a source file.

```sh
bun run yourfilename.js/ts
```

## Typescript

- As i mentioned earlier, Bun support **Typescript** as a default
- If we take a look on a `jsconfig.json`, it is actually contain **Typescript** configuration, we can rename it into `tsconfig.json` if we want to use **Typescript**
- Is that easy
- Besides that, **Typescript** dependency will be installed by default on a **Bun** project
- In other word, we can easily switch language either **Javascript** or **Typescript**

## JSX

- Bun supports .jsx and .tsx files out of the box
- Bun's internal transpiler converts JSX syntax into vanilla JavaScript before execution.
- But we need to install react dependency

```sh
bun add react
bun add @types/react --dev
```

- [Read more detail about bun jsx here](https://bun.sh/docs/runtime/jsx)

## Environment Variable

- As a default bun will read .env file
- Bun automatically read .env file without any additional library

  ![alt text](<Screen Shot 2024-06-23 at 14.57.53.png>)

  ### Read environment variable

  - The current environment variables can be accessed via process.env.

  ```sh
  process.env.DATABASE_HOST; // => "localhost"
  ```

  - Bun also exposes these variables via Bun.env and import.meta.env, which is a simple alias of process.env.

  ```sh
  Bun.env.DATABASE_HOST; // => "localhost"
  import.meta.env.DATABASE_HOST; // => "localhost"
  ```

  - To print all currently-set environment variables to the command line, run bun --print process.env.

  ```sh
  bun --print process.env
  ```

  ### NODE_ENV

  - When we build a project, we need a different `.env` file such as development or production
  - Bun can read .env file based on NODE_ENV variable

  ```sh
  export NODE_ENV=production // this command normally used by MacOS or Linux

  set NODE_ENV=production // for windows
  ```

  - Create a file .env.production then add some variables
  - Run `bun env.ts` command
  - Bun will show your .env file, but once your change the NODE_ENV variable it will read the value then give what inside .env.production file

    ![alt text](<Screen Shot 2024-06-23 at 15.08.17.png>)

## Watch Mode

- Bun supports two kinds of automatic reloading via CLI flags:

  - `--watch` mode, which hard restarts Bun's process when imported files change.
  - `--hot` mode, which soft reloads the code (without restarting the process) when imported files change.

- Watch mode can be used with bun test or when running TypeScript, JSX, and JavaScript files.
- To run a file in --watch mode:

```sh
bun --watch index.tsx
```

- To run your tests in --watch mode:

```sh
bun --watch test
```

- In `--watch` mode, Bun keeps track of all imported files and watches them for changes
- If Bun crashes, `--watch` will attempt to automatically restart the process.

![alt text](228439002-7b9fad11-0db2-4e48-b82d-2b88c8625625.gif)

## Package Manager

### Install

- For installing dependency, we will use command:

```sh
bun install
```

- Similar when you used `npm install`
- All of the information dependency that have installed will be stored on a `package.log` file, But **Bun** hits different
- **Bun** stores dependency information on a `bun.lockb` (binary file) file
- **Bun** is using Binary file so it will be faster over **NPM** that use JSON file
- If you want to install production dependency only, you can use command:

```sh
bun install --production
```

### Management Dependency

- For adding dependency, use:

```sh
bun add dependency-name
```

- For removing dependency, use:

```sh
bun remove dependency-name
```

- For updating dependency, use:

```sh
bun update dependency-name
```

## Cache

- Once installing dependency, as a default generally dependency will be stored on `$USER/.bun/install/cache` computer local storage
- Because of that, if the dependency with the same version have been downloaded, it will be used, This behavior will speed up downloading process, instead of has to download one by one over and over

## Test Runner

- Bun ships with a fast, built-in, Jest-compatible test runner.
- The runner recursively searches the working directory for files that match the following patterns:

  - `\*.test.{js|jsx|ts|tsx}`
  - `\*\_test.{js|jsx|ts|tsx}`
  - `\*.spec.{js|jsx|ts|tsx}`
  - `\*\_spec.{js|jsx|ts|tsx}`

```sh
bun test
```

```ts
import { expect, test } from "bun:test";

test("2 + 2", () => {
  expect(2 + 2).toBe(4);
});
```

### Watch mode

- Similar to bun run, you can pass the `--watch` flag to bun test to watch for changes and re-run tests.

```sh
bun test --watch
```

### Timeouts

- Use the `--timeout` flag to specify a per-test timeout in milliseconds.
- If a test times out, it will be marked as failed. The default value is **5000**.

```sh
# default value is 5000
bun test --timeout 20
```

### Rerun tests

- Use the `--rerun-each` flag to run each test multiple times.
- This is useful for detecting flaky or non-deterministic test failures.

```sh
bun test --rerun-each 1000
```

## Package Runner

- On NPM, there is a `npx` file as a package runner, for running command that available in dependency, as a example we often use command `npx prisma generate`
- On Bun, we will be use `bunx`
- Command that can be executed by package runner can be check on folder `node_modules/.bin`

  ![alt text](<Screen Shot 2024-06-23 at 16.00.12.png>)

## Workspace

- Bun supports workspaces in package.json
- Workspaces make it easy to develop complex software as a monorepo consisting of several independent packages.
- This feature is used to create a management some projects at once on a one repository
- For example, within a project we have created, we want to add sub-project or module in package form again, so we can use this `workspace` feature
- To tell to main project, we could add workspace inside `package.json`
- We need to store all the sub-package within packages folder

  ![alt text](<Screen Shot 2024-06-23 at 16.08.31.png>)

```
tree
<root>
├── README.md
├── bun.lockb
├── package.json
├── tsconfig.json
└── packages
    ├── address
    │   ├── index.ts
    │   ├── package.json
    │   └── tsconfig.json
    ├── contact
    │   ├── index.ts
    │   ├── package.json
    │   └── tsconfig.json
    └── user
        ├── index.ts
        ├── package.json
        └── tsconfig.json
```

- After we added sub-package, we can install all of the sub-packages into `node_modules` with following command `bun install`
- Then you will be your sub-packages are on `node_modules` symlink that refers to your sub-package
