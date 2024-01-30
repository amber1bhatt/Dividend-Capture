import { Grid } from "@mui/material";
import TickerCard, { ITickerCard } from "./TickerCard";


export interface TickerCardList {
    tickerList: ITickerCard[];
}

interface TickerCardListProps {
    tickerList: ITickerCard[];
}

const TickerCardList = (tickerList: TickerCardListProps) => {
    return (
        <>
            <Grid sx={{ flexGrow: 1 }} container spacing={2}>
                {tickerList.tickerList.map((tickerCard) => {
                    return (
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            <TickerCard tickerCard={tickerCard} />
                        </Grid>
                    );
                })}
            </Grid>
        </>
    );
};

export default TickerCardList;