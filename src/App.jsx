import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Head from '/components/Head.jsx';
import Footer from '/components/Footer.jsx';
import Main from '/components/Main.jsx';
import './App.css';

// Importez vos nouvelles pages ici
import Hangry from '/pages/Hangry.jsx';
import Beat from '/pages/Beat.jsx';
import Super from '/pages/Super.jsx';

function App() {
    return (
        <Router>
            <Head />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/hangry" element={<Hangry />} />
                <Route path="/beat" element={<Beat />} />
                <Route path="/super" element={<Super />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
