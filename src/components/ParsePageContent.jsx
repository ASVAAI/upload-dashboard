import React from 'react'


function ParsePageContent({data}) {

  return (
    <section className=''>

        <div className=' flex flex-col w-full '>
            <div className='bg-gray-00 w-full flex-col '>
                <h1 className='text-2xl font-semibold px-1 '>{data.extracted_data.first_name}</h1>
                <h2 className='px-1'>{data.extracted_data.current_title} </h2>
            </div>

            <div className='flex bg-gray-00 flex-col'>

{/* work experience and education */}
                <div className='bg-fuchsia-00 flex sm:flex-row flex-col w-full p-1 gap-1'>
                    {/* <ParsePageContainer title = "WORK EXPERIENCE" data ={data.extracted_data.professional_experiences} /> */}
                    
                    <div className='bg-gray-50 border border-violet-400 rounded-md flex-col w-full '>
                        <div className='text-gray-500 border-violet-400 border-b '>
                            <h1 className='px-1 py-2 font-semibold text-violet-500'>WORK EXPERIENCE</h1>
                        </div>
                            {
                                data.extracted_data.professional_experiences.map(item=>(
                                    <div className='flex justify-between text-base px-1 py-1' key={item.company}>
                                <div className=''>
                                    <h1 className='font-semibold'>{item.company}</h1>
                                    <h2 className='text-sm'>{item.title}</h2>
                                </div>
                                <div className='flex space-x-1 text-sm'>
                                    <h2>{item.start_date.month}/{item.start_date.year}</h2>
                                    <h2>{(item.is_current)? ("- Present"):(<span>
                                        -{item.end_date.month}/{item.end_date.year}
                                    </span>)}</h2>
                                </div>
                                </div>
                                ))
                            }
                    </div>

                    <div className='bg-gray-50 border border-violet-400 rounded-md flex-col w-full'>
                        <div className='text-gray-500 border-violet-400 border-b '>
                            <h1 className='px-1 py-2 font-semibold text-violet-500'>EDUCATION</h1>
                        </div>
                            {
                                data.extracted_data.educations.map(item=>(
                                    <div className='flex justify-between text-base px-1 py-1' key={item.degree}>
                                <div className=''>
                                    <h1 className='font-semibold'>{item.degree}</h1>
                                    <h2 className='text-sm'>{item.issuing_organization}</h2>
                                </div>
                                <div className='flex space-x-1 text-sm'>
                                    <h2>{item.start_year}/{item.end_year}</h2>
                                </div>
                                </div>
                                ))
                            }
                    </div>

                </div>

{/* skills and contactinfo */}
                <div className='bg-teal-00 flex sm:flex-row flex-col w-full p-1 gap-1'>
                    {/* <ParsePageContainer title = "WORK EXPERIENCE" data ={data.extracted_data.professional_experiences} /> */}
                    
                    <div className='bg-gray-50 border border-violet-400 rounded-md flex-col w-full'>
                        <div className='text-gray-500 border-violet-400 border-b '>
                            <h1 className='px-1 py-2 font-semibold text-violet-500'>SKILLS</h1>
                        </div>


                        {
                            data.extracted_data.skills.map((item,index)=>(
                                <div className='flex inline-flex text-sm py-2 px-1'>
                                    <span className='px-2 bg-violet-300 rounded-full py-1 text-center' key={index}> {item} </span>
                                </div>
                            ))
                        }
                    </div>

                    <div className='bg-gray-50 border border-violet-400 rounded-md flex-col w-full'>
                        <div className='text-gray-500 border-violet-400 border-b '>
                            <h1 className='px-1 py-2 font-semibold text-violet-500'>CONTACT INFO</h1>
                        </div>
                            <div className='flex flex-col text-base px-1 py-1'>
                                <div className='flex justify-between '>
                                    <h1>Phone no</h1>
                                    <h2>{data.extracted_data.phone_no}</h2>
                                </div>
                                <div className='flex justify-between'>
                                    <h1>Email</h1>
                                    <h2>{data.extracted_data.email_id}</h2>
                                </div>
                                <div className='flex justify-between'>
                                    <h1>Location</h1>
                                    <h2>{data.extracted_data.location.country}, {data.extracted_data.location.state}, {data.extracted_data.location.city}</h2>
                                </div>
                                
                            </div>
                    </div>

                </div>

{/* certificates */}
                <div className='bg-yellow-00 flex sm:flex-row flex-col w-full p-1 gap-1'>

                <div className='bg-gray-50 border border-violet-400 rounded-md flex-col sm:w-1/2 w-full'>
                        <div className='text-gray-500 border-violet-400 border-b '>
                            <h1 className='px-1 py-2 font-semibold text-violet-500'>ACHIVEMENT/CERTIFICATES</h1>
                        </div>
                            {
                                data.extracted_data.certificates.map((item,index)=>(
                                    <div className='flex justify-between text-base px-1 py-1' key={index}>
                                <div className=''>
                                    <h1>{item}</h1>
                                    
                                </div>
                                
                                </div>
                                ))
                            }
                    </div>
                    
                    

                    

                </div>


            </div>
        </div>
    </section>
  )
}

export default ParsePageContent