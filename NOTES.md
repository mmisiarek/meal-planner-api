# How this project was developed

## DAY 1

### Prisma

1. Create account on `https://app.prisma.io`
2. `npm i -g prisma`
3. `prisma login`
4. `prisma init`
    ```
    $ Set up a new Prisma server or deploy to an existing server: Demo server + MySQL database
    $ Choose the region of your demo server: michal-bfd436/demo-eu1
    $ Choose a name for your service: meal-planner-api
    $ Choose a name for your stage: dev
    $ Select the programming language for the generated Prisma client: Don't generate
    ```

#### Schemas

1. Input schema: `datamodel.prisma`
2. Output schema (generated after running `npm run deploy`) `src/generated/prisma.graphql`

### Yoga

5. Create prisma binding `src/db.js`
6. Create yoga server `src/createServer.js`

#### Schema

This schema is some kind of API for our front apps.

-   `src/schema.graphql`
