import axios from "axios";

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

class StockProvider {
  public async getStocks(input: GetStocksInput): Promise<StockResults | null> {
    const returnValues = await axios.get(
      //YYYY-MM-DD
      `https://api.nasdaq.com/api/calendar/dividends?date=${input.date}`
    );

    if (!returnValues) {
      return null;
    }

    console.log(returnValues.data.data.calendar.rows);
    return returnValues.data.data.calendar.rows;
  }

  public async getStockPrice(
    input: GetStockPriceInput
  ): Promise<StockLastSalePrice> {
    const returnValues = await axios.get(
      `https://api.nasdaq.com/api/quote/${input.symbol}/info?assetclass=stocks`
    );

    console.log(returnValues.data.data.primaryData);
    return returnValues.data.data.primaryData;
  }
}

export { StockProvider };
