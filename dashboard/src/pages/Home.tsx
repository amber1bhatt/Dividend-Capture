import BlankDateCards from '../components/BlankDateCards';
import DateCards from '../components/DateCards';

import { useQuery } from '@apollo/client';
import { GET_STOCKS } from '../queries/get-stocks';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { useState } from 'react';
import { endOfDay, format } from 'date-fns';


interface QueryData {
    stocks: StockData[];
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

const Home = () => {

    const [date, setDate] = useState<AdapterDateFns | null>(new AdapterDateFns());
    const adapterDateFNSToDate = new Date(date?.toString().split(' ').slice(1, 4).join('-') ?? '');
    const selectedDate = adapterDateFNSToDate.toString() !== 'Invalid Date' ? format(adapterDateFNSToDate, 'yyyy-MM-dd') : format(endOfDay(new Date()), 'yyyy-MM-dd');

    const { loading, error, data } = useQuery<QueryData>(GET_STOCKS, {
        variables: {
            input: {
                date: selectedDate
            },
        },
    });

    return (
        <div className="Home">
            <header style={{ paddingBottom: "10px", fontSize: "24px", fontWeight: "bold", textAlign: "center" }}>
                Dividend Capture Calendar
            </header>
            {(loading || error || data?.stocks === null) && <BlankDateCards date={date} setDate={setDate} />}
            {!error && !loading && data?.stocks && <DateCards
                data={data.stocks}
                date={date}
                setDate={setDate}
            />}
        </div>

    );
}

export default Home;
