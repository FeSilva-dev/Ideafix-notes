import React from 'react';
import ReactDOM from 'react-dom';
import './global.css';
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <ToastContainer
      position="top-center"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick={false}
      rtl={false}
      pauseOnFocusLoss={false}
      draggable
      pauseOnHover={false}
    />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
