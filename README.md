# GraphQL API for Meal Planner

## Schemas

### Input for Prisma

-   `datamodel.prisma`

### Output from Prisma and input for yoga

To make your server talking to prisma server you need to configure `prisma-binding`. For that you need to know what Queries and Mutations are acceptable by prisma.

Deploy to prisma is configured in `prisma.yml`. There you can find a post hook: `graphql get-schema -p prisma`. This command fetches the schema from the prisma remote server and writes it to the file:

-   `src/generated/prisma.graphql`

This file is the input for your yoga-server.

### Yoga's API for front apps

Yoga exposes its own server. The API available for its clients is defined in:

-   `src/schema.graphql`
