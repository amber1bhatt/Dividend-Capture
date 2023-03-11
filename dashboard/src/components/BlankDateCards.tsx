import { Card, CardHeader, Grid, Typography, CardContent } from "@mui/material";

export enum ImportantDates {
    DECLARATION_DATE = 'Declaration Date',
    EX_DIV_DATE = 'Ex Dividend Date',
    RECORD_DATE = 'Record Date',
    PAYMENT_DATE = 'Payment Date',
}

const cardHeaderTitles = [ImportantDates.DECLARATION_DATE, ImportantDates.EX_DIV_DATE, ImportantDates.RECORD_DATE, ImportantDates.PAYMENT_DATE];



const BlankDateCards = () => {
    return (
        <>
            <Grid sx={{ flexGrow: 1 }} container spacing={2}>
                {cardHeaderTitles.map((title) => {
                    return (
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            <Card sx={{ maxWidth: 345, textAlign: "center" }}>
                                <CardHeader title={title} />
                                <CardContent>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        No data available
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    );
                })}
            </Grid>
        </>
    );
}

export default BlankDateCards;