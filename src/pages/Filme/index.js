import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import  api from '../../services/api';

import Loading from '../../components/Loading';
import './filme.css';

function Filme() {
    const { id } = useParams(); //pegando id passado como parametro na url 
    const [filme, setFilme] = useState({});
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        async function loadFilme() {
            await api.get(`/movie/${id}`, {
                params: {
                    api_key: "135fef96c7de1b86e0ac8f15d7cc0422",
                    language: "pt-BR",
                }
            })
            .then((response) => {
                setFilme(response.data);
                setLoading(false);
            }) //caso de sucesso da promise (get) - achou o filme
            .catch((error) => { // não achou o filme 
                setLoading(false);
            })
        }

        loadFilme();

        return () => { //para quando o componente for "desmontado"

        }
    }, []);

    if(loading) {
        return(
            <Loading />
        );
    }

    return(
        <div className='filme-detail-page'>
            <div className='filme-detail'>
                <h1>{filme.title}</h1>
                <div >
                    <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title} className='filme-detail-img'/>
                </div>
                <h3>Sinopse:</h3>
                <span>{filme.overview}</span>
                <strong>Avaliação: {filme.vote_average} / 10</strong>
            </div>

            <div className='area-buttons'>
                <button>Salvar</button>
                <button>
                    <a href='#'>Trailer</a>
                </button>
            </div>
        </div>
    )
}

export default Filme;