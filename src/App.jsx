import Navbar from './components/Navbar';
import './index.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Home, About, Projects, Contact } from './pages/index';

const App = () => {
    return (
        <main className="bg-slate-300/20 min-h-[100vh]">
            <Router basename='/3d-Portfolio'>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </Router>
        </main>
    );
};

export default App;