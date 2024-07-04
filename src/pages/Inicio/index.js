import Banner from "components/Banner";
import Card from "components/card";
import Titulo from "components/titulo/titulo";
import styles from "./index.module.css"
import { useEffect, useState } from "react";


function Inicio() {

  const [videos, setVideos] = useState([])
  useEffect(() => {
    fetch("https://my-json-server.typicode.com/D4NT3N01R/cinema-api/videos").then(response => response.json()).then(data => { setVideos(data) })
  }, [])

  return (
    <>

      <Banner img="home" color="#154580" />
      <Titulo>

        <h1>Un lugar donde guardar tus videos favoritos</h1>
      </Titulo>

      <section className={styles.container}>
        {videos.map((video) => (
          <Card {...video} key={video.id} />
        ))}
      </section>


    </>
  );
}

export default Inicio;
