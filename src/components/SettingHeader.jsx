import React from 'react'

function SettingHeader() {
  return (
    <section className='mb-2'>
        <div className='py-4  bg-gray-00'>
            <div className='text-3xl font-bold'>Resume Parser Settings</div>
            <div className='text-gray-500 py-3'>Choose the fields for which you need information. Enable the fields you require and disable those which are not required. Enabling more fields will provide better resullts.</div>
        </div>
    </section>
  )
}

export default SettingHeader