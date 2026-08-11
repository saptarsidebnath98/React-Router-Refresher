import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Dashboard from './Dashboard.jsx'
import { BrowserRouter, Route, Routes } from "react-router";
import Home from './components/Home.jsx';
import Settings from './components/Settings.jsx';
import InnerSettings2 from './components/InnerSettings2.jsx';
import InnerSettings1 from './components/InnerSettings1.jsx';
import About from './components/About.jsx';
import Product from './components/Product.jsx';
import File from './components/File.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Dashboard />}>
          <Route index element={<Home />} />
          <Route path="settings" element={<Settings />} >
            <Route index element={<InnerSettings1 />} />
            <Route path="innersettings2" element={<InnerSettings2 />} />
          </Route>
          <Route path="about">
            <Route index element={<About />} />
          </Route>
          <Route path='product?'>
            <Route path=':pid/:type?' element={<Product />} />
          </Route>

          <Route path='file/*' element={<File />} />

        </Route>
      </Routes>

    </BrowserRouter>
  </StrictMode>,
)
