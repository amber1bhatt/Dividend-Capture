import { Dispatch, SetStateAction, useState } from 'react';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { format } from 'date-fns';

interface CustomDatePickerProps {
    date: AdapterDateFns | null;
    setDate: Dispatch<SetStateAction<AdapterDateFns | null>>;
}

const CustomDatePicker = ({ date, setDate }: CustomDatePickerProps) => {
    // const [date, setDate] = useState<AdapterDateFns | null>(null);

    // console.log(date);
    // const x = format(new Date(new AdapterDateFns().date()), 'yyyy-MM-dd');
    // console.log(x);




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
