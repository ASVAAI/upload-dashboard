import React from 'react'
import {SettingHeader, SettingSubHeader } from '../components'

function SettingPage() {
  return (
    <section className='bg-gray-300 max-w-full pb-10'>
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