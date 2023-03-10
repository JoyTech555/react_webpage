import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import  Home  from './pages/Home'
import  About  from './pages/About'
import  Profile  from './pages/Profile'
import Header from './components/Header'


function App() {
  return (
    
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="profile" element={<Profile />} />
      
      </Routes>
    </Router>
  
  );
}

export default App;
