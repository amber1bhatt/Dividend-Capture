import BlankDateCards from '../components/BlankDateCards';
import DateCards from '../components/DateCards';

import { useQuery } from '@apollo/client';
import { GET_STOCKS } from '../queries/get-stocks';


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

const currentDate = new Date().toISOString().slice(0, 10);
console.log(currentDate)

const Home = () => {

    //select date from calender custom component

    const { loading, error, data } = useQuery(GET_STOCKS, {
        variables: {
            input: {
                date: "2023-01-20"
            },
        },
    });


    console.log(error, data);

    return (
        <>
            <div className="Home">
                <header>Dividend Capture Calender</header>
                {loading && <BlankDateCards />}
                {!error && !loading && <DateCards
                    data={data}
                />}
            </div>
        </>
    );
}

export default Home;
