import { Card, CardContent, CardHeader, Typography } from "@mui/material";

interface DeclarationDateCardProps {
    symbols: string[];
    dates: string[];
}

const DeclarationDateCard = (stockList: DeclarationDateCardProps) => {
    return (
        <Card sx={{ minWidth: 275, textAlign: 'center' }}>
            <CardHeader
                title="Declaration Date"
                subheader="Dividend is announced"
            />
            <CardContent>
                {stockList.symbols.map((stock) => {
                    return (
                        <Card variant="outlined" onClick={() => console.log("HELLO")}>
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

export default DeclarationDateCard