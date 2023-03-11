import { Grid } from "@mui/material";
import DeclarationDateCard from "./DeclarationDateCard";
import ExDividendDateCard from "./ExDividendDateCard";
import PaymentDateCard from "./PaymentDateCard";
import RecordDateCard from "./RecordDateCard";

interface DateCardsProps {
    data: {
        stocks: StockData[];
    }
}

interface StockData {
    companyName: string;
    symbol: string;
    dividend_Ex_Date: string;
    payment_Date: string;
    record_Date: string;
    dividend_Rate: number;
    indicated_Annual_Dividend: number;
    announcement_Date: string;
}

const DateCards = (data: DateCardsProps) => {

    const { stocks } = data?.data
    const exDivDate = stocks[0].dividend_Ex_Date;
    const recordDate = stocks[0].record_Date;

    const symbols = stocks.map((stock: StockData) => stock.symbol);
    const declarationDates = stocks.map((stock: StockData) => stock.announcement_Date);
    const paymentDates = stocks.map((stock: StockData) => stock.payment_Date).sort((a, b) => {
        return new Date(b).getTime() - new Date(a).getTime();
    });

    //using lodash groupBy, group the paymentDates by dates
    // const groupedPaymentDates = groupBy(paymentDates, (date) => {
    //     return date;
    // });

    return (
        <>
            <Grid sx={{ flexGrow: 1 }} container spacing={2}>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <DeclarationDateCard symbols={symbols} dates={declarationDates} />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <ExDividendDateCard exDividendDate={exDivDate} />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <RecordDateCard recordDate={recordDate} />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <PaymentDateCard symbols={symbols} dates={paymentDates} />
                </Grid>
            </Grid>
        </>
    );
}

export default DateCards;