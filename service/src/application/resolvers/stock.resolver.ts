import { stockProvider } from "../providers";
import { Root } from "../schema/types/types";

interface GetStocksInput {
  date: string;
}

interface GetStockPriceInput {
  symbol: string;
}

interface StockResults {
  companyName: string;
  symbol: string;
  dividend_Ex_Date: string;
  payment_Date: string;
  record_Date: string;
  dividend_Rate: number;
  indicated_Annual_Dividend: number;
  announcement_Date: string;
}

interface StockLastSalePrice {
  primaryData: { lastSalePrice: string };
}

const stockResolver = {
  Query: {
    stocks: async (
      _: Root,
      args: { input: GetStocksInput }
    ): Promise<StockResults | null> => {
      return stockProvider.getStocks(args.input);
    },

    stockPrice: async (
      _: Root,
      args: { input: GetStockPriceInput }
    ): Promise<StockLastSalePrice> => {
      return stockProvider.getStockPrice(args.input);
    },
  },
};

export { stockResolver };
