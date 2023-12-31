import React, { useEffect } from 'react';
import "./App.css";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import { LoginPage, SignUpPage, ActivationPage, HomePage, ProductsPage,BestSellingPage, EventsPage, FAQPage } from './Routes.js';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Store from './redux/store.js';
import { loadUser } from './redux/actions/user.js';

const  App = () => {

  useEffect(() => {
    Store.dispatch(loadUser());
  },[]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/sign-up" element={<SignUpPage/>}/>
        <Route path="/activation/:activation_token" element={<ActivationPage/>}/>
        <Route path='/products' element={<ProductsPage />}/>
        <Route path='/best-selling' element={<BestSellingPage />}/>
        <Route path='/events' element={<EventsPage />}/>
        <Route path='/faq' element={<FAQPage />}/>
      </Routes>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </BrowserRouter>
  )
}

export default App