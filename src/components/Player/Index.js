import Banner from 'components/Banner/Index'
import styles from './Player.module.css'
import Titulo from 'components/Titulo/Index'
import { useParams } from 'react-router-dom'
import videos from 'json/db.json'
import NotFound from 'pages/NotFound/Index'

function Player () {
    const parametros = useParams();
    const video = videos.find((video) => {
        return video.id === Number(parametros.id)})


        if (!video) {
            return<NotFound/>
        }

    return(
        <>
            <Banner imagem='Player'/>
            <Titulo>
                <h1>Assista ao vídeo</h1>
            </Titulo>
            <section className={styles.container}>
                <iframe width="100%" 
                    height="100%" 
                    src={video.link} 
                    title={video.titulo}
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerpolicy="strict-origin-when-cross-origin" 
                    allowfullscreen>
                </iframe>
            </section>
        </>
    )
}

export default Player