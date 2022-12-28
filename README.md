# Mororepo Template

A minimal, optimal setup for modern web development projects using TypeScript.

(still in development, do not use)

## Technologies

This repo uses the following tech stack:

Nx for managing and building monorepo applications  
Docker for containerizing the application and its dependencies  
GitHub Actions for automating the build and deployment process  
TypeScript for static type checking and improved developer experience  
React for building the user interface  
Vite for fast development builds  
ESLint for enforcing a consistent code style  
Prettier for formatting code consistently  
tRPC for simplifying the process of making server-side RPC calls  
Zod for validating and manipulating input data in a type-safe manner  
PostgreSQL for storing data persistently  
Prisma for generating a type-safe database access layer  
Vitest for unit and integration testing
Cypress for end-to-end testing  
Emotion for styling components using CSS-in-JS
Mantine for providing a library of customizable and reusable UI components
Zustand for simple React state management
SWC for compiling and bundling Javascript/Typescript

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

## How I Choose The Tools

I carefully selected these technologies with a focus on improving developer experience, ensuring type safety, and promoting code and configuration reusability. I believe that using this setup will help us build software that is more maintainable and has a longer lifespan.

The following are the four qualities that I consider when choosing tools (with the most important at the top):

1. Type safety: Type safety is essential for scaling code. It also comes with benefits such as autocompletion and documentation, and can serve as a "single source of truth" by keeping everyone in sync. Type safety can also reduce the need for unnecessary conditional statements and the corresponding tests.

2. Ease of use: There are an infinite number of technologies to learn, but everyone only has 24 hours per day. It is important to choose tools that are easy to learn, easy to discard, and easy to relearn in order to respect developers' time.

3. Functionality: I prioritize ease of use over functionality because more powerful tools often have a higher learning cost than their simpler counterparts. For example, GraphQL is more powerful than REST, but requires more effort to learn and may not be necessary for many use cases. REST is often sufficient for most applications.

4. Performance: While performance is important, it should not be the top priority if you do not have a functional product. That being said, many of the tools mentioned in this list are known for their fast performance compared to alternatives.

## Core Techs

I will not discuss technologies such as Docker, ESLint, Prettier, and TypeScript, as they are staple tech choices at this point. These are the techs that play long-term roles in development, including folder structuring (Nx), API design (Zod), and database interaction (Prisma).

1. Nx: At the time of writing, Nx is a superior choice to Turbo Repo. Although Turbo Repo is written in a faster language, Nx is still faster and has more functionality, including a dependency graph and an integrated repository. Nx also has a larger and more mature community. The lack of an integrated repository is a significant drawback for Turbo Repo, while Nx's integrated repository makes it better for code reuse and maintenance.

2. Zod: There are many validation libraries available, but Zod stands out with its easy-to-use API and type inference approach. It combines validation and API schema into one, becoming the heart of your API design. It is a bit slow, however, and may not be suitable for parsing large amounts of data.

3. Prisma: Prisma is the ORM (Object-Relational Mapper) with the best type safety. However, I am not a fan of the schema-first approach because it adds cognitive cost (the need to learn a schema language). I prefer a code-first approach, specifically a type-first approach (using types as a schema).

## Replaceable Techs

These are tools that I highly recommend but feel free to choose alternatives for the following technologies:

1. Vite: A fast development build tool that utilizes ESM to outperform Create React App (Webpack) in the development environment.

2. Vitest: Easier to configure and has a very fast watch mode compared to Jest. Additionally, its API is similar to Jest, making it a good choice for those familiar with Jest.

3. SWC: A lightning-fast JS/TS compiler written in Rust

4. GitHub Actions: A clean and easy-to-use UI for automating tasks. It is also hosted by the same company that hosts your code, making it faster.

5. React: React is not the best UI library, but it has the best TypeScript support and a large community with plenty of resources.

6. Mantine: A well-designed React UI library with a modern API and great documentation. It offers a wide range of components and useful hooks. Highly recommended.

7. Zustand: A simple state management library that is easy to use.

8. Emotion: The technology behind Mantine, it has a similar API to styled-components.

9. PostgreSQL: PostgreSQL is a reliable, free, and open-source SQL database. It is widely considered one of the best SQL databases and works well with Prisma. It is important to use a database that is supported by Prisma to ensure type safety.

10. tRPC: If you use Zod, tRPC is a natural choice for your server and client. It also works well in monorepos, although it is not as flexible as other client and server technologies when it comes to integration with different repository structures.

11. Cypress: I don't have an opinion on this technology as I am not familiar with front-end testing. However, I may learn more about it in the future.

## Reuse Configuration

I try to reuse configuration as much as possible to reduce total configuration files needed to make the maintenance easier, this section explains how I reuse the configuration

1. Eslint: only one `.eslintrc.js` in root, applies to all file. You can apply different rule to individual file or folder using the `override` field, so you don't need more than one configuration file.
2. Prettier: only one `.prettierrc.js` and one `.prettierignore` in root, applies to all files.
3. Babel:

## Conclusion

I hope this repository serves as a helpful starting point for your web development project. Using the technologies listed above can help you improve developer experience, ensure type safety, and promote code and configuration reusability.
