import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core'
import { createServer } from 'http'

const checkUser = token => null

export default async function startApolloServer({ typeDefs, resolvers, port }) {

  const app = express()

  // app.use((req,res,next) => {

  //   // req.headers.authorization

  //   const thisUser = checkUser(req.headers.authorization)

  //   req.user = thisUser

  //   next()
  // })

  const httpServer = createServer(app);
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
    context: ({ req }) => ({
      // user: req.user
    }),
  });
  await server.start();
  server.applyMiddleware({ app, path: '/graphql' });
  await new Promise(resolve => httpServer.listen({ port }, resolve));
  print(`Server ready at http://localhost:${port}${server.graphqlPath}`);
}