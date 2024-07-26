import React from 'react'
import UserSettingHeader from '../components/UserSettings/UserSettingHeader'
import UserSettingSubHeader from '../components/UserSettings/UserSettingSubHeader'

function UserSetting() {
  return (
    <section className='bg-violet-50 max-w-full h-screen pb-10 font-titillium_web  '>
          <div className='px-2 '>
            <div className="">
              <UserSettingHeader/>
            </div>
            <div>
              <UserSettingSubHeader/>
            </div>
          </div>
        </section>
  )
}

export default UserSetting