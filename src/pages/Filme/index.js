import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import  api from '../../services/api';

import { toast } from 'react-toastify';
import Loading from '../../components/Loading';
import './filme.css';

function Filme() {
    const { id } = useParams(); //pegando id passado como parametro na url 
    const navigate = useNavigate(); // pra quando o filme não for encontrado pela api

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
            .catch(() => { // não achou o filme 
                navigate("/", { replace: true }); // caso não encontre o filme, joga o usuario pra home
                return;
            })
        }

        loadFilme();

        return () => { //para quando o componente for "desmontado"

        }
    }, [id, navigate] ); // id e navigate são dependencias externas pro useEffect funcionar aqui, logo passo pro useEffect as dependencias q uso

    function salvarFilme() {
        // salvando filme no local storage
        const listaFilmes = localStorage.getItem('@primeflix');

        let filmesSalvos = JSON.parse(listaFilmes) || []; /* tenta fazer a conversão do array de filmes pra JSON,
        se não tiver nada no array, cria um novo */

        const hasFilme = filmesSalvos.some( (filmeSalvo) => filmeSalvo.id === filme.id); // verifica se filme já foi existe no array

        if(hasFilme) {
            toast.warn('Este filme já foi salvo anteriormente!');
            return;
        }

        filmesSalvos.push(filme);
        localStorage.setItem('@primeflix', JSON.stringify(filmesSalvos)); // transforma o array de filmes pra JSON e salva no local storage
        toast.success('Filme salvo com sucesso!');
    }

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
                <button onClick={salvarFilme}>Salvar</button>
                <button>
                    <a target='blank' rel='external' href={`https://www.youtube.com/results?search_query=${filme.title} Trailer`}>Trailer</a>
                </button>
            </div>
        </div>
    )
}

export default Filme;