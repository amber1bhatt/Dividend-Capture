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
      `https://api.nasdaq.com/api/calendar/dividends?date=${input.date}`,
      {
        headers: {
          Accept: "application/json, text/plain, */*",
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36",
          "Accept-Encoding": "gzip, deflate, br",
          "Accept-Language": "en-US,en;q=0.9",
          Origin: "https://www.nasdaq.com",
          Referer: "https://www.nasdaq.com/",
          "Sec-Ch-Ua":
            '"Google Chrome";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
          "Sec-Ch-Ua-Mobile": "?0",
          "Sec-Ch-Ua-Platform": '"Windows"',
          "Sec-Fetch-Dest": "empty",
          "Sec-Fetch-Mode": "cors",
          "Sec-Fetch-Site": "same-site",
        },
      }
    );

    if (!returnValues) {
      return null;
    }

    //if companyName is null replace with symbol
    returnValues.data.data.calendar.rows.forEach((element: StockResults) => {
      console.log(element);
      if (element.companyName === null) {
        element.companyName = element.symbol;
      }
    });

    // console.log(returnValues.data.data.calendar.rows);
    return returnValues.data.data.calendar.rows;
  }

  public async getStockPrice(
    input: GetStockPriceInput
  ): Promise<StockLastSalePrice> {
    const returnValues = await axios.get(
      `https://api.nasdaq.com/api/quote/${input.symbol}/info?assetclass=stocks`,
      {
        headers: {
          Accept: "application/json, text/plain, */*",
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36",
          "Accept-Encoding": "gzip, deflate, br",
          "Accept-Language": "en-US,en;q=0.9",
          Origin: "https://www.nasdaq.com",
          Referer: "https://www.nasdaq.com/",
          "Sec-Ch-Ua":
            '"Google Chrome";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
          "Sec-Ch-Ua-Mobile": "?0",
          "Sec-Ch-Ua-Platform": '"Windows"',
          "Sec-Fetch-Dest": "empty",
          "Sec-Fetch-Mode": "cors",
          "Sec-Fetch-Site": "same-site",
        },
      }
    );

    // console.log(returnValues.data.data.primaryData);
    return returnValues.data.data.primaryData;
  }
}

export { StockProvider };
