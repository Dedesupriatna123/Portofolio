import './App.css';
import Layout from './peges/Layout';
import Home from './peges/Home';
import Tentang from './peges/Tentang';
import Contact from './peges/Contact';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ReactDOM from "react-dom/client";
import Skil from './peges/Skil';


export default function App() {
  return (
    <BrowserRouter>
    <Routes>
     <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="/Skil" element={<Skil />} />
     <Route path="/Tentang" element={<Tentang />} />
     <Route path="/Contact" element={<Contact />} />
     </Route>
    </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);