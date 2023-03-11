import { gql } from "apollo-server";

const typeDefs = gql`
  type Stock {
    companyName: String!
    symbol: String!
    dividend_Ex_Date: String!
    payment_Date: String!
    record_Date: String!
    dividend_Rate: Float!
    indicated_Annual_Dividend: Float!
    announcement_Date: String!
  }

  type Query {
    stocks(input: GetStocksInput!): [Stock!]!
  }

  input GetStocksInput {
    date: String!
  }
`;

export { typeDefs };
