import { Card, CardHeader, CardContent, Typography } from "@mui/material";

export interface ITickerCard {
    ticker: string;
    declarationDate: string;
    exDivDate: string;
    recordDate: string;
    paymentDate: string;
}

interface TickerCardProps {
    tickerCard: ITickerCard;
}

const TickerCard = (tickerCard: TickerCardProps) => {
    const { ticker, declarationDate, exDivDate, recordDate, paymentDate } = tickerCard.tickerCard;

    return (
        <Card sx={{ maxWidth: 345, textAlign: "center" }}>
            <CardHeader title={ticker} />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    Declaration Date: {declarationDate}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    Ex Div Date: {exDivDate}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    Record Date: {recordDate}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    Payment Date: {paymentDate}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default TickerCard;