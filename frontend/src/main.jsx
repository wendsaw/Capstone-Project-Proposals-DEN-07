import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AuthContextProvider } from './context/AuthContext.jsx'

import { ThemeProvider } from './context/ThemeContext.jsx'

createRoot(document.getElementById('root')).render(



    <AuthContextProvider>
        <ThemeProvider>

            <App />
        </ThemeProvider>

    </AuthContextProvider>



)
