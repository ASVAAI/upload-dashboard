import React from 'react'
import { ParsePageHeader, ParsePageSubHeader } from '../components';
import { useLocation } from 'react-router-dom';

function ParseContentPage() {
  const location = useLocation();
  const responseData = location.state?.responseData;
  return (
    <>
        <section className='bg-gray-300 max-w-full pb-10 '>
          <div className='px-2 '>
            <div>
              <ParsePageHeader />
            </div>
            <div>
              <ParsePageSubHeader responseData={responseData}/>
            </div>
          </div>
        </section>
    </>
  )
}

export default ParseContentPage;