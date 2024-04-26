import styles from './Inicio.module.css'
import Banner from "components/Banner/Index"
import Card from "components/Card/Index"
import Titulo from "components/Titulo/Index"
import videos from 'json/db.json'

function Inicio () {
    return(
        <>
            <Banner imagem='Home'/>
            <Titulo>
                <h1>Assista aos melhores vídeos virais!</h1>
            </Titulo>
            <section className={styles.container}>
                {videos.map((video ) => {
                   return <Card {...video} key={video.id}/>
                })}
            </section>
        </>
    )
}

export default Inicio