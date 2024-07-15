import React from 'react'
import ToggleBtn from './ToggleBtn'

function SettingElement({elementName}) {
  return (
    <div className='flex justify-between bg-green-00 p-1 '>
            <div>{elementName}</div>
            <div><ToggleBtn/></div>
        </div>
  )
}

export default SettingElement