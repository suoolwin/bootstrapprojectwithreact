import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route ,Link } from 'react-router-dom'
import './lib/fontawesome.js'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import './assets/css/style.css'

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
 
      <Router>
        <App />
      </Router>
 
)
