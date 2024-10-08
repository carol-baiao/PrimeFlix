import { useEffect, useState } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';
import './home.css';

function Home() {
    const [filmes, setFilmes] = useState([]);

    useEffect(() => {
        async function loadFilmes() {
            const response = await api.get("movie/now_playing", {
                params: {
                    api_key: "135fef96c7de1b86e0ac8f15d7cc0422",
                    language: "pt-BR",
                    page: 1
                }
            });

            setFilmes(response.data.results.slice(0, 10))
        }

        loadFilmes();
    }, [])

    return (
            <div className='filme-list'>
                {filmes.map((filme) => {
                    return(
                        <article key={filme.id}>
                            <strong key={filme.id}>{filme.title}</strong>
                            <div className='container-image'>
                                <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title}/>
                                <Link to={`/filme/${filme.id}`}>Acessar</Link>
                            </div>
                        </article>
                    )
                })}
            </div>
    )
}

export default Home;