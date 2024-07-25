import React from 'react'
import SettingContainer from './SettingContainer'
import SettingElement from './SettingElement'


function SettingContent() {
  return (
   <section className='bg-gray-50 p-1 rounded-xl'>
        <div>
            <SettingContainer containerTopic={'Basic Info'}>
            <SettingElement elementName={'Name'}/>
            <SettingElement elementName={'Links'}/>
            <SettingElement elementName={'Current Position'}/>
            <SettingElement elementName={'Profile Image / Contact'}/>
            </SettingContainer>
        </div>
        <div>
            <SettingContainer containerTopic={'Contact Info'}>
            <SettingElement elementName={'Phone'}/>
            <SettingElement elementName={'Street Address'}/>
            <SettingElement elementName={'City'}/>
            <SettingElement elementName={'Postal Code'}/>
            <SettingElement elementName={'Country'}/>
            </SettingContainer>
        </div>
        <div>
            <SettingContainer containerTopic={'Work Experience'}>
            <SettingElement elementName={'Total Year Experience'}/>
            <SettingElement elementName={'Position'}/>
            <SettingElement elementName={'Date'}/>
            <SettingElement elementName={'Company Name'}/>
            <SettingElement elementName={'Average Time at Job'}/>
            </SettingContainer>
        </div>
        <div>
            <SettingContainer containerTopic={'Education'}>
            <SettingElement elementName={'Department'}/>
            <SettingElement elementName={'Degree'}/>
            <SettingElement elementName={'Date'}/>
            <SettingElement elementName={'University'}/>
            </SettingContainer>
        </div>
        <div>
            <SettingContainer containerTopic={'Achievements & Honors'}>
            <SettingElement elementName={'Date'}/>
            <SettingElement elementName={'Name'}/>
            <SettingElement elementName={'Company'}/>
            </SettingContainer>
        </div>

   </section>
  )
}

export default SettingContent

