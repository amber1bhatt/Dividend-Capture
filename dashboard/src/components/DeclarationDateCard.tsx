import { Box, Card, CardContent, CardHeader, Grid, Typography } from "@mui/material";
import { useState } from "react";
import { GET_LAST_STOCK_PRICE } from "../queries/get-last-stock-price";
import StockInfoModal from "./StockInfoModal";
import { useQuery } from "@apollo/client";

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

interface CurrentStockPrice {
    stockPrice: {
        lastSalePrice: string;
    }
}

const DeclarationDateCard = (stockData: DeclarationDateCardProps) => {

    const [open, setOpen] = useState<boolean>(false);
    const [individualStockData, setIndividualStockData] = useState<StockData>({} as StockData);

    const titleStyle = {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 1,
        // color: '#3f51b5',
        color: 'black',
        textAlign: 'center',
        paddingLeft: '5%',
        // paddingTop: '5%',
        fontFamily: 'Roboto',
    };

    const tickerStyle = {
        marginBottom: 1,
        // color: '#555',
        marginTop: 1,
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
        fontFamily: 'Roboto',
        fontSize: 16,
    };

    const dateStyle = {
        marginBottom: 2,
        // color: '#555',
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
        fontFamily: 'Roboto',
        fontSize: 16,
    };

    const dividerStyle = {
        // margin: '16px 0',
        // borderBottom: '1px solid #ddd',
        borderBottom: '1px solid white',
    };

    const infoStyle = {
        // display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '8px 0',
        // color: '#555',
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        fontFamily: 'Roboto',
    };

    const sortedStockData = [...stockData.data]
    sortedStockData.sort((a, b) => a.dividend_Rate - b.dividend_Rate > 0 ? -1 : 1);

    const getLastStockPrice = (ticker: string) => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const { loading, error, data } = useQuery<CurrentStockPrice>(GET_LAST_STOCK_PRICE, {
            variables: {
                input: {
                    symbol: ticker
                },
            },
        });

        return data?.stockPrice.lastSalePrice;
    }

    return (
        // <Card sx={{ width: '50%', textAlign: 'center' }}>
        //     <CardHeader
        //         title="Declaration Date"
        //         subheader="Dividend is announced"
        //     />
        //     <CardContent>
        <>
            {
                sortedStockData.map((stock, id) => {
                    const price = getLastStockPrice(stock.symbol) ?? 'Unknown'
                    const gain = (2000 / Number(price.replace('$', '')) * stock.dividend_Rate).toFixed(2)
                    return (
                        <Grid item>
                            <Box sx={{ marginBottom: '5%', justifyContent: 'center' }} gridColumn={"auto"}>
                                <Card sx={{ width: 300, textAlign: 'center', borderRadius: 3, background: '#956BAE' }} key={id} variant="outlined" onClick={() => { setOpen(!open); setIndividualStockData(stock) }}>
                                    {/* <Typography variant="body1" color="textSecondary" component="p" fontWeight="bold" margin='auto'>
                                {stock.symbol}
                            </Typography> */}
                                    <Card sx={{ height: 75, textAlign: 'center', paddingTop: '5%', background: '#F1B944' }}>
                                        <Typography sx={titleStyle} variant="h5" component="h2" noWrap>
                                            {stock.companyName}
                                        </Typography>
                                        <Typography sx={{ fontSize: 15, fontWeight: 'bold' }} variant="h5" component="h2" noWrap>
                                            {`Potential Gain on 2k: $${price !== 'Unknown' ? gain : 'Unknown'}`}
                                        </Typography>
                                    </Card>
                                    <div style={dividerStyle}></div>
                                    <Typography sx={tickerStyle} color="textSecondary">
                                        {stock.symbol}
                                    </Typography>
                                    <Typography sx={dateStyle} variant="body2" color="textSecondary">
                                        {`Announcement: ${stock.announcement_Date}`}
                                    </Typography>
                                    <Typography sx={dateStyle} color="textSecondary">
                                        {`Ex-Div: ${stock.dividend_Ex_Date}`}
                                    </Typography>
                                    <Typography sx={dateStyle} color="textSecondary">
                                        {`Record: ${stock.record_Date}`}
                                    </Typography>
                                    <Typography sx={dateStyle} color="textSecondary">
                                        {`Payment: ${stock.payment_Date}`}
                                    </Typography>
                                    <div style={dividerStyle}></div>
                                    <Card sx={{ height: 300, textAlign: 'center', background: '#27837B' }}>
                                        <div style={infoStyle}>
                                            <Typography sx={infoStyle} variant="body2">Current Price:</Typography>
                                            <Typography sx={infoStyle} variant="body2" color="textSecondary">
                                                {`${price}`}
                                            </Typography>
                                        </div>
                                        <div style={infoStyle}>
                                            <Typography sx={infoStyle} variant="body2">Dividend Rate:</Typography>
                                            <Typography sx={infoStyle} variant="body2" color="textSecondary">
                                                {`$${stock.dividend_Rate} / share`}
                                            </Typography>
                                        </div>
                                        <div style={infoStyle}>
                                            <Typography sx={infoStyle} variant="body2">Annual Dividend:</Typography>
                                            <Typography sx={infoStyle} variant="body2" color="textSecondary">
                                                {`$${stock.indicated_Annual_Dividend} / share`}
                                            </Typography>
                                        </div>
                                    </Card>
                                </Card>
                            </Box>
                        </Grid>
                    );
                })
            }
        </>
        // </CardContent>
        // <StockInfoModal open={open} stock={individualStockData} setOpen={setOpen} />
        // </Card>

    );

}

export default DeclarationDateCard