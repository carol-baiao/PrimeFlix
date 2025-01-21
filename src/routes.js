// arquivo pra definir as rotas acessadas

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Filme from './pages/Filme';
import Favoritos from './pages/Favoritos';

import Erro from './pages/Erro'; // pagina de erro deve ser sempre a ultima rota

import Header from './components/Header';

function RoutesApp() {
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/filme/:id" element={<Filme/>} />
                <Route path="/favoritos" element={<Favoritos/>} />

                <Route path='*' element={<Erro/>} /> /* not found page must always be the last */
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;