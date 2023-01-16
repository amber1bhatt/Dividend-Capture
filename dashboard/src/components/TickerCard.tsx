import { Card, CardHeader, CardContent, Typography } from "@mui/material";

interface TickerCardProps {
    ticker: string;
    declarationDate: string;
    exDivDate: string;
    recordDate: string;
    paymentDate: string;
}

const TickerCard = (props: TickerCardProps) => {
    const { ticker, declarationDate, exDivDate, recordDate, paymentDate } = props;

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