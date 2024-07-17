import { useState } from "react";
import ListTable from "./ListTable";
import { IconFilterFilled } from '@tabler/icons-react';
import Button from "./Button";
import { IconArrowBarUp } from '@tabler/icons-react';
import Search from "./Search";
import Upload from "./Upload";

function ParserContent() {
    // give data to content as a props -- {data}
    const data = [
        {
            id:1,
            fileName:"hello.pdf",
            dateUploaded: "20 March 2024",
            tags: ['resume','parser','content'],
        },
        {
            id:2,
            fileName:"hello12328.pdf",
            dateUploaded: "20 March 2024",
            tags: ['resume','parser','content'],
        },
        {
            id:3,
            fileName:"resume sjfs.docx",
            dateUploaded: "20 March 2024",
            tags: ['resume','parser','content'],
        },
        {
            id:4,
            fileName:"Viren+Inaniyan_IIT+Bombay_Resume_1.pdf",
            dateUploaded: "20 March 2024",
            tags: ['resume','parser','content'],
        },
        {
            id:5,
            fileName:"Viren+Inaniyan_IIT+Bombay_Resume_1.pdf",
            dateUploaded: "20 March 2024",
            tags: ['resume','parser','content'],
        },
        {
            id:6,
            fileName:"Viren+Inaniyan_IIT+Bombay_Resume_1.pdf",
            dateUploaded: "20 March 2024",
            tags: ['resume','parser','content'],
        },
        {
            id:7,
            fileName:"Viren+Inaniyan_IIT+Bombay_Resume_1.pdf",
            dateUploaded: "20 March 2024",
            tags: ['resume','parser','content'],
        },
        {
            id:8,
            fileName:"Viren+Inaniyan_IIT+Bombay_Resume_1.pdf",
            dateUploaded: "20 March 2024",
            tags: ['resume','parser','content'],
        },
        {
            id:9,
            fileName:"Viren+Inaniyan_IIT+Bombay_Resume_1.pdf",
            dateUploaded: "20 March 2024",
            tags: ['resume','parser','content'],
        },
        {
            id:10,
            fileName:"Viren+Inaniyan_IIT+Bombay_Resume_1.pdfdssdfsddsf",
            dateUploaded: "20 March 2024",
            tags: ['resume','parser','content'],
        },
        {
            id:11,
            fileName:"Viren+Inaniyan_IIT+Bombay_Resume_1.pdfdssdfsddsf",
            dateUploaded: "20 March 2024",
            tags: ['resume','parser','content'],
        },
        {
            id:12,
            fileName:"Viren+Inaniyan_IIT+Bombay_Resume_1.pdfdssdfsddsf",
            dateUploaded: "20 March 2024",
            tags: ['resume','parser','content'],
        },
        {
            id:13,
            fileName:"Viren+Inaniyan_IIT+Bombay_Resume_1.pdfdssdfsddsf",
            dateUploaded: "20 March 2024",
            tags: ['resume','parser','content'],
        },
        {
            id:14,
            fileName:"Viren+Inaniyan_IIT+Bombay_Resume_1.pdfdssdfsddsf",
            dateUploaded: "20 March 2024",
            tags: ['resume','parser','content'],
        },
        {
            id:15,
            fileName:"Viren+Inaniyan_IIT+Bombay_Resume_1.pdfdssdfsddsf",
            dateUploaded: "20 March 2024",
            tags: ['resume','parser','content'],
        },
        {
            id:16,
            fileName:"Viren+Inaniyan_IIT+Bombay_Resume_1.pdfdssdfsddsf",
            dateUploaded: "20 March 2024",
            tags: ['resume','parser','content'],
        },
        {
            id:17,
            fileName:"Viren+Inaniyan_IIT+Bombay_Resume_1.pdfdssdfsddsf",
            dateUploaded: "20 March 2024",
            tags: ['resume','parser','content'],
        },
    ]
  
    const[totalResume, setTotalResume] = useState(10);

    const [searchQuery, setSearchQuery] = useState('');


    const handleSearch = (query) => {
        setSearchQuery(query);
    } 

    const fileteredData = data.filter((item)=> (item.fileName.toLowerCase().includes(searchQuery.toLowerCase())));

  return (
    <main>
        <div className=" ">
            <div className="flex w-full py-6 bg-gray-200 flex-col sm:flex-row sm:justify-between">
                <div className="flex px-4 text-xl font-semibold"><h1>Parsed Resume&apos;s ({10})</h1></div>
                <div className="flex px-3 items-center space-x-4">
                    <div>
                        <Search data={data} onSearch ={handleSearch} />
                    </div>
                    <div><IconFilterFilled className="bg-gray-100 w-10 h-10 p-2 rounded-full text-gray-400 hover:text-violet-500 hover:bg-violet-200 shadow"/></div>
                    <div className="flex bg-gray-100 text-gray-400 hover:text-violet-500 hover:bg-violet-200 rounded-full px-4 py-2 shadow">
                        <IconArrowBarUp/>
                        <Upload/>
                    </div>
                </div>
            </div>
            <div className="mx-auto">
                <ListTable data = {fileteredData}/>
            </div>
        </div>
    </main>
  )
}

export default ParserContent