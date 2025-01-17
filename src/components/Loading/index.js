import './loading.css';

import { dotSpinner } from 'ldrs'; // loading 

dotSpinner.register(); //(loading) web component

function Loading() {
    return(
        <div className='loading'>
                <h2>Carregando...</h2>  
                <l-dot-spinner
                size="40"
                speed="0.9" 
                color="black" 
                ></l-dot-spinner>
        </div>
    )
}

export default Loading;