import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import { PopupProvider } from './context/PopupContext.jsx'
import { PopupHelloProvider } from './context/PopupHelloContext.jsx'

createRoot(document.getElementById('root')).render(

    <PopupHelloProvider>
        <PopupProvider>
            <BrowserRouter>

                <App />

            </BrowserRouter>
        </PopupProvider >
    </PopupHelloProvider>


)
