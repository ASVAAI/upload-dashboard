import React from 'react'

import AnalyticsList from './AnalyticsList'
import AnalyticsChart from './AnalyticsChart'


function AnalyticsSubHeader() {
    
  return (
    <section>
        <div className='bg-gray-00 rounded-lg border-2 border-violet-400 '>
            <div className='bg-gray-00 rounded borde borde-gray-300 py- px- '><AnalyticsChart/></div>
            <div className=' flex  justify-between py-4 px-4 items-center  border-b border-y-violet-400 bg-violet-500 '>
                <div className='flex font-semibold text-2xl '>
                    <h3 className='text-white'>Usage Detail</h3>
                </div>

                {/* <div>Filter here</div> */}
            </div>
            <div className='p-2 bg-violet-100 rounded-b-md'>
                <AnalyticsList/>
            </div>
        </div>
    </section>
  )
}

export default AnalyticsSubHeader