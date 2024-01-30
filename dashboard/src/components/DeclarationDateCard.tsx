import { Box, Card, Grid, Typography } from "@mui/material";
import { useState } from "react";
import { GET_LAST_STOCK_PRICE } from "../queries/get-last-stock-price";
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

const DeclarationDateCard = ({ data }: DeclarationDateCardProps) => {
    const [open, setOpen] = useState<boolean>(false);
    const [, setIndividualStockData] = useState<StockData>({} as StockData);

    const commonTextStyle = {
        fontFamily: 'Roboto',
    };

    const colorStyles = {
        white: '#ffffff',
        black: '#000000',
        gray: '#808080',
        orange: '#FFA500',
        lightBlue: '#ADD8E6',
        darkBlue: '#0000FF',
        gold: '#998100',
        green: '#006400',
        headerColor: '#4CB5F5',
        cardBackgroundColor: '#f1f1f1'
    };

    const titleStyle = {
        ...commonTextStyle,
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 1,
        color: colorStyles.white,
        textAlign: 'center',
        paddingLeft: '5%',
    };

    const textStyle = {
        ...commonTextStyle,
        marginBottom: 2,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 16,
        marginTop: 1
    };

    const dividerStyle = {
        borderBottom: `3px solid ${colorStyles.headerColor}`,
        borderColor: colorStyles.headerColor
    };

    const infoStyle = {
        ...commonTextStyle,
        fontSize: 16,
        fontWeight: 'bold',
        padding: "8px 0px"
    };

    const sortedStockData = [...data];
    sortedStockData.sort((a, b) => a.dividend_Rate - b.dividend_Rate > 0 ? -1 : 1);

    const GetLastStockPrice = (ticker: string) => {
        const { data } = useQuery<CurrentStockPrice>(GET_LAST_STOCK_PRICE, {
            variables: {
                input: {
                    symbol: ticker,
                },
            },
        });

        return data?.stockPrice.lastSalePrice;
    };

    return (
        <>
            {sortedStockData.map((stock, id) => {
                const price = GetLastStockPrice(stock.symbol) ?? 'Unknown';
                const gain = (1000 / Number(price.replace('$', '')) * stock.dividend_Rate).toFixed(2);

                return (
                    <Grid key={id} item>
                        <Box sx={{ marginBottom: '5%', justifyContent: 'center' }} gridColumn="auto">
                            <Card
                                sx={{ width: 300, textAlign: 'center', borderRadius: 3, background: colorStyles.cardBackgroundColor, borderColor: colorStyles.headerColor, borderWidth: "3px" }}
                                key={id}
                                variant="outlined"
                                onClick={() => {
                                    setOpen(!open);
                                    setIndividualStockData(stock);
                                }}
                            >
                                <Card sx={{ height: 75, textAlign: 'center', paddingTop: '5%', background: colorStyles.headerColor, borderRadius: '3px 3px 0 0' }}>
                                    <Typography sx={titleStyle} variant="h5" component="h2" noWrap>
                                        {stock.companyName}
                                    </Typography>
                                    <Typography sx={{ fontSize: 15, fontWeight: 'bold' }} variant="h5" component="h2" noWrap>
                                        {`Potential Gain on 1k: $${price !== 'Unknown' ? gain : 'Unknown'}`}
                                    </Typography>
                                </Card>
                                <div style={dividerStyle}></div>
                                <Typography sx={{ ...textStyle, color: colorStyles.black }}>{stock.symbol}</Typography>
                                <Typography sx={{ ...textStyle, color: colorStyles.orange }}>
                                    {`Announcement: ${stock.announcement_Date}`}
                                </Typography>
                                <Typography sx={{ ...textStyle, color: colorStyles.lightBlue }}>
                                    {`Ex-Div: ${stock.dividend_Ex_Date}`}
                                </Typography>
                                <Typography sx={{ ...textStyle, color: colorStyles.darkBlue }}>
                                    {`Record: ${stock.record_Date}`}
                                </Typography>
                                <Typography sx={{ ...textStyle, color: colorStyles.gold }}>
                                    {`Payment: ${stock.payment_Date}`}
                                </Typography>
                                <div style={dividerStyle}></div>
                                <Card sx={{ height: 300, textAlign: 'center', background: colorStyles.cardBackgroundColor }}>
                                    <div style={infoStyle}>
                                        <Typography sx={{ ...infoStyle, color: colorStyles.black }}>Current Price:</Typography>
                                        <Typography sx={{ ...infoStyle, color: colorStyles.gray }}>
                                            {`${price}`}
                                        </Typography>
                                    </div>
                                    <div style={infoStyle}>
                                        <Typography sx={{ ...infoStyle, color: colorStyles.black }}>Dividend Rate:</Typography>
                                        <Typography sx={{ ...infoStyle, color: colorStyles.green }}>
                                            {`$${stock.dividend_Rate} / share`}
                                        </Typography>
                                    </div>
                                    <div style={infoStyle}>
                                        <Typography sx={{ ...infoStyle, color: colorStyles.black }}>Annual Dividend:</Typography>
                                        <Typography sx={{ ...infoStyle, color: colorStyles.gold }}>
                                            {`$${stock.indicated_Annual_Dividend} / share`}
                                        </Typography>
                                    </div>
                                </Card>
                            </Card>
                        </Box>
                    </Grid>
                );
            })}
        </>
    );
};

export default DeclarationDateCard;