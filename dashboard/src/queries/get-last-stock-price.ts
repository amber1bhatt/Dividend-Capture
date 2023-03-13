import { gql } from "@apollo/client";

export const GET_LAST_STOCK_PRICE = gql`
  query GetLastStockPrice($input: GetStockPriceInput!) {
    stockPrice(input: $input) {
      lastSalePrice
    }
  }
`;
