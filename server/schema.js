const { gql } = require('apollo-server');

const typeDefs = gql`
  type Item {
    id: ID!,
    image: String!
    title: String!
    rating: Float
    price: String!
    description: [String!]!
    slug: String!
    stock: Int!
    onSale: Boolean
    category: Category
    }
`;
module.exports = typeDefs;
