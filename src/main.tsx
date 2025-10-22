import { BrowserRouter, Route, Routes } from 'react-router'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/home" element={<h1>Home</h1>} />
      <Route path="/contact" element={<h1>Contact</h1>} />
    </Routes>
  </BrowserRouter>,
)
