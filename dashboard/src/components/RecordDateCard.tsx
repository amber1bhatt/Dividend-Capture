import { Card, CardContent, CardHeader, Typography } from "@mui/material";

interface RecordDateCardProps {
    recordDate: string;
}

const RecordDateCard = (recDate: RecordDateCardProps) => {
    return (
        <Card sx={{ minWidth: 275, textAlign: 'center' }}>
            <CardHeader
                title="Record Date"
                subheader="Shareholders who will receive dividend solidified"
            />
            <CardContent>
                <Card variant="outlined">
                    <Typography variant="body1" color="textSecondary" component="p">
                        {recDate.recordDate}
                    </Typography>
                </Card>
            </CardContent>
        </Card>
    );

}

export default RecordDateCard