import React from 'react'
import { AnalyticHeader, AnalyticsChart, AnalyticsSubHeader } from '../components'

function AnalyticsPage() {
  return (
    <section className='bg-gray-300 max-w-full pb-10'>
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