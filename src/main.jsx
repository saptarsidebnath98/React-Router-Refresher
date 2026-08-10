import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Dashboard from './Dashboard.jsx'
import { BrowserRouter, Route, Routes } from "react-router";
import Home from './components/Home.jsx';
import Settings from './components/Settings.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="dashboard" element={<Dashboard />}>
          <Route index element={<Home />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>

    </BrowserRouter>
  </StrictMode>,
)
