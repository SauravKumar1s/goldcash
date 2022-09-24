
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './conmponents/Nav';
import { BrowserRouter, Routes, Route } from "react-router-dom"




function App() {
  return (
    <>
    
    <BrowserRouter>
        <Nav />
        <Routes>
          <Route exact path="/" element={<Login />} />

        </Routes>
       </BrowserRouter>
    
    </>
  );
}

export default App;
