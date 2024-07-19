import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function AnalyticsChart() {
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

  const generateLabels = (filter) => {
    let labels = [];
    switch (filter) {
      case 'today':
      case 'yesterday':
        labels = Array.from({ length: 24 }, (_, i) => `${i}:00`);
        break;
      case 'thisMonth':
      case 'lastMonth':
        labels = Array.from({ length: 30 }, (_, i) => `Day ${i + 1}`);
        break;
      case 'thisYear':
        labels = Array.from({ length: 12 }, (_, i) => `Month ${i + 1}`);
        break;
      case 'all':
        labels = ['All'];
        break;
      case 'custom':
        labels = ['Custom Range'];
        break;
      default:
        labels = [];
        break;
    }
    return labels;
  };

  const filterDataForChart = (data, filter) => {
    const now = new Date();
    let filteredData = [];
    let yesterday;
    let lastMonth;
    switch (filter) {
      case 'today':
        filteredData = data.filter(item => new Date(item.Time).toDateString() === now.toDateString());
        break;
      case 'yesterday':
        yesterday = new Date(now);
        yesterday.setDate(now.getDate() - 1);
        filteredData = data.filter(item => new Date(item.Time).toDateString() === yesterday.toDateString());
        break;
      case 'thisMonth':
        filteredData = data.filter(item => new Date(item.Time).getMonth() === now.getMonth() && new Date(item.Time).getFullYear() === now.getFullYear());
        break;
      case 'lastMonth':
        lastMonth = new Date(now);
        lastMonth.setMonth(now.getMonth() - 1);
        filteredData = data.filter(item => new Date(item.Time).getMonth() === lastMonth.getMonth() && new Date(item.Time).getFullYear() === lastMonth.getFullYear());
        break;
      case 'thisYear':
        filteredData = data.filter(item => new Date(item.Time).getFullYear() === now.getFullYear());
        break;
      case 'custom':
        filteredData = data.filter(item => new Date(item.Time) >= startDate && new Date(item.Time) <= endDate);
        break;
      case 'all':
        filteredData = data;
        break;
      default:
        filteredData = data;
        break;
    }
    return filteredData;
  };

  const [filter, setFilter] = useState('all');
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    const filteredData = filterDataForChart(data, filter);
    const labels = generateLabels(filter);

    const sources = [...new Set(filteredData.map(item => item.source))];
    const sourceCounts = sources.reduce((acc, source) => {
      acc[source] = new Array(labels.length).fill(0);
      return acc;
    }, {});

    filteredData.forEach(item => {
      const time = new Date(item.Time);
      let index;
      switch (filter) {
        case 'today':
        case 'yesterday':
          index = time.getHours();
          break;
        case 'thisMonth':
        case 'lastMonth':
          index = time.getDate() - 1;
          break;
        case 'thisYear':
          index = time.getMonth();
          break;
        case 'all':
        case 'custom':
          index = 0; // Only one bar for 'all' and 'custom'
          break;
        default:
          index = -1;
          break;
      }
      if (index >= 0) {
        sourceCounts[item.source][index] += 1;
      }
    });

    const colors = ["#8b5cf6", "#a78bfa", "#c4b5fd"];
    const sourceColors = sources.reduce((acc, source, index) => {
      acc[source] = colors[index % colors.length];
      return acc;
    }, {});

    const datasets = sources.map((source, index) => ({
      label: source,
      data: sourceCounts[source],
      backgroundColor: sourceColors[source],
      borderColor: sourceColors[source],
      borderWidth: 1,
    }));

    setChartData({
      labels,
      datasets,
    });
  }, [filter, startDate, endDate]);

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
    if (e.target.value !== 'custom') {
      setStartDate(null);
      setEndDate(null);
    }
  };

  return (
    <div>
      <div className="bg- flex justify-end mb-4">
        <select onChange={handleFilterChange} className="!border-2 !border-violet-400 rounded text-gray-400">
          <option value="all">All</option>
          <option value="today">Today</option>
          <option value="yesterday">Yesterday</option>
          <option value="thisMonth">This Month</option>
          <option value="lastMonth">Last Month</option>
          <option value="thisYear">This Year</option>
          <option value="custom">Custom Range</option>
        </select>
        {filter === 'custom' && (
          <div className="flex space-x-2">
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              selectsStart
              startDate={startDate}
              endDate={endDate}
              placeholderText="Start Date"
              className="!border-2 !border-violet-400 rounded text-gray-400"
            />
            <DatePicker
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              selectsEnd
              startDate={startDate}
              endDate={endDate}
              placeholderText="End Date"
              minDate={startDate}
              className="!border-2 !border-violet-400 rounded text-gray-400"
            />
          </div>
        )}
      </div>
      <div className="">
        <Bar
          data={chartData}
          options={{
            plugins: {
              title: {
                display: true,
                text: 'Data Usage',
              },
              tooltip: {
                mode: 'index',
                intersect: false,
              },
            },
            responsive: true,
            scales: {
              x: {
                stacked: true,
              },
              y: {
                stacked: true,
              },
            },
          }}
        />
      </div>
    </div>
  );
}

export default AnalyticsChart;
