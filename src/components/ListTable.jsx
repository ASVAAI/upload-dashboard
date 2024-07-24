import { useEffect, useState } from 'react';
import { IconTrash } from '@tabler/icons-react';
import { IconTagFilled } from '@tabler/icons-react';
import {Link, useNavigate} from 'react-router-dom'
import { IconChevronRight } from '@tabler/icons-react';
import { IconChevronLeft } from '@tabler/icons-react';
import { IconPencil } from '@tabler/icons-react';
import DeleteDialog from './DeleteDialog';


function ListTable({data, onDeleteSingle, onDeleteMultiple}) {
    

    const [selectedFiles, setSelectedFiles] = useState([]);
    const [selectAll, setSelectedAll] = useState(false);

    const [deleteDialogInfo, setDeleteDialogInfo] = useState({open:false, fileId:null, fileName:''})

    const[multipleDeleteOpen, setMultipleDeleteOpen] = useState(false);


    const handleSelectFile = (fileId) => {
        setSelectedFiles(prev => {
            if(prev.includes(fileId)){
                return prev.filter(id => id !== fileId);
            } else {
                return [...prev, fileId];
            }
        });
    };

    const handleSelectAll = () => {
        setSelectedAll(prev=> !prev);
        if(!selectAll){
            setSelectedFiles(data.map(item => item.id));
        } else {
            setSelectedFiles([]);
        }
    };

    const handleDeleteDialog = (event,fileId,fileName) =>{
        event.stopPropagation();
        setDeleteDialogInfo(prev => ({
            open: !prev.open,
            fileId: fileId,
            fileName: fileName
        }));
    }

    

    const handleMultipleDeleteDialog = () => {
        setMultipleDeleteOpen(true);
    }

    const handleSingleDelete = ()=>{
        onDeleteSingle(deleteDialogInfo.fileId);
        setDeleteDialogInfo({open:false,fileId:null,fileName:''})
    }

    const handleMultipleDelete = () => {
        onDeleteMultiple(selectedFiles);
        setSelectedFiles([]);
        setMultipleDeleteOpen(false);
    }



    useEffect(()=>{
        setSelectedFiles([]);
        setSelectedAll(false);
    },[data])
    // max-h-screen
  return (
    <section className='max-w-full max-h-96 overflow-auto border border-violet-200 bg-gray-50'>
        <table className="min-w-full border-collapse border-spacing-2  text-sm ">
            <thead className='h-10  text-violet-500 sticky top-0 '>
                <tr className='bg-violet-200 '>
                    <th className='px-3 '>
                        <input type="checkbox" className='accent-violet-500 '
                        checked = {selectAll}
                        onChange={handleSelectAll}
                        />
                    </th>
                    {selectedFiles.length > 0 ? (
                        <>
                                <th colSpan="4" className='text-start px-2'>
                                    {selectedFiles.length} file(s) selected
                                </th>
                                <th className='px-4 text-right'>
                                    <button onClick={handleMultipleDeleteDialog}>
                                        <IconTrash className='text-red-500 h-6 w-6'/>
                                    </button>
                                </th>
                            </>

                        
                    ): (
                    <>
                    <th className='text-start px-2 '>FILENAME</th>
                    <th className=' text-start px-2'>DATE UPLOADED</th>
                    <th className='text-start px-2'>INTERGRATION PLATFORM</th>
                    <th className='text-start px-2'>TAGS</th>
                    <th className='px-4 text-right'>ACTION</th>
                    </>
                    )}
                    
                </tr>
            </thead>
            <tbody>
                {data.map((item)=>(
                    <tr key={item.id} className='hover:bg-violet-200 h-10'>
                        <td className='text-center px-3'>
                            <input type = "checkbox" className='accent-violet-500'
                                checked = {selectedFiles.includes(item.id)}
                                onChange={()=>handleSelectFile(item.id)}
                            />
                        </td>
                        <td className='px-2 flex justify-between pr-9  h-10 items-center group '>
                            <Link to={`/parsePage/${item.id}`}>
                            <div className='text-center hover:font-semibold'>{item.file_name}</div>
                            </Link>
                            <IconPencil className='text-gray-200 border-gray-200 border h-9 w-9 p-2 rounded-full shadow-md hover:text-gray-100 hover:bg-violet-100 hover:border-violet-400 invisible group-hover:visible fill-gray-500 hover:fill-gray-600'/>
                        </td>
                        <td className='px-2'>
                            {item.uploaded_at}
                        </td>
                        <td className='px-2'>
                                    {/* for INTERGRATION PLATFORM             */}
                        </td>
                        <td className='px-2'>
                            <div className='flex justify-start gap-x-2'>
                                {/* {item.tags.map((each)=>(<p key={each} className='border-gray-400 border  rounded-full px-2'>{each}</p>))} */}
                            </div>
                        </td>
                        <td className='py-1 '>
                            <div className='flex justify-evenly gap-x-4 '>
                                <button type='button' >
                                    <IconTagFilled className='text-gray-400 border-gray-200 border h-9 w-9 p-2 rounded-full shadow-md hover:text-black hover:bg-violet-100 hover:border-violet-400'/>
                                </button>
                                <button type='button' onClick={(e)=>handleDeleteDialog(e, item.id, item.file_name)} >
                                    <IconTrash className='text-red-500  border-gray-200 border shadow-md h-9 w-9 p-2 rounded-full hover:bg-violet-100 hover:border-violet-400'/>
                                </button>
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
        <div className='bg-emerald-00 '>
            <div className=' flex  text-sm space-x-2 px-4 items-center justify-center sm:justify-normal'>
                <div className='font-semibold text-violet-500 text-center'>{1}-{10} of {data.length}</div>
                <div className='flex space-x-2 p-1'>
                    <IconChevronLeft className='bg-gray-100 w-10 h-10 p-2 rounded-full text-gray-400  hover:text-violet-500 hover:bg-violet-200'/>
                    <IconChevronRight className='bg-gray-100 w-10 h-10 p-2 rounded-full text-gray-400 hover:text-violet-500 hover:bg-violet-200'/>
                </div>
            </div>
        </div>

        {
            deleteDialogInfo && <DeleteDialog 
            open={deleteDialogInfo.open}
            setOpen={()=>setDeleteDialogInfo(prev=>({...prev,open:false}))}
            message={deleteDialogInfo.fileName}
            fileId={deleteDialogInfo.fileId}
        />
        }

    </section>
  )

}

export default ListTable