import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from '@chakra-ui/react'
import AuthContextProvider from './context/AuthContextProvider';
import FetchingContextProvider from './context/FetchingContextProvider';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<ChakraProvider>
  <BrowserRouter>
    <AuthContextProvider>
      <FetchingContextProvider>
       <App/>
      </FetchingContextProvider>
    </AuthContextProvider>
  </BrowserRouter>
</ChakraProvider>
    
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
