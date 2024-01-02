import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import EditCalendarRoundedIcon from '@mui/icons-material/EditCalendarRounded';
import { Dayjs } from 'dayjs';

type dateprops = {
  setdate: React.Dispatch<React.SetStateAction<Dayjs | null>>
}

export default function ResponsiveDatePickers({setdate}: dateprops) {
  return (
    <div className='Datepick'>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker']}>
        <DatePicker
          slots={{
            openPickerIcon: EditCalendarRoundedIcon,
          }}
          onChange={(newValue: Dayjs | null) => setdate(newValue)}
        />
      </DemoContainer>
    </LocalizationProvider>
    </div>
  );
}