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
5. Create prisma binding `src/db.js`
