import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './components/Home'
import About from './components/About'
import XSS from './components/content/xss_type/xss';
import Relative from './components/content/relative_type/relative';
import RCE from './components/content/rce_type/rce';
import Control from './components/content/control_type/control';
import AdminControl from './components/content/control_type/admin_control';
import Comment from './components/content/comment_type/comment';
import XML from './components/content/robots_type/xml';
import Robots from './components/content/robots_type/robots';
import Create from './components/content/user/create';
import Login from './components/content/user/login';
import SetAdmin from './components/content/user/set_admin';
import Info from './components/content/user/info';
import AdminFunction from './components/content/user/admin_function';

function App() {
  return (
    <div style={{ backgroundColor: '#282c44', height: '100vh' }}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/your-text' element={<XSS/>}/>
          <Route path='/animals' element={<Relative/>}/>
          <Route path='/control' element={<Control/>}/>
          <Route path='/admin-control' element={<AdminControl/>}/>
          <Route path='/comment' element={<Comment/>}/>
          <Route path='/dns' element={<RCE/>}/>
          <Route path='/data.xml' element={<XML/>}/>
          <Route path='/robots' element={<Robots/>}/>
          <Route path='/create' element={<Create/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/set-admin' element={<SetAdmin/>}/>
          <Route path='/admin-function' element={<AdminFunction/>}/>
          <Route path='/info' element={<Info/>}/>
          <Route path='*' element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
