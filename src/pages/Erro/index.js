import { Link } from 'react-router-dom';
import './erro.css';

function Erro() {
    return(
        <div className='container-notfound'>
            <div className="not-found">
                <h1>404</h1>
                <h2>Ops! Parece que essa página não existe!</h2>
                <Link to="/">Veja todos os filmes!</Link>
            </div>
        </div>
    )
}

export default Erro;