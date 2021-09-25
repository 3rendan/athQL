const { ApolloServer } = require("apollo-server")
const typeDefs = require("./schema")

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Item,
    Query
  },
})

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
