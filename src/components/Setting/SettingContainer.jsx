
function SettingContainer({containerTopic,children}) {
  return (
    <div className='bg-white    border border-violet-500 mt-2 mb-4'>
    <div className=' text-2xl font-semibold py-2 bg-violet-500 text-white px-2'>{containerTopic}</div>
    <div className='sm:grid sm:gap-x-10 sm:grid-cols-2 sm:gap-y-1 sm:grid-rows-2 bg-red-00 text-gray-800 px-2 py-8'>
        {children}
    </div>
</div>
  )
}

export default SettingContainer

// rounded-lg border-2 my-2