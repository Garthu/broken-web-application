import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './components/Home'
import About from './components/About'
import XSS from './components/content/xss_type/xss';
import Relative from './components/content/relative_type/relative';
import RCE from './components/content/rce_type/rce';


function App() {
  return (
    <div style={{ backgroundColor: '#282c44', height: '100vh' }}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/xss' element={<XSS/>}/>
          <Route path='/relative' element={<Relative/>}/>
          <Route path='/rce' element={<RCE/>}/>
          <Route path='*' element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
