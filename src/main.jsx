import ReactDOM from 'react-dom/client'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ShowPuppies from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <StrictMode>
      <ShowPuppies />
    </StrictMode>
)

