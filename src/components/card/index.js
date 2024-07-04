
import { Link } from "react-router-dom";
import Styles from "./card.module.css"
import iconfavorito  from "./iconfav.png"
import iconnoFavorito  from "./iconNoFav.png"
import { useFavoritosContext } from "context/favoritos"

function Card({id, capa, titulo}){
const {favorito, agregarFavorito} = useFavoritosContext();
const isFavorito = favorito.some(fav=> fav.id === id);
const icon = isFavorito ? iconfavorito : iconnoFavorito


    return(

        <div className={Styles.container}>
            <Link className={Styles.link} to={`/${id}`}>
            <img src={capa} alt={titulo} className={Styles.capa}/>
            <h2>{titulo}</h2>
            </Link>
            
            <img src={icon} alt="icono favorito" onClick={()=> agregarFavorito({id, titulo, capa})}/>
        </div>
    )

}

export default Card