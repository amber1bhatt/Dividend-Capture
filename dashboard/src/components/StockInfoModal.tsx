import { useQuery } from "@apollo/client";
import { Card, CardContent, Modal, Typography } from "@mui/material";
import { GET_LAST_STOCK_PRICE } from "../queries/get-last-stock-price";

interface StockInfoModalProps {
    open: boolean;
    setOpen: (open: boolean) => void;
    stock: StockData;
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

interface StockPrice {
    stockPrice: { lastSalePrice: string };
}

const StockInfoModal = (props: StockInfoModalProps) => {
    const { open, setOpen, stock } = props;
    const handleClose = () => setOpen(false);

    const rootStyle = {
        width: 400,
        borderRadius: 8,
        overflow: 'hidden',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
    };

    const titleStyle = {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 1,
        color: '#3f51b5',
        textAlign: 'center',
    };

    const tickerStyle = {
        marginBottom: 1,
        color: '#555',
        textAlign: 'center',
    };

    const dateStyle = {
        marginBottom: 12,
        color: '#555',
        textAlign: 'center',
    };

    const dividerStyle = {
        margin: '16px 0',
        borderBottom: '1px solid #ddd',
    };

    const infoStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '8px 0',
        color: '#555',
        fontSize: 14,
    };

    const { loading, error, data } = useQuery<StockPrice>(GET_LAST_STOCK_PRICE, {
        variables: {
            input: {
                symbol: stock.symbol
            },
        },
    });

    // const stockPrice = parseInt(data ? data.stockPrice.lastSalePrice : '0');
    const stockPrice = parseFloat(data ? data.stockPrice.lastSalePrice.replace('$', '') : '0');

    return (
        <Modal
            open={open}
            onClose={handleClose}
        >
            <Card sx={rootStyle}>
                <CardContent>
                    <Typography sx={titleStyle} variant="h5" component="h2">
                        {stock.companyName}
                    </Typography>
                    <Typography sx={tickerStyle} color="textSecondary">
                        {stock.symbol}
                    </Typography>
                    <Typography sx={dateStyle} color="textSecondary">
                        {stock.announcement_Date}
                    </Typography>
                    <div style={dividerStyle}></div>
                    <div style={infoStyle}>
                        <Typography variant="body2">Dividend Rate:</Typography>
                        <Typography variant="body2" color="textSecondary">
                            {`$${stock.dividend_Rate} / share`}
                        </Typography>
                    </div>
                    <div style={infoStyle}>
                        <Typography variant="body2">Annual Dividend:</Typography>
                        <Typography variant="body2" color="textSecondary">
                            {`$${stock.indicated_Annual_Dividend} / share`}
                        </Typography>
                    </div>
                    <div style={infoStyle}>
                        <Typography variant="body2">Last Sale Price:</Typography>
                        {loading && <Typography variant="body2" color="textSecondary">
                            Loading...
                        </Typography>
                        }
                        {(!loading && !error) && <Typography variant="body2" color="textSecondary">
                            {`${data?.stockPrice.lastSalePrice}`}
                        </Typography>}
                    </div>
                    <div style={infoStyle}>
                        <Typography variant="body2" fontWeight={"bold"}>Anticipated Gain on $1000:</Typography>
                        {loading && <Typography variant="body2" color="textSecondary">
                            Loading...
                        </Typography>
                        }
                        {(!loading && !error) && <Typography variant="body2" color="textSecondary">{`$${((1000 / stockPrice) * stock.dividend_Rate).toFixed(2)}`}</Typography>}
                    </div>
                </CardContent>
            </Card>
        </Modal>
    );
};

export default StockInfoModal;