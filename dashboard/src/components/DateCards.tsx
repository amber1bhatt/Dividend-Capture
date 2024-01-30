import { Grid } from "@mui/material";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { Dispatch, SetStateAction } from "react";
import CustomDatePicker from "./CustomDatePicker";
import DeclarationDateCard from "./DeclarationDateCard";
// import ExDividendDateCard from "./ExDividendDateCard";
// import PaymentDateCard from "./PaymentDateCard";
// import RecordDateCard from "./RecordDateCard";

interface DateCardsProps {
    data: StockData[]
    date: AdapterDateFns | null
    setDate: Dispatch<SetStateAction<AdapterDateFns | null>>
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

const DateCards = ({ data, date, setDate }: DateCardsProps) => {

    const stocks = data
    // const exDivDate = stocks[0].dividend_Ex_Date;
    // const recordDate = stocks[0].record_Date;

    // const symbols = stocks.map((stock: StockData) => stock.symbol);
    // const paymentDates = stocks.map((stock: StockData) => stock.payment_Date).sort((a, b) => {
    //     return new Date(b).getTime() - new Date(a).getTime();
    // });

    return (
        <>
            <CustomDatePicker date={date} setDate={setDate} />
            <Grid sx={{ flexGrow: 1 }} container justifyContent='center' spacing={4}>
                {/* <Grid item xs={12} sm={6} md={4} lg={3}> */}
                <DeclarationDateCard data={stocks} />
                {/* </Grid> */}
                {/* <Grid item xs={8} sm={6} md={4} lg={3}>
                    <ExDividendDateCard exDividendDate={exDivDate} />
                </Grid>
                <Grid item xs={8} sm={6} md={4} lg={3}>
                    <RecordDateCard recordDate={recordDate} />
                </Grid>
                <Grid item xs={8} sm={6} md={4} lg={3}>
                    <PaymentDateCard symbols={symbols} dates={paymentDates} />
                </Grid> */}
            </Grid>
        </>
    );
}

export default DateCards;