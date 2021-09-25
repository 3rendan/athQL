const { ApolloServer } = require("apollo-server");
const typeDefs = require("./schema");
const axios = require('axios');
const { mainCards } = require("./db")


const server = new ApolloServer({
  typeDefs,
  Query: {
    getItem: ({id}) =>{
      const res = axios(`https://digital.provath.org/api/items/${id}`)
        return response.json
    }
  },
})

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
