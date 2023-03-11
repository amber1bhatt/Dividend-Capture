import { Dispatch, SetStateAction } from 'react';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'

interface CustomDatePickerProps {
    date: AdapterDateFns | null;
    setDate: Dispatch<SetStateAction<AdapterDateFns | null>>;
}

const CustomDatePicker = ({ date, setDate }: CustomDatePickerProps) => {
    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
                defaultValue={new AdapterDateFns()}
                value={date}
                onChange={(pickedDate) => setDate(pickedDate)}
            />
        </LocalizationProvider>
    );
}

export default CustomDatePicker;
