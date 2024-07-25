import ParserHeader from "../components/Dashboard/ParserHeader"
import ParserSubHeader from '../components/Dashboard/ParserSubHeader'



function UploadDashPage() {
  return (
    <>
        <section className='bg-violet-50 max-w-full h-screen pb-10 font-titillium_web  '>
          <div className='px-2 '>
            <div className="">
              <ParserHeader/>
            </div>
            <div>
              <ParserSubHeader/>
            </div>
          </div>
        </section>
    </>
  )
}

export default UploadDashPage

