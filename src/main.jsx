import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import LayoutApp from './components/layout/index.jsx';
import { HashRouter, Routes, Route, RouterProvider, createBrowserRouter } from 'react-router-dom';
import SearchPage from './pages/SearchScreen/index.jsx';
import InsertPage from './pages/InsertPage';
import { FormProvider } from './context/formRegisterContext';
import AlertProvider from './context/alertContext';
import AllScreenProvider from './context/AllScrennContext';
import EditComponentPage from './pages/EditComponent';
import FormEditProvider from './context/EditContext';
import ModalEditProvider from './context/modalEditContext';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <RouterProvider router = {router} />  */}
    <HashRouter basename = '/'>
      <Routes>
        <Route path = '/' element = {
            <LayoutApp />
        }>
          <Route path = '/search' element = {
            <AllScreenProvider>
              <AlertProvider>
                <SearchPage />
              </AlertProvider>
            </AllScreenProvider>
          }/>

          <Route path = '/edit/:name' element = {
            <FormEditProvider>
              <ModalEditProvider>
                <AlertProvider>
                  <EditComponentPage />
                </AlertProvider>
              </ModalEditProvider>
            </FormEditProvider>
          }/>

          <Route path = '/insert' element = {
              <FormProvider>
                  
                    <AlertProvider>
                      <InsertPage />
                    </AlertProvider>
                  
              </FormProvider>
          }/>
        </Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>
)
