// arquivo pra definir as rotas acessadas

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Filme from './pages/Filme';

import Erro from './pages/Erro';

import Header from './components/Header';

function RoutesApp() {
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/filme/:id" element={<Filme/>} />

                <Route path='*' element={<Erro/>} /> /* not found page must always be the last */
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;