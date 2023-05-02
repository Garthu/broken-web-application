import Nav from './components/Nav'
import Home from './components/Home'
import VulnOpt from './components/VulnOpt'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/add' element={<Nav/>}/>
          <Route path='/VulnOpt' element={<VulnOpt/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
