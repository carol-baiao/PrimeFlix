import { useEffect, useState } from 'react';

import { toast } from 'react-toastify';
import './favoritos.css';
import { Link } from 'react-router-dom';

function Favoritos() {
    const [filmes, setFilmes] = useState([]);

    useEffect(() => {
        const filmesSalvos = localStorage.getItem('@primeflix');
        setFilmes(JSON.parse(filmesSalvos) || []);
    }, [])

    function excluirFilme(id) {
        let novaLista = filmes.filter((filme) => {
            return (filme.id !== id); 
        })

        setFilmes(novaLista);

        localStorage.setItem('@primeflix', JSON.stringify(novaLista));
        toast.success('Filme removido com sucesso!');
    }

    return(
        <div className='filmes-salvos'>
            <h1>Meus filmes</h1>

            {filmes.length === 0 && <span>Você não possui nenhum filme salvo!</span>}

            <ul>
                {filmes.map((filme) => {
                    return(
                            <li key={filme.id}>
                                <span>{filme.title}</span>

                                <div>
                                    <Link to={`/filme/${filme.id}`}>Ver detalhes</Link>
                                    <button onClick={() => excluirFilme(filme.id)}>Excluir</button>
                                </div>
                            </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Favoritos;