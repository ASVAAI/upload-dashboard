import React, { useState } from 'react'

function ParsePageJson({data}) {
    const[myData, setMyData]= useState([data])
  return (
    <section>
        <div>
            <div>
                <pre>
                    <code>
                        {/* {JSON.parse(data)} */}{"data"}
                    </code>
                </pre>
            </div>
        </div>
    </section>
  )
}

export default ParsePageJson