<!-- markdownlint-disable MD010 -->
<!-- markdownlint-disable MD033 -->
<!-- markdownlint-disable MD041 -->

# Efficient Typescript Mororepo

<div align="left">
			<a
				href="https://github.com/tylim88/Efficient-Typescript-Mororepo/blob/main/LICENSE"
				target="_blank"
			>
				<img
					src="https://img.shields.io/github/license/tylim88/Efficient-Typescript-Mororepo"
					alt="License"
				/>
			</a>
		&nbsp;
			<a href="https://github.com/tylim88/Efficient-Typescript-Mororepo/actions" target="_blank">
				<img
					src="https://github.com/tylim88/Efficient-Typescript-Mororepo/workflows/CI/badge.svg"
					alt="github action"
				/>
			</a>
        &nbsp;
			<a href="https://github.com/tylim88/Efficient-Typescript-Mororepo/actions" target="_blank">
				<img
					src="https://github.com/tylim88/Efficient-Typescript-Mororepo/workflows/CodeQL/badge.svg"
					alt="github action"
				/>
			</a>
		&nbsp;
			<a href="https://github.com/tylim88/Efficient-Typescript-Mororepo/issues" target="_blank">
				<img
					alt="GitHub issues"
					src="https://img.shields.io/github/issues-raw/tylim88/Efficient-Typescript-Mororepo"
				></img>
			</a>
		&nbsp;
			<a href="https://snyk.io/test/github/tylim88/Efficient-Typescript-Mororepo" target="_blank">
				<img
					src="https://snyk.io/test/github/tylim88/Efficient-Typescript-Mororepo/badge.svg"
					alt="vulnerabilities"
				/>
			</a>
</div>
A minimal, optimal setup for modern web development projects using TypeScript.

(still in development, do not use)

## Technologies

This repo uses the following tech stack:

[Nx](https://nx.dev/) for managing and building monorepo applications  
[Docker](https://www.docker.com/) for containerizing the application and its dependencies  
[GitHub Actions](https://github.com/features/actions) for automating the build and deployment process  
[TypeScript](https://www.typescriptlang.org/) for static type checking and improved developer experience  
[Vite](https://vitejs.dev/) for fast development builds  
[Vitest](https://vitest.org/) for unit and integration testing  
[ESLint](https://eslint.org/) for enforcing a consistent code style  
[Prettier](https://prettier.io/) for formatting code consistently  
[Zod](https://zod.dev/) for validating and manipulating input data in a type-safe manner  
[tRPC](https://trpc.io/docs) for end-to-end typesafe APIs  
[Prisma](https://www.prisma.io/) for generating a type-safe database access layer  
[PostgreSQL](https://www.postgresql.org/) for storing data persistently  
[React](https://reactjs.org/) for building the user interface  
[Zustand](https://github.com/pmndrs/zustand) for simple React state management  
[Mantine](https://mantine.dev/) for providing a library of customizable and reusable UI components  
[Emotion](https://emotion.sh/docs/introduction) for styling components using CSS-in-JS  
[Cypress](https://www.cypress.io/) for end-to-end testing

## Getting Started

At this time, there is no project generation commands yet. Therefore, you will need to manually perform certain operations to set up the projects.

1. clone the repository and install the dependencies:

    ```bash
    git clone https://github.com/tylim88/Efficient-Typescript-Mororepo.git
    cd Efficient-Typescript-Mororepo
    npm run setup
    ```

2. Create a `nx-cloud.env` file in root directory.

3. Follow the steps in this [YouTube guide](https://youtu.be/w1-GiB74ddc?t=17) to create a nx cloud access token, but do not add it to the `nx.json` file as shown in the video.

4. Add the access token to the `nx-cloud.env` file as follows:

    ```env
    NX_CLOUD_ACCESS_TOKEN=YourNxCloudAccessToken
    ```

5. Add the access tokens to your GitHub repository secrets as `NX_CLOUD_ACCESS_TOKEN`.

6. (Optional)[Install Docker](https://docs.docker.com/get-docker/).

7. (Optional)Create a `.env` file in root directory and add the following lines:

    ```env
    NODE_APP_COMMAND=development
    NODE_APP_RESTART_POLICY=no
    NODE_APP_RESTART_COUNT=0
    POSTGRES_USER=AnyUserNameThisIsForDevelopmentOnly
    POSTGRES_DB=AnyNameThisIsForDevelopmentOnly
    POSTGRES_PASSWORD=AnyPasswordThisIsForDevelopmentOnly
    ```

8. (Optional)Follow the steps in this [YouTube guide](https://youtu.be/Qs5xGj85Aek?t=73) to create a Docker Hub access token with read and write permissions.

9. (Optional)Add your Docker username and access token to your GitHub repository secrets as `DOCKER_HUB_USERNAME` and `DOCKER_HUB_ACCESS_TOKEN`.

### Without Docker

If you do not plan to use Docker:

1. Ignore steps 6 to 9.

2. Delete `packages/node-docker`.

3. Remove the `push-docker` job in `.github/workflows/main.yml`.

### Quick Commands

1. `npm run dev`: This will start the development server(`node-docker`) and you can open the application(`react-app`) in your default browser.
2. `npm run build`: Build all projects except `react-app-e2e`.
3. `npm test`: Test all projects except `react-app-e2e`.
4. `npm run e2e`: Run e2e test, `react-app-e2e` only.
5. `npm run type`: Run type check on all projects.
6. `npm run lint`: Run linting with fix and prettify all projects.
7. `npm run down`: Shut down all Docker containers.

## Using Project Templates

There are six project templates, each with fine-tuned and simplified configurations:

1. `node-lib`: for general TypeScript libraries.
2. `jsdom-lib`: similar to `node-lib`, but specifically for code that manipulates the DOM.
3. `react-app`: for React applications.
4. `react-app-e2e`: for end-to-end testing of React applications.
5. `node-app`: for backend applications(configuration only, no example runtime code, you can copy `node-docker` example runtime code).
6. `node-docker`: for containerized backend applications.

The TypeScript and Vitest configurations for each template are extensively simplified without sacrificing functionality. In most cases, only the configuration files in root folder need to be modified.

The `backups` folder stores copies of templates. You can always copy a fresh copy from it.

### 1. Changing Project Names

It is crucial to make sure that each project has a unique name. If you happen to have two projects with the same name, you will need to rename one of them.

Default projects names are unique enough that a search and replace function can be used to replace all instances of it. **Be sure to exclude `backups` folder before replacing.**

Note: the `react-app-e2e` project's `project.json` file also has instances of the `react-app` name, so be sure to update those as well when replacing the `react-app` name.

### 2. Updating the ESLint Configuration

Whenever you add a new copy of a template:

If the template is a `react-app` or `react-app-e2e`, **update the existing** `files` field in the appropriate ESLint `override` to include the path to the new project.

For `react-app`:

```json
{
    "files": [
        "packages/my-react-app/**/*.{ts,tsx,js,jsx}",
        "packages/my-other-react-app/**/*.{ts,tsx,js,jsx}"
    ],
    "extends": ["plugin:@nrwl/nx/react"]
}
```

For `react-app-e2e`:

```json
{
    "files": [
        "packages/my-react-app-e2e/**/*.{ts,tsx,js,jsx}",
        "packages/my-other-react-app-e2e/**/*.{ts,tsx,js,jsx}"
    ],
    "extends": ["plugin:cypress/recommended"]
}
```

It is recommended that you modify the new project name before adding the path to the `files` field in the ESLint `override` configuration.

No action is required for the other templates.

## Configuration Details

This section provides an in-depth look at the default configurations:

### 1. ESLint

1. Maintain a single ESLint config file at the root level, eliminating the need for project-level ESLint config files.
2. Utilize Prettier in conjunction with linting.
3. Ability to lint `.js`,`.jsx`,`.ts`,`.tsx`,`.json`,`.md`,`.yml` files.
4. All project templates run lint with the fix option enabled.
5. Ready for use with Husky and lint-staged(for pre-commit linting).
6. Remove unused imports during linting.
7. Ignore unused variables or arguments that are named with a leading `_`.
8. During pre-commit, Prettier is run a second time in addition to linting, as it covers a wider range of extensions.
9. Warn of `console.log` usage in the development environment, and throw errors for its use in pre-commit and CI. `console.info`, `console.warn`, and `console.error` do not trigger any warnings or errors. We allow `console.log` with a warning in development to accommodate common usage, but prevent its usage in pre-commit and CI to maintain a cleaner codebase.

### 2. Typescript Config

1. Absolute paths are ready for use in all project templates.
2. Simplifies importing CommonJS modules.
3. Allows for the import of CommonJS modules as the default export, even if no `exports.default` exists.
4. File name imports are case-sensitive.
5. Ensures all files are modules.
6. Allows for the import and resolution of JSON types.
7. Adds the type `undefined` when using an index to access an array or object with a `string` or `number` key type.
8. Prevents the assignment of `undefined` to types with optional modifiers, unless the optional type is explicitly unioned with `undefined`.

### 3. GitHub Actions

1. Cache node modules to improve build performance.
2. Supports multi-OS and multi-node versions.
3. Includes CodeQL analysis.
4. Builds and tags a Docker image with the current date and time on main branch push events, and pushes it to Docker Hub.

### 4. Docker

1. `Dockerfile` granular caching.
2. Maintain a single `Dockerfile` for different environments by utilizing environment variable in `docker-compose.yml`.
3. Volume mapping for both node and Postgres.

### 5. VS Code

1. File nesting settings.

## Additional Notes

The following sections are for informational purposes only and do not need to be followed in order to use this repository. They contain my thought process and development notes.

## How Tools are Chosen

The selection of these technologies has been carefully considered, with an emphasis on enhancing the developer experience, ensuring type safety, and promoting code and configurations reusability. The use of this setup is expected to lead to software that is more maintainable and has a longer lifespan.

When choosing tools, the following four qualities are considered in this order of importance:

1. Type safety: Ensuring type safety is essential for code scaling. Types bring benefits such as autocompletion and intrinsic documentation, and can serve as a "single source of truth" by keeping everyone in sync. Type safety can also eliminate the need for unnecessary runtime type checks and corresponding tests, improving code efficiency and scalability.

2. Ease of use: There are an infinite number of technologies to learn, but everyone only has 24 hours per day. It is important to choose tools that are easy to learn, easy to discard, and easy to relearn in order to respect developers' time.

3. Functionality: Ease of use is prioritized over functionality because more powerful tools often have a higher learning cost than their simpler counterparts. For example, GraphQL is more powerful than REST, but may require more effort to learn and may not be necessary for many use cases. REST is often sufficient for most applications.

4. Performance: While performance is important, it should not be the top priority if you do not have a functional product. That being said, many of the tools mentioned in this list are known for their fast performance compared to alternatives.

## Core Technologies

Technologies such as Docker, ESLint, Prettier, and TypeScript are not discussed here, as they are considered standard choices at this point. The following technologies play long-term roles in development, including folder structuring (Nx), API design (Zod), and database interaction (Prisma):

1. Nx: At present, Nx is a superior choice to Turbo Repo. While Turbo Repo is written in a faster language, Nx is still faster and has more functionality, including a dependency graph and an integrated repository. Nx also has a larger and more mature community. The absence of an integrated repository is a significant drawback for Turbo Repo, while Nx's integrated repository makes it better for code reuse and maintenance.

2. Zod: There are many validation libraries available, but Zod stands out with its user-friendly API and type inference approach. It combines validation and API schema into one, making it the heart of your API design. Zod is a bit slow, however, and may not be suitable for parsing large amounts of data.

3. Prisma: Prisma is the ORM with the best type safety. (That being said, I am not a fan of the schema-first approach because it adds cognitive cost (the need to learn a schema language). I prefer a code-first approach, specifically a type-first approach (using types as schemas)).

4. tRPC: If you are using Zod, tRPC is a good choice for your server and client because it has the best type safety. Additionally, tRPC works best in a monorepo, which fits well with the structure of this project.

## Replaceable Techs

The following are tools that I highly recommend, but you are free to choose alternatives:

1. Vite: A fast development build tool that utilizes ESM to outperform Create React App (Webpack) in the development environment.

2. Vitest: Easier to configure and featuring a very fast watch mode compared to Jest, with an API similar to Jest for those familiar with the library.

3. GitHub Actions: A clean and easy-to-use UI for automating tasks, hosted by the same company as your code for faster performance.

4. React: While not the best UI library, React has excellent TypeScript support and a large community with plenty of resources.

5. Mantine: A well-designed React UI library with a modern API and great documentation, offering a wide range of components and useful hooks. Highly recommended.

6. Zustand: A simple and easy-to-use state management library.

7. Emotion: The technology behind Mantine, with a similar API to styled-components.

8. PostgreSQL: A reliable, free, and open-source SQL database, widely considered one of the best and working well with Prisma. It is important to use a database supported by Prisma to ensure type safety.

## Reusing Configuration

To reduce the number of configuration files and make maintenance easier, it is important to reuse configuration as much as possible. Here's how configuration is reused in this setup:

1. ESLint: There is only one `.eslintrc.js` file in the root directory, which applies to all files. The `override.files` field can be used to apply different rules to individual files or folders, so there is no need for additional configuration files. When generating a new project, simply add its path to `override.files`.

2. Prettier: There is only one `.prettierrc.js` file and one `.prettierignore` file in the root directory, which apply to all files.

3. Vite: Each project should have one `vite.config.ts` file that imports a preset from `vite.presets.ts` in the root directory.

4. There are fours TS config files in the root directory:

    - `tsconfig.base.json`: responsible for basic configuration and does not participate in any compilation. It is directly extended by React projects.

    - `tsconfig.json`: extends `tsconfig.base.json` and is responsible for files in the root directory (does not include subdirectories). It compiles but does not emit.

    - `tsconfig.cypress.json`: extends `tsconfig.base.json` and is used by Cypress projects.

    - `tsconfig.node.json`: extends `tsconfig.base.json` and is used by node projects.

### Common configs

Common configs are added as much as possible and as close to the root as possible, even if they are not applicable to all projects. For example, assuming the base TS configuration includes the following:

```json
{
    "compilerOptions": {
        "types": ["A", "B", "C"]
    }
}
```

Project `A` only requires type `A` and not `B` and `C`, but `B` and `C` are still added. This is done to reduce maintenance requirements. Without these additional configs, the TS config of Project `A` would need to be modified if type `A` is no longer needed or if type `B` is now required.

As long as it does not cause any issues, including uncommon configs in the base configuration can help improve maintenance and make our development process more efficient. If necessary, we can create additional configuration files to extend from the base configuration.

To summarize, the key to maintaining low maintenance configuration files is to refactor them as follows:

1. Keep the base files as close to the root directory as possible.
2. Include as many configs as possible in the base files.
3. Multiple sub-base files in the root directory may be required, each targeting a specific project type.

## Commands

This sections di

## Final Thoughts

I hope this repository serves as a helpful starting point for your web development project and bring you the joy of development. The technologies listed above can help improve developer experience, ensure type safety, and promote code and configuration reusability. If you have any feedback, please don't hesitate to open an issue.
