import Banner from "components/Banner"
import styles from "./player.module.css"
import Titulo from "components/titulo/titulo"
import { useParams } from "react-router-dom"
import videos from "data/db.json"
import NotFound from "pages/notFound"
import { useEffect, useState } from "react"
function Player(){

        const [video, setVideo] = useState([])
      

        const parametros = useParams()
        useEffect(()=>{
            fetch(`https://my-json-server.typicode.com/D4NT3N01R/cinema-api/videos?id=${parametros.id}`).then(response=>response.json()).then(data=>setVideo(...data))
        },[])
     
   
   console.log (video)

   if(!video)return <NotFound/>
   return(
<>
        <Banner img="player" color="#68B9AG"/>
        <Titulo>

            <h1> Player</h1>
        </Titulo>
        <section className={styles.container}>
        <iframe width="100%" height="315%" 
        src={video.link} 
        title= {video.titulo}
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            
            </section>
        </>
    )

}

export default Player