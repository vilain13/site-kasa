import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './styles/style.scss';
import Home from './pages/home';
import Survey from './pages/survey/';
import Header from './components/header';
import Footer from './components/footer';
import E404 from './pages/e404';


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/survey" element={<Survey />} />
          {/* Route pour définir la page à afficher si le chemin saisi sans l'url n'est pas défini au dessus */}
          <Route path="*" element={<E404 />} />
        </Routes>
      <Footer />
     </Router>
  </React.StrictMode>,
  document.getElementById('root')
);