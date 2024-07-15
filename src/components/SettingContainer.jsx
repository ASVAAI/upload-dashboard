
function SettingContainer({containerTopic,children}) {
  return (
    <div className='bg-gray-50 px-3 py-8  '>
    <div className='text-violet-500 text-2xl font-semibold py-4'>{containerTopic}</div>
    <div className='sm:grid sm:gap-x-10 sm:grid-cols-2 sm:gap-y-1 sm:grid-rows-2 bg-red-00 text-gray-500'>
        {children}
    </div>
</div>
  )
}

export default SettingContainer

// rounded-lg border-2 my-2