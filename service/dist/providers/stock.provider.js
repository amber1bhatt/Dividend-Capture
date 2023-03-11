import axios from "axios";
class StockProvider {
    async getStocks(input) {
        const returnValues = await axios.get("https://api.nasdaq.com/api/calendar/dividends?date=2023-02-22");
        console.log(returnValues);
        return "WORKED";
    }
}
export { StockProvider };
