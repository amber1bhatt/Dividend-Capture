import { gql } from "apollo-server";
const typeDefs = gql `
  type Stock {
    ticker: String!
    companyName: String!
    paymentDate: String!
    dividendAmount: Float!
    yield: Float!
  }

  type Query {
    stocks(input: GetStocksInput!): [Stock!]!
  }

  input GetStocksInput {
    date: String!
  }
`;
export { typeDefs };
