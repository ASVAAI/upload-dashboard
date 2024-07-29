import React from 'react'

function SettingHeader() {
  return (
    <section className='mb-2'>
        <div className='py-8  bg-gray-00'>
            <div className='text-4xl font-bold text-violet-500'> CV Parser Settings</div>
            <div className='text-gray-500 py-3'>Choose the fields for which you need information. Enable the fields you require and disable those which are not required. Enabling more fields will provide better resullts.</div>
        </div>
    </section>
  )
}

export default SettingHeader