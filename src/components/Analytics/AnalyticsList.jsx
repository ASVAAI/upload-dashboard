import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { IconChevronRight, IconChevronLeft } from '@tabler/icons-react';

function AnalyticsList() {
  const data = [
    { id: 1, sourceip: '172.31.8.48', source: 'Resume Parser', Time: '2024-07-18T19:39:16.926Z', Status: 'Success' },
    { id: 2, sourceip: '172.31.8.48', source: 'AI Parser', Time: '2024-07-18T19:39:16.926Z', Status: 'Success' },
    { id: 3, sourceip: '172.31.8.48', source: 'Resume Parser', Time: '2024-07-18T19:39:16.926Z', Status: 'Success' },
    { id: 4, sourceip: '172.31.8.48', source: 'Resume Parser', Time: '2024-07-18T19:39:16.926Z', Status: 'Success' },
    { id: 5, sourceip: '172.31.8.48', source: 'Normal Parser', Time: '2024-07-18T19:39:16.926Z', Status: 'Success' },
    { id: 6, sourceip: '172.31.8.48', source: 'Resume Parser', Time: '2024-07-18T19:39:16.926Z', Status: 'Success' },
    { id: 7, sourceip: '172.31.8.48', source: 'Resume Parser', Time: '2024-07-18T19:39:16.926Z', Status: 'Success' },
    { id: 8, sourceip: '172.31.8.48', source: 'Resume Parser', Time: '2024-07-18T19:39:16.926Z', Status: 'Success' },
    { id: 9, sourceip: '172.31.8.48', source: 'AI Parser', Time: '2024-07-18T19:39:16.926Z', Status: 'Success' },
    { id: 10, sourceip: '172.31.8.48', source: 'Resume Parser', Time: '2024-07-18T19:39:16.926Z', Status: 'Success' },
    { id: 11, sourceip: '172.31.8.48', source: 'Resume Parser', Time: '2024-07-18T19:39:16.926Z', Status: 'Success' },
    { id: 12, sourceip: '172.31.8.48', source: 'Normal Parser', Time: '2024-07-18T19:39:16.926Z', Status: 'Success' },
    { id: 13, sourceip: '172.31.8.48', source: 'Resume Parser', Time: '2024-07-18T19:39:16.926Z', Status: 'Success' },
    { id: 14, sourceip: '172.31.8.48', source: 'Resume Parser', Time: '2024-07-18T19:39:16.926Z', Status: 'Success' },
    { id: 15, sourceip: '172.31.8.48', source: 'AI Parser', Time: '2024-07-18T19:39:16.926Z', Status: 'Success' },
  ];

  const filterData = (data, startDate, endDate) => {
    if (!startDate || !endDate) return data;
    return data.filter(item => new Date(item.Time) >= startDate && new Date(item.Time) <= endDate);
  };

  const [filter, setFilter] = useState('all');
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [filteredData, setFilteredData] = useState(data);
  const [showDatePicker, setShowDatePicker] = useState(false);

  useEffect(() => {
    setFilteredData(filterData(data, startDate, endDate));
  }, [startDate, endDate]);

  const setDateRange = (range) => {
    const now = new Date();
    let start, end;
    switch (range) {
      case 'today':
        start = new Date(now.setHours(0, 0, 0, 0));
        end = new Date(now.setHours(23, 59, 59, 999));
        break;
      case 'yesterday':
        start = new Date(now.setDate(now.getDate() - 1));
        start.setHours(0, 0, 0, 0);
        end = new Date(now.setHours(23, 59, 59, 999));
        break;
      case 'thisMonth':
        start = new Date(now.getFullYear(), now.getMonth(), 1);
        end = new Date(now.getFullYear(), now.getMonth() + 1, 0, 23, 59, 59, 999);
        break;
      case 'lastMonth':
        start = new Date(now.getFullYear(), now.getMonth() - 1, 1);
        end = new Date(now.getFullYear(), now.getMonth(), 0, 23, 59, 59, 999);
        break;
      case 'thisYear':
        start = new Date(now.getFullYear(), 0, 1);
        end = new Date(now.getFullYear(), 11, 31, 23, 59, 59, 999);
        break;
      default:
        start = null;
        end = null;
        break;
    }
    setStartDate(start);
    setEndDate(end);
    if (range === 'custom') {
      setShowDatePicker(true);
    } else {
      setShowDatePicker(false);
    }
  };

  const handleFilterChange = (e) => {
    const filterValue = e.target.value;
    setFilter(filterValue);
    setDateRange(filterValue);
  };

  return (
    <section className='max-w-full max-h-96 overflow-auto border border-violet-500 bg-gray-50 py-'>
      <div className="bg-violet-200 flex justify-end mb- py-1 px-1 ">
        <select onChange={handleFilterChange} className="!border-2 !border-violet-400 rounded text-violet-500 !outline-none px-2">
          <option value="all">All</option>
          <option value="today">Today</option>
          <option value="yesterday">Yesterday</option>
          <option value="thisMonth">This Month</option>
          <option value="lastMonth">Last Month</option>
          <option value="thisYear">This Year</option>
          <option   value="custom">Custom Range</option>
        </select>
        {showDatePicker && (
          <div className="flex space-x-2 px-2">
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              selectsStart
              startDate={startDate}
              endDate={endDate}
              placeholderText="Start Date"
              className="!border-2 !border-violet-400 rounded text-violet-500 !outline-none px-1 placeholder:text-violet-400"
            />
            <DatePicker
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              selectsEnd
              startDate={startDate}
              endDate={endDate}
              placeholderText="End Date"
              minDate={startDate}
              className="!border-2 !border-violet-400 rounded text-violet-500 !outline-none px-1 placeholder:text-violet-400"
            />
          </div>
        )}
      </div>
      <table className="min-w-full border-collapse border-spacing-2 text-sm">
        <thead className='h-10 text-violet-500'>
          <tr className='bg-violet-200'>
            <th className='text-start px-2'>SOURCEIP</th>
            <th className='text-start px-2'>SOURCE</th>
            <th className='text-start px-2'>TIME</th>
            <th className='text-start px-2'>STATUS</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item) => (
            <tr key={item.id} className='hover:bg-violet-200 h-10'>
              <td className='px-2 flex justify-between pr-9 h-10 items-center group'>{item.sourceip}</td>
              <td className='px-2'>
                <div className='flex border-gray-400 border rounded-full px-2 max-w-32 min-w-28 justify-center items-center'>{item.source}</div>
              </td>
              <td className='px-2'>{new Date(item.Time).toLocaleString()}</td>
              <td>
                <div className='flex items-center gap-2 bg-gray-50 border-gray-400 border rounded-full px-2 max-w-28 justify-center'>
                  <div className='w-2 h-2 p-1 rounded-full bg-green-500'></div>
                  <div className='text-center'>{item.Status}</div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className='bg-emerald-00'>
        <div className='flex text-sm space-x-2 px-4 items-center justify-center sm:justify-normal'>
          <div className='font-semibold text-violet-500 text-center'>{1}-{filteredData.length} of {filteredData.length}</div>
          <div className='flex space-x-2 p-1'>
            <IconChevronLeft className='bg-gray-100 w-10 h-10 p-2 rounded-full text-gray-400 hover:text-violet-500 hover:bg-violet-200' />
            <IconChevronRight className='bg-gray-100 w-10 h-10 p-2 rounded-full text-gray-400 hover:text-violet-500 hover:bg-violet-200' />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AnalyticsList;
