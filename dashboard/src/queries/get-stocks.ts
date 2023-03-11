import { gql } from "@apollo/client";

export const GET_STOCKS = gql`
  query GetStocks($input: GetStocksInput!) {
    stocks(input: $input) {
      companyName
      symbol
      dividend_Ex_Date
      payment_Date
      record_Date
      dividend_Rate
      indicated_Annual_Dividend
      announcement_Date
    }
  }
`;
