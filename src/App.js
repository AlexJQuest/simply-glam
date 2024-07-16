import {
  BrowserRouter,
  Routes,
  Route,
} from  "react-router-dom";
import './App.css';
import Home from './pages/Home/Home.jsx';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/simply-glam"element={<Home/>}/>
      </Routes>
    </BrowserRouter>

    
    
  );
}

export default App;
