import React from 'react'
import AnalyticsList from './AnalyticsList'
import AnalyticsCalander from './AnalyticsCalander'
import AnalyticsChart from './AnalyticsChart'


function AnalyticsSubHeader() {
    
  return (
    <section>
        <div className='bg-gray-200 rounded-lg '>
            <div className='bg-gray-50 rounded border border-gray-300 py-1 px-1 '><AnalyticsChart/></div>
            <div className=' flex  justify-between py-4 px-4 items-center rounded-b-lg border-b border-y-gray-300 '>
                <div className='flex font-semibold text-2xl '>
                    <h3 className=''>Usage Detail</h3>
                </div>

                {/* <div>Filter here</div> */}
            </div>
            <div className='p-2'>
                <AnalyticsList/>
            </div>
        </div>
    </section>
  )
}

export default AnalyticsSubHeader