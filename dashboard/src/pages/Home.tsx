import React from 'react';
import TickerCard from '../components/TickerCard';

const tempTickerCard = {
    ticker: "AAPL",
    declarationDate: "2021-09-10",
    exDivDate: "2021-09-10",
    recordDate: "2021-09-10",
    paymentDate: "2021-09-10",
}

const Home = () => {

    const { ticker, declarationDate, exDivDate, recordDate, paymentDate } = tempTickerCard;

    return (
        <div className="Home">
            <header>Dividend Capture Calender</header>
            <TickerCard ticker={ticker} declarationDate={declarationDate} exDivDate={exDivDate} recordDate={recordDate} paymentDate={paymentDate} />
        </div>
    );
}

export default Home;
