# ts-napi-rs-boilerplate

## Overview

`ts-napi-rs-boilerplate` is a boilerplate project that demonstrates how to build a Node.js application using TypeScript and Rust with the N-API (Node API). This project serves as a starting point for developers looking to integrate Rust libraries into their TypeScript applications, leveraging the performance of Rust while maintaining the ease of development in TypeScript.

## Features

- **TypeScript**: The project is written in TypeScript, providing type safety and modern JavaScript features.
- **Rust Integration**: Utilizes Rust for performance-critical components, exposing them to Node.js via N-API.
- **Modular Structure**: Organized into separate directories for TypeScript and Rust code, making it easy to manage and extend.
- **Development Tools**: Includes scripts for building and running the application.

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 14 or higher)
- [Yarn](https://yarnpkg.com/) (for package management, recomended the use of corepack)
- [Rust](https://www.rust-lang.org/) (with `cargo` for building Rust components)

## Getting Started

1. **Clone the repository**:

   ```bash
   git clone [https://github.com/IanKarlo/ts-napi-rs-boilerplate.git](https://github.com/IanKarlo/node-ts-napi-rs-boilerplate.git)
   cd ts-napi-rs-boilerplate
   ```

2. **Install dependencies**:

   For the TypeScript part:

   ```bash
   yarn install
   ```

   For the Rust part run:

   ```bash
   yarn native:install
   ```

3. **Build the project**:

   To build the TypeScript and Rust components, run:

   ```bash
   yarn build
   ```

   Obs: If you want to just update the rust artifacts, run:

   ```bash
   yarn native:build
   ```

4. **Run the application**:

   You can start the application in development mode using:

   ```bash
   yarn dev
   ```

   This will start the application and watch for changes in the source files.

## Usage

The main entry point of the application is `src/index.ts`. It imports the Rust functions and demonstrates their usage:

```typescript
import { sayHello, sayHelloTo } from '@native/index';

console.log(sayHello()); // Outputs: Hello, World!
console.log(sayHelloTo('John')); // Outputs: Hello, John!!!!
```

## Contributing

This repository is still under development, so contributions are welcome! Feel free to submit a pull request or open an issue for any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
