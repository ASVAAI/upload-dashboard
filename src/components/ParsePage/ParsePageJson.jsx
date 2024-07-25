import React, { useState } from 'react'
import { JsonView, allExpanded, darkStyles, defaultStyles } from 'react-json-view-lite';
import 'react-json-view-lite/dist/index.css';

function ParsePageJson({data}) {
    const[myData, setMyData]= useState([data])
  return (
    <section >
        <div className=''>
            <div className='text-violet-400'>
            <JsonView data={data} shouldExpandNode={allExpanded} style={defaultStyles}  />
            </div>
        </div>
    </section>
  )
}

export default ParsePageJson