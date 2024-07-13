import { IconBolt } from '@tabler/icons-react';

function SubHeader() {
  return (
    <>
        <div className="bg-violet-300 flex w-full text-gray-400 px-3">
            <div className="flex w-full justify-start bg-red-300 border-gray-800 border-b ">
                <div className="flex flex-1 bg-cyan-300 gap-1 sm:gap-11 px-2 py-3 items-center  ">

                    <div className="inline-block space-x-2 ">
                        <span className="">Resume&apos;s</span>
                        <span className="bg-violet-500/40 rounded-full px-2 py-1" >Demo</span>
                    </div>


                    <div className="inline-block space-x-2 ">
                        <span>Job Description</span>
                        <span className="border-gray-400 rounded-full border-2 px-2 py-1"><IconBolt stroke={1} className='inline-block'/>PRO</span>
                    </div>
               
                </div>

                <div className="flex justify-center items-center flex-initial bg-fuchsia-400 px-2   ">
                    <div>Xetting</div>
                </div>
            </div>
        </div>
    </>
  )
}

export default SubHeader