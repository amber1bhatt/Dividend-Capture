import { stockProvider } from "../providers";
import { Root } from "../schema/types/types";

interface GetStocksInput {
  date: string;
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

const stockResolver = {
  Query: {
    stocks: async (
      _: Root,
      args: { input: GetStocksInput }
    ): Promise<StockResults | null> => {
      return stockProvider.getStocks(args.input);
    },
  },
};

export { stockResolver };
