import React,{useState} from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'

function AnalyticsCalander() {
    const [date, setDate] = useState(new Date());
    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();

  return (
    <div className='bg-red-400'>
        <DatePicker className='flex bg-orange-100 text-blue-300' selected={date} dateFormat="dd MMM yyyy" onChange={(date) => setDate(date)}/>
    </div>
  )
}

export default AnalyticsCalander