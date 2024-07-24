import React from 'react';

function ParsePageContent({ data }) {
  // Check if extracted_json is defined before accessing its properties
  const extractedJson = data.extracted_json || {};

  console.log("Extracted JSON :: ", extractedJson)

  return (
    <section className=''>
      <div className='flex flex-col w-full'>
        <div className='bg-gray-00 w-full flex-col'>
          <h1 className='text-2xl font-semibold px-1'>{extractedJson.first_name || 'N/A'}</h1>
          <h2 className='px-1'>{extractedJson.current_title || 'N/A'}</h2>
        </div>

        <div className='flex bg-gray-00 flex-col'>
          {/* Work experience and education */}
          <div className='bg-fuchsia-00 flex sm:flex-row flex-col w-full p-1 gap-1'>
            <div className='bg-gray-50 border border-violet-400 rounded-md flex-col w-full'>
              <div className='text-gray-500 border-violet-400 border-b'>
                <h1 className='px-1 py-2 font-semibold text-violet-500'>WORK EXPERIENCE</h1>
              </div>
              {extractedJson.professional_experiences ? (
                extractedJson.professional_experiences.map(item => (
                  <div className='flex justify-between text-base px-1 py-1' key={item.company}>
                    <div className=''>
                      <h1 className='font-semibold'>{item.company}</h1>
                      <h2 className='text-sm'>{item.title}</h2>
                    </div>
                    <div className='flex space-x-1 text-sm'>
                      <h2>{item.start_date.month}/{item.start_date.year}</h2>
                      <h2>{item.is_current ? '- Present' : `-${item.end_date.month}/${item.end_date.year}`}</h2>
                    </div>
                  </div>
                ))
              ) : (
                <p>No work experience available</p>
              )}
            </div>

            <div className='bg-gray-50 border border-violet-400 rounded-md flex-col w-full'>
              <div className='text-gray-500 border-violet-400 border-b'>
                <h1 className='px-1 py-2 font-semibold text-violet-500'>EDUCATION</h1>
              </div>
              {extractedJson.educations ? (
                extractedJson.educations.map(item => (
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
              ) : (
                <p>No education available</p>
              )}
            </div>
          </div>

          {/* Skills and contact info */}
          <div className='bg-teal-00 flex sm:flex-row flex-col w-full p-1 gap-1'>
            <div className='bg-gray-50 border border-violet-400 rounded-md flex-col w-full'>
              <div className='text-gray-500 border-violet-400 border-b'>
                <h1 className='px-1 py-2 font-semibold text-violet-500'>SKILLS</h1>
              </div>
              {extractedJson.skills ? (
                extractedJson.skills.map((item, index) => (
                  <div className='flex inline-flex text-sm py-2 px-1' key={index}>
                    <span className='px-2 bg-violet-300 rounded-full py-1 text-center'>{item}</span>
                  </div>
                ))
              ) : (
                <p>No skills available</p>
              )}
            </div>

            <div className='bg-gray-50 border border-violet-400 rounded-md flex-col w-full'>
              <div className='text-gray-500 border-violet-400 border-b'>
                <h1 className='px-1 py-2 font-semibold text-violet-500'>CONTACT INFO</h1>
              </div>
              <div className='flex flex-col text-base px-1 py-1'>
                <div className='flex justify-between'>
                  <h1>Phone no</h1>
                  <h2>{extractedJson.phone_no || 'N/A'}</h2>
                </div>
                <div className='flex justify-between'>
                  <h1>Email</h1>
                  <h2>{extractedJson.email_id || 'N/A'}</h2>
                </div>
                <div className='flex justify-between'>
                  <h1>Location</h1>
                  <h2>{`${extractedJson.location?.country || 'N/A'}, ${extractedJson.location?.state || 'N/A'}, ${extractedJson.location?.city || 'N/A'}`}</h2>
                </div>
              </div>
            </div>
          </div>

          {/* Certificates */}
          <div className='bg-yellow-00 flex sm:flex-row flex-col w-full p-1 gap-1'>
            <div className='bg-gray-50 border border-violet-400 rounded-md flex-col sm:w-1/2 w-full'>
              <div className='text-gray-500 border-violet-400 border-b'>
                <h1 className='px-1 py-2 font-semibold text-violet-500'>ACHIEVEMENTS/CERTIFICATES</h1>
              </div>
              {extractedJson.certificates ? (
                extractedJson.certificates.map((item, index) => (
                  <div className='flex justify-between text-base px-1 py-1' key={index}>
                    <div className=''>
                      <h1>{item}</h1>
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
