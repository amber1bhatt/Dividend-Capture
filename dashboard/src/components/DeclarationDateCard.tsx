import { Box, Card, CardContent, CardHeader, Typography } from "@mui/material";
import { useState } from "react";
import { GET_LAST_STOCK_PRICE } from "../queries/get-last-stock-price";
import StockInfoModal from "./StockInfoModal";

interface DeclarationDateCardProps {
    data: StockData[];
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
                        <Box sx={{ marginBottom: '5%' }}>
                            <Card sx={{ width: 150, textAlign: 'center', margin: 'auto', borderRadius: 3 }} key={id} variant="outlined" onClick={() => { setOpen(!open); setIndividualStockData(stock) }}>
                                <Typography variant="body1" color="textSecondary" component="p" fontWeight="bold" margin='auto'>
                                    {`${stock.symbol} | ${stock.announcement_Date}`}
                                </Typography>
                            </Card>
                        </Box>
                    );
                })}
            </CardContent>
            <StockInfoModal open={open} stock={individualStockData} setOpen={setOpen} />
        </Card>

    );

}

export default DeclarationDateCard