import { IconTrash } from '@tabler/icons-react';
import { IconTagFilled } from '@tabler/icons-react';
import {Link} from 'react-router-dom'


function ListTable({data}) {
    
    
  return (
    <section className=' overflow-auto'>
        <table className="w-full border-collapse border-spacing-2 border border-slate-50 bg-gray-50 text-sm  ">
            <thead className='h-10  text-violet-500 '>
                <tr className='bg-violet-200 '>
                    <th className='px-3'>
                        <input type="checkbox" className='accent-violet-500'/>
                    </th>
                    <th className='text-start px-2 '>
                        FILENAME
                    </th>
                    <th className=' text-start px-2'>
                        DATE UPLOADED
                    </th>
                    <th className='text-start px-2'>
                        INTERGRATION PLATFORM
                    </th>
                    <th className='text-start px-2'>
                        TAGS
                    </th>
                    <th className='px-4 text-right'>
                        ACTION
                    </th>
                </tr>
            </thead>
            <tbody>
                {data.map((item)=>(
                    <tr key={item.id} className=' hover:bg-violet-200 h-10'>
                        <td className='text-center px-3'>
                            <input type = "checkbox" className='accent-violet-500'/>
                        </td>
                        <td className='px-2 pr-12'>
                            {item.fileName}
                        </td>
                        <td className='px-2'>
                            {item.dateUploaded}
                        </td>
                        <td className='px-2'>
                                    {/* for INTERGRATION PLATFORM             */}
                        </td>
                        <td className='px-2'>
                            <div className='flex justify-start gap-x-2'>
                                {item.tags.map((each,index)=>(<p key={index} className='border-gray-400 border  rounded-full px-2'>{each}</p>))}
                            </div>
                        </td>
                        <td className='py-1 '>
                            <div className='flex justify-evenly gap-x-4 '>
                                <a >
                                    <IconTagFilled className='text-gray-400 border-gray-200 border h-9 w-9 p-2 rounded-full shadow-md hover:text-black hover:bg-violet-100 hover:border-violet-400'/>
                                </a>
                                <a >
                                    <IconTrash className='text-red-500  border-gray-200 border shadow-md h-9 w-9 p-2 rounded-full hover:bg-violet-100 hover:border-violet-400'/>
                                </a>
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </section>
  )
}

export default ListTable