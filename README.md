# Typescript fullstack monorepo [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

### Codebase

#### Technologies

With the ground rules out of the way, let's talk about the coarse architecture of this mono repo:

- **Full-stack typescript**: We use Node.js to power our servers, and React to power our frontend. Almost all of the code you'll touch in this codebase will be Typescript.
- **Background Jobs**: We leverage background jobs (powered by [`serverless`](https://www.serverless.com/)).

Here is a list of all the big technologies we use:

- **Prisma**: Database orm
- **Redis**: Background jobs and caching
- **GraphQL**: API, powered by the custom graphql framework (middy-graphql inspired by [`middy`](https://middy.js.org/)).
- **React**: Frontend apps

## Structure

```
├── api (graphql server)
├── middy-graphql (custom graphql framework)
├── prisma (database orm)
├── public (public files used on the frontend)
├── shared (shared libs)
└── src (frontend)
```
