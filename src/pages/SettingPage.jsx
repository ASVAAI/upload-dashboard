import React from 'react'
import SettingHeader from '../components/Setting/SettingHeader'
import SettingSubHeader from '../components/Setting/SettingSubHeader'


function SettingPage() {
  return (
    <section className='bg-violet-50 max-w-full h-screen pb-10 font-titillium_web'>
          <div className='px-2 '>
            <div>
              <SettingHeader/>
            </div>
            <div>
              <SettingSubHeader/>
            </div>
          </div>
        </section>
  )
}

export default SettingPage