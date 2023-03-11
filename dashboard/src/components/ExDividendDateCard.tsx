import { Card, CardContent, CardHeader, Typography } from "@mui/material";

interface ExDividendDateCardProps {
    exDividendDate: string;
}

const ExDividendDateCard = (exDivDate: ExDividendDateCardProps) => {
    return (
        <Card sx={{ minWidth: 275, textAlign: 'center' }}>
            <CardHeader
                title="Ex Dividend Date"
                subheader="No longer entitled to dividend past this date"
            />
            <CardContent>
                <Card variant="outlined">
                    <Typography variant="body1" color="textSecondary" component="p">
                        {exDivDate.exDividendDate}
                    </Typography>
                </Card>
            </CardContent>
        </Card>
    );

}

export default ExDividendDateCard