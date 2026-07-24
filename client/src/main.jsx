import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer , toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import ShopContext, { ShopContextProvider } from './context/ShopContext.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ShopContextProvider>
        <App />
        <ToastContainer />
      </ShopContextProvider>
    </BrowserRouter>
  </StrictMode>,
)
