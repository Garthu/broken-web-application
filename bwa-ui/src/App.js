import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './components/Home'
import About from './components/About'
import XSS from './components/content/xss_type/xss';

function App() {
  return (
    <div style={{ backgroundColor: '#282c44', height: '100vh' }}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/xss' element={<XSS/>}/>
          <Route path='*' element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
