import { Card, CardContent, CardHeader, Typography } from "@mui/material";
import { useState } from "react";
import StockInfoModal from "./StockInfoModal";

interface DeclarationDateCardProps {
    data: StockData[]
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

const DeclarationDateCard = (stockData: DeclarationDateCardProps) => {

    const [open, setOpen] = useState<boolean>(false);
    const [individualStockData, setIndividualStockData] = useState<StockData>({} as StockData);

    return (
        <Card sx={{ minWidth: 275, textAlign: 'center' }}>
            <CardHeader
                title="Declaration Date"
                subheader="Dividend is announced"
            />
            <CardContent>
                {stockData.data.map((stock, id) => {
                    return (
                        <Card key={id} variant="outlined" onClick={() => { setOpen(!open); setIndividualStockData(stock) }}>
                            <Typography variant="body1" color="textSecondary" component="p" fontWeight="bold">
                                {stock.symbol}
                            </Typography>
                        </Card>
                    );
                })}
            </CardContent>
            <StockInfoModal open={open} stock={individualStockData} setOpen={setOpen} />
        </Card>
    );

}

export default DeclarationDateCard