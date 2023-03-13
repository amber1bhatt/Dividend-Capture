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

  type StockLastSalePrice {
    lastSalePrice: String!
  }

  type Query {
    stocks(input: GetStocksInput!): [Stock!]!
    stockPrice(input: GetStockPriceInput!): StockLastSalePrice!
  }

  input GetStocksInput {
    date: String!
  }

  input GetStockPriceInput {
    symbol: String!
  }
`;

export { typeDefs };
