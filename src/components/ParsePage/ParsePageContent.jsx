import React from 'react';

function ParsePageContent({ data }) {
  // Check if extracted_json is defined before accessing its properties
  const extractedJson = data.extracted_json || {};

  // console.log("Extracted JSON :: ", extractedJson)

  return (
    <section className=''>
      <div className='flex flex-col  w-full'>
        <div className='bg-violet-00 w-full flex-col py-5 px-2 pb-10'>
          <h1 className='text-3xl tracking-wider font-semibold px-1 py-1 '>{extractedJson.first_name || 'N/A'}</h1>
          <h2 className='px-1 py-1 text-violet-500 text-xl font-semibold'>{extractedJson.current_title || 'N/A'}</h2>
        </div>

        <div className='flex bg-gray-00 flex-col'>
          {/* Work experience and education */}
          <div className='bg-fuchsia-00 flex sm:flex-row flex-col w-full p-1 gap-6'>
            <div className='bg-gray-50 border  border-violet-400  flex-col w-full sm:hover:-translate-y-8  ease-in-out duration-500 transition-all drop-shadow-xl shadow-md sm:hover:shadow-violet-300'>
              <div className='text-gray-500 border-violet-400 border-b'>
                <h1 className='px-4 py-3 font-semibold text-white bg-violet-500'>WORK EXPERIENCE</h1>
              </div>
              {extractedJson.professional_experiences ? (
                extractedJson.professional_experiences.map(item => (
                  <div className='flex justify-between text-base px-4 py-3 ' key={item.company}>
                    <div className=''>
                      <h1 className='font-semibold'>{item.company}</h1>
                      <h2 className='text-sm '>{item.title}</h2>
                    </div>
                    <div className='flex space-x-1 text-sm text-violet-500'>
                      <h2>{item.start_date.month}/{item.start_date.year}</h2>
                      <h2>{item.is_current ? '- Present' : `-${item.end_date.month}/${item.end_date.year}`}</h2>
                    </div>
                  </div>
                ))
              ) : (
                <p>No work experience available</p>
              )}
            </div>

            <div className='bg-gray-50 border border-violet-400  flex-col w-full sm:hover:-translate-y-8  ease-in-out duration-500 transition-all drop-shadow-xl shadow-md sm:hover:shadow-violet-300'>
              <div className='text-gray-500 border-violet-400 border-b'>
                <h1 className='px-4 py-3 font-semibold text-white bg-violet-500'>EDUCATION</h1>
              </div>
              {extractedJson.educations ? (
                extractedJson.educations.map(item => (
                  <div className='flex justify-between text-base px-4 py-3' key={item.degree}>
                    <div className=''>
                      <h1 className='font-semibold'>{item.degree}</h1>
                      <h2 className='text-sm'>{item.issuing_organization}</h2>
                    </div>
                    <div className='flex space-x-1 text-sm text-violet-500'>
                      <h2>{item.start_year}/{item.end_year}</h2>
                    </div>
                  </div>
                ))
              ) : (
                <p>No education available</p>
              )}
            </div>
          </div>

          {/* Skills and contact info */}
          <div className='bg-teal-00 flex sm:flex-row flex-col w-full py-12 gap-6 p-1'>
            <div className='bg-gray-50 border border-violet-400 r flex-col w-full sm:hover:-translate-y-8  ease-in-out duration-500 transition-all drop-shadow-xl shadow-md sm:hover:shadow-violet-300'>
              <div className='text-gray-500 border-violet-400 border-b'>
                <h1 className='px-4 py-3 font-semibold bg-violet-500 text-white'>SKILLS</h1>
              </div>
              {extractedJson.skills ? (
                extractedJson.skills.map((item, index) => (
                  <div className='flex inline-flex text-sm py-3 px-4' key={index}>
                    <span className='px-4 bg-gray-200 rounded-full py-2 text-center cursor-pointer  hover:bg-violet-300'>{item}</span>
                  </div>
                ))
              ) : (
                <p>No skills available</p>
              )}
            </div>

            <div className='bg-gray-50 border border-violet-400  sm:flex-col  w-full sm:hover:-translate-y-8  ease-in-out duration-500 transition-all drop-shadow-xl shadow-md sm:hover:shadow-violet-300'>
              <div className='text-gray-500 border-violet-400 border-b'>
                <h1 className='px-4 py-3 font-semibold bg-violet-500 text-white'>CONTACT INFO</h1>
              </div>
              <div className='flex flex-wrap sm:flex-row sm:justify-around justify-between text-base px-4 py-3 flex-col gap-x-4'>
                <div className='flex flex-col my-2 bg-violet-100 px-4 py-4 rounded-md space-y-2 '>
                  <h1 className='text-violet-500 font-semibold'>Phone no</h1>
                  <h2 className=''>{extractedJson.phone_no || 'N/A'}</h2>
                </div>
                <div className='flex flex-col my-2 bg-violet-100 px-4 py-4 space-y-2  rounded-md'>
                  <h1 className='text-violet-500 font-semibold'>Email</h1>
                  <h2>{extractedJson.email_id || 'N/A'}</h2>
                </div>
                <div className='flex  flex-col bg-violet-100 my-2 px-4 py-4 space-y-2 rounded-md '>
                  <h1 className='text-violet-500 font-semibold'>Location</h1>
                  <h2>{`${extractedJson.location?.country || 'N/A'}, ${extractedJson.location?.state || 'N/A'}, ${extractedJson.location?.city || 'N/A'}`}</h2>
                </div>
              </div>
            </div>
          </div>

          {/* Certificates */}
          <div className='bg-yellow-00 flex sm:flex-row flex-col w-full p-1 gap-6 pb-10'>
            <div className='bg-gray-50 border border-violet-400  flex-col sm:w-1/2 w-full sm:hover:-translate-y-8  ease-in-out duration-500 transition-all drop-shadow-xl shadow-md sm:hover:shadow-violet-300 pb-4 '>
              <div className='text-gray-500 border-violet-400 border-b'>
                <h1 className='px-4 py-3 font-semibold bg-violet-500 text-white'>ACHIEVEMENTS / CERTIFICATES</h1>
              </div>
              {extractedJson.certificates ? (
                extractedJson.certificates.map((item, index) => (
                  <div className='flex justify-between text-base px-4 py-3 ' key={index}>
                    <div className='bg-violet-200 rounded-full px-3 py-2'>
                      <h1 className=''>{item}</h1>
                    </div>
                  </div>
                ))
              ) : (
                <p>No certificates available</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ParsePageContent;
