# Mororepo Template

A minimal, optimal setup for modern web development projects using TypeScript.

(still in development, do not use)

## Technologies

This repo uses the following tech stack:

## Technologies

This repo uses the following tech stack:

[Nx](https://nx.dev/) for managing and building monorepo applications  
[Docker](https://www.docker.com/) for containerizing the application and its dependencies  
[GitHub Actions](https://github.com/features/actions) for automating the build and deployment process  
[TypeScript](https://www.typescriptlang.org/) for static type checking and improved developer experience  
[React](https://reactjs.org/) for building the user interface  
[Vite](https://vitejs.dev/) for fast development builds  
[ESLint](https://eslint.org/) for enforcing a consistent code style  
[Prettier](https://prettier.io/) for formatting code consistently  
[tRPC](https://trpc.io/docs) for simplifying the process of making server-side RPC calls  
[Zod](https://zod.dev/) for validating and manipulating input data in a type-safe manner  
[PostgreSQL](https://www.postgresql.org/) for storing data persistently  
[Prisma](https://www.prisma.io/) for generating a type-safe database access layer  
[Vitest](https://vitest.org/) for unit and integration testing  
[Cypress](https://www.cypress.io/) for end-to-end testing  
[Emotion](https://emotion.sh/docs/introduction) for styling components using CSS-in-JS  
[Mantine](https://mantine.dev/) for providing a library of customizable and reusable UI components  
[Zustand](https://github.com/pmndrs/zustand) for simple React state management  
[SWC](https://swc-project.github.io/) for compiling and bundling Javascript/Typescript

## Getting Started

To get started with this repository, after you clone it, install the dependencies:

```bash
npm run setup
```

Then, start the development server:

```bash
npm run dev
```

This will start the development server and open the application in your default browser.

## Build

To build the application, run the following command:

```bash
npm run build
```

## Testing

To run unit and integration tests, use the following command:

```bash
npm test
```

To run end-to-end tests, use the following command:

```bash
npm run e2e
```

## How Tools are Chosen

The selection of these technologies has been carefully considered, with an emphasis on enhancing the developer experience, ensuring type safety, and promoting clean code. The configurations have also been optimized for reusability. The use of this setup is expected to lead to software that is more maintainable and has a longer lifespan.

When choosing tools, the following four qualities are considered in this order of importance:

1. Type safety: Type safety is crucial for scaling code. It also brings benefits such as autocompletion and documentation, and can serve as a "single source of truth" by keeping everyone in sync. Type safety can also eliminate the need for unnecessary conditional statements and the corresponding tests.

2. Ease of use: There are an infinite number of technologies to learn, but everyone only has 24 hours per day. It is important to choose tools that are easy to learn, easy to discard, and easy to relearn in order to respect developers' time.

3. Functionality: Ease of use is prioritized over functionality because more powerful tools often have a higher learning cost than their simpler counterparts. For example, GraphQL is more powerful than REST, but may require more effort to learn and may not be necessary for many use cases. REST is often sufficient for most applications.

4. Performance: While performance is important, it should not be the top priority if you do not have a functional product. That being said, many of the tools mentioned in this list are known for their fast performance compared to alternatives.

## Core Technologies

Technologies such as Docker, ESLint, Prettier, and TypeScript are not discussed here, as they are considered standard choices at this point. The following technologies play long-term roles in development, including folder structuring (Nx), API design (Zod), and database interaction (Prisma):

1. Nx: At present, Nx is a superior choice to Turbo Repo. While Turbo Repo is written in a faster language, Nx is still faster and has more functionality, including a dependency graph and an integrated repository. Nx also has a larger and more mature community. The absence of an integrated repository is a significant drawback for Turbo Repo, while Nx's integrated repository makes it better for code reuse and maintenance.

2. Zod: There are many validation libraries available, but Zod stands out with its user-friendly API and type inference approach. It combines validation and API schema into one, making it the heart of your API design. Zod is a bit slow, however, and may not be suitable for parsing large amounts of data.

3. Prisma: Prisma is the ORM with the best type safety. (That being said, I am not a fan of the schema-first approach because it adds cognitive cost (the need to learn a schema language). I prefer a code-first approach, specifically a type-first approach (using types as schemas)).

## Replaceable Techs

The following are tools that I highly recommend, but you are free to choose alternatives:

1. Vite: A fast development build tool that utilizes ESM to outperform Create React App (Webpack) in the development environment.

2. Vitest: Easier to configure and featuring a very fast watch mode compared to Jest, with an API similar to Jest for those familiar with the library.

3. SWC: A lightning-fast JS/TS compiler written in Rust. It can run scripts without requiring any configuration, unlike Babel.

4. GitHub Actions: A clean and easy-to-use UI for automating tasks, hosted by the same company as your code for faster performance.

5. React: While not the best UI library, React has excellent TypeScript support and a large community with plenty of resources.

6. Mantine: A well-designed React UI library with a modern API and great documentation, offering a wide range of components and useful hooks. Highly recommended.

7. Zustand: A simple and easy-to-use state management library.

8. Emotion: The technology behind Mantine, with a similar API to styled-components.

9. PostgreSQL: A reliable, free, and open-source SQL database, widely considered one of the best and working well with Prisma. It is important to use a database supported by Prisma to ensure type safety.

10. tRPC: If you use Zod, tRPC is a natural choice for your server and client. It also works well in monorepos, although it is not as flexible as other client and server technologies when it comes to integration with different repository structures.

## Reusing Configuration

To reduce the number of configuration files and make maintenance easier, it is important to reuse configuration as much as possible. Here's how configuration is reused in this setup:

1. Eslint: There is only one `.eslintrc.js` file in the root directory, which applies to all files. The `override.files` field can be used to apply different rules to individual files or folders, so there is no need for additional configuration files. When generating a new project, simply add its path to `override.files`.

2. Prettier: There is only one `.prettierrc.js` file and one .prettierignore file in the root directory, which apply to all files.

3. Vite: Each project should have one `vite.config.ts` file that imports a preset from vite.presets.ts in the root directory.

4. Typescript: There are two TS config files in the root directory: tsconfig.base.json extends tsconfig.json to reset the `include` and `files` fields (to avoid [this error](https://github.com/microsoft/TypeScript/issues/49844)). Each project extends `tsconfig.base.json`. TS configuration is a bit special and may require additional TS config files in the root directory because all path values in TS config become relative to where it is extended to.

## Conclusion

I hope this repository serves as a helpful starting point for your web development project. Using the technologies listed above can help you improve developer experience, ensure type safety, and promote code and configuration reusability.
