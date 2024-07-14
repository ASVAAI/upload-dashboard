import { Route } from "react-router-dom"
import UploadDashPage from "./pages/UploadDashPage"

function App() {
  

  return (
    <>
      <div className="bg-fuchsia-00">
        <UploadDashPage/>
      </div>
      {/* <Routes>
        <Route path="/parse" element={<UploadDashPage/>}></Route>
        <Route path="/settings" element={<UploadDashPage/>}></Route>
      </Routes> */}
      
    </>
  )
}

export default App
