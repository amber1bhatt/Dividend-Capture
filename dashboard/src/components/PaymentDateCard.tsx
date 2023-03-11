import { Card, CardContent, CardHeader, Typography } from "@mui/material";

interface PaymentDateCardProps {
    symbols: string[];
    dates: string[];
}

const PaymentDateCard = (stockList: PaymentDateCardProps) => {
    return (
        <Card sx={{ minWidth: 275, textAlign: 'center' }}>
            <CardHeader
                title="Payment Date"
                subheader="Investors receive dividend"
            />
            <CardContent>
                {stockList.symbols.map((stock, id) => {
                    return (
                        <Card key={id} variant="outlined">
                            <Typography variant="body1" color="textSecondary" component="p" fontWeight="bold">
                                {`${stock} - ${stockList.dates[stockList.symbols.indexOf(stock)]}`}
                            </Typography>
                        </Card>
                    );
                })}
            </CardContent>
        </Card>
    );

}

export default PaymentDateCard