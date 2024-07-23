import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider,createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import UploadDashPage from './pages/UploadDashPage.jsx'
import SettingPage from './pages/SettingPage.jsx'
import LoginPage from './pages/LoginPage.jsx'
import SignUpPage from './pages/SignUpPage.jsx'
import AnalyticsPage from './pages/AnalyticsPage.jsx'
import ParseContentPage from './pages/ParseContentPage.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element = {<App/>}>
        <Route path = '/' element = {<UploadDashPage/>}/>
        <Route path = '/setting' element = {<SettingPage/>}/>
        <Route path = '/login' element = {<LoginPage/>}/>
        <Route path = '/signup' element = {<SignUpPage/>}/>
        <Route path = '/analytics' element = {<AnalyticsPage/>}/>
        <Route path = '/parsePage' element = {<ParseContentPage/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router}/>
  </React.StrictMode>,
)
