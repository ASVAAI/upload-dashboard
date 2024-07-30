import { useState } from "react";
import ListTable from "./ListTable";
import { IconFilterFilled } from '@tabler/icons-react';
import { IconArrowBarUp } from '@tabler/icons-react';
import Search from "./Search";
import UploadDialog from "./UploadDialog";

function ParserContent({data , refetchData}) {
    


    const [searchQuery, setSearchQuery] = useState('');

    const [openUploadDialog, setOpenUploadDialog] = useState(false);

    const handleUploadDialog = (event) => {
        event.stopPropagation();
        setOpenUploadDialog(true);
    }

    const handleSearch = (query,) => {
        setSearchQuery(query);
    } 

    const filteredData = data.filter((item) => 
        (item.file_name ?? '').toLowerCase().includes(searchQuery.toLowerCase())
    );


  return (
    <main>
        <div className=" ">
            <div className="flex w-full py-6 bg-violet-400 flex-col sm:flex-row sm:justify-between ">
                <div className="flex px-4 text-xl font-semibold "><h1>Parsed Resume ({filteredData.length})</h1></div>
                <div className="flex px-3 items-center space-x-4">
                    <div>
                        <Search  data={data} onSearch ={handleSearch}  />
                    </div>
                    <div><IconFilterFilled className="bg-violet-500 w-10 h-10 p-2 rounded-full text-white hover:text-gray-400 hover:bg-white  
                    hover:translate-y-1 duration-300 ease-in-out shadow-sm shadow-white cursor-pointer drop-shadow-md
                    hover:shadow-none
                    "/></div>
                    <div onClick={handleUploadDialog} className="flex bg-violet-500 text-white hover:text-gray-500 hover:bg-violet-100 rounded-full sm:px-4  px-2 py-2 cursor-pointer
                    shadow-sm shadow-white hover:shadow-none
                    transition-colors duration-300 ease-in-out 
                     " 
                    >
                        <IconArrowBarUp className=""/>
                        <span className="hidden md:block font-semibold">Upload</span>
                        

                        {openUploadDialog && <UploadDialog  open = {openUploadDialog} setOpen = {setOpenUploadDialog}/>}
                    </div>
                </div>
            </div>
            <div className="mx-auto">
                <ListTable data = {filteredData} refetchData={refetchData}/>
            </div>
        </div>
    </main>
  )
}

export default ParserContent