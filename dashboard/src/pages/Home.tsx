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

    //select date from calender custom component
    const [date, setDate] = useState<AdapterDateFns | null>(new AdapterDateFns());

    // console.log(format(new Date(date?.toJsDate(x => x)), 'yyyy-MM-dd'));

    const adapterDateFNSToDate = new Date(date?.toString().split(' ').slice(1, 4).join('-') ?? '');
    const selectedDate = adapterDateFNSToDate.toString() !== 'Invalid Date' ? format(adapterDateFNSToDate, 'yyyy-MM-dd') : format(endOfDay(new Date()), 'yyyy-MM-dd');


    // console.log(date !== null ? format(new Date(date.date()), 'yyyy-MM-dd') : 'date is null');

    // console.log(new Date(date?.toString().split(' ').slice(1, 4).join('-') === "Invalid Date" ? ''));

    // const selectedDate = new Date(date?.toString().split(' ').slice(1, 4).join('-') ?? '');
    // console.log(selectedDate);

    // console.log(date ? format(new Date(date.toString()), 'yyyy-MM-dd') : 'date is null');

    // const selectedDate = date ? format(new Date(date), 'yyyy-MM-dd') : '';
    // const selectedDate = date ? date.format(date.getValue(), 'yyyy-MM-dd') : '';

    // console.log(selectedDate)

    const { loading, error, data } = useQuery<QueryData>(GET_STOCKS, {
        variables: {
            input: {
                date: selectedDate
            },
        },
    });


    console.log(error, data);

    return (
        <>
            <div className="Home">
                <header>Dividend Capture Calender</header>
                {(loading || error || data?.stocks === null) && <BlankDateCards date={date} setDate={setDate} />}
                {!error && !loading && data?.stocks && <DateCards
                    data={data.stocks}
                    date={date}
                    setDate={setDate}
                />}
            </div>
        </>
    );
}

export default Home;
