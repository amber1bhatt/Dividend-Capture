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

    return (
        <div style={{ textAlign: 'center' }}>
            <CustomDatePicker date={date} setDate={setDate} />
            <Grid sx={{ flexGrow: 1 }} container justifyContent='center' spacing={4}>
                <DeclarationDateCard data={stocks} />
            </Grid>
        </div>
    );
}

export default DateCards;