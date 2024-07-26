import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import UploadDashPage from './pages/UploadDashPage.jsx'
import SettingPage from './pages/SettingPage.jsx'
import LoginPage from './pages/LoginPage.jsx'
import SignUpPage from './pages/SignUpPage.jsx'
import AnalyticsPage from './pages/AnalyticsPage.jsx'
import ParseContentPage from './pages/ParseContentPage.jsx'
import ProtectedRoute from './components/ProtectedRoute.jsx'
import SiderBar from './components/SiderBar.jsx'
import UserSetting from './pages/UserSetting.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<LoginPage />} /> {/* Initial route */}
      <Route path="/signup" element={<SignUpPage />} /> {/* Signup route */}
      
      <Route element={<ProtectedRoute />}> {/* Protecting the routes */}
        <Route path="/app" element={<SiderBar />}>
          <Route path="upload" element={<UploadDashPage />} />
          <Route path="setting" element={<SettingPage />} />
          <Route path="analytics" element={<AnalyticsPage />} />
          <Route path="parsePage/:id" element={<ParseContentPage />} />
          <Route path="usersetting" element={<UserSetting />} />
        </Route>
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
