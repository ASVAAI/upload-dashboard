import { Outlet, Route } from "react-router-dom"
import UploadDashPage from "./pages/UploadDashPage"
import SettingPage from "./pages/SettingPage"
import SiderBar from "./components/SiderBar"

function App() {
  

  return (
    <div className="font-titillium_web">
      <SiderBar/>
      {/* <main className="flex min-w-full">
        <Outlet/>
      </main> */}
    </div>
  )
}

export default App
