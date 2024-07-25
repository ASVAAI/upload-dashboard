import React from 'react'
import AnalyticHeader from '../components/Analytics/AnalyticHeader'
import AnalyticsSubHeader from '../components/Analytics/AnalyticsSubHeader'


function AnalyticsPage() {
  return (
    <section className='bg-violet-50 max-w-full pb-10 font-titillium_web'>
        <div className='px-2 '>
            <div>
              <AnalyticHeader/>
            </div>
            <div>
              <AnalyticsSubHeader/>
            </div>
          </div>
    </section>
  )
}

export default AnalyticsPage