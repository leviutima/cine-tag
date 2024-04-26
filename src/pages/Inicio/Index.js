import styles from './Inicio.module.css'
import Banner from "components/Banner/Index"
import Cabecalho from "components/Cabecalho/Index"
import Card from "components/Card/Index"
import Rodape from "components/Rodape/Index"
import Titulo from "components/Titulo/Index"
import videos from 'json/db.json'

function Inicio () {
    return(
        <>
            <Cabecalho/>
            <Banner imagem='Home'/>
            <Titulo>
                <h1>Assista aos melhores vídeos virais!</h1>
            </Titulo>
            <section className={styles.container}>
                {videos.map((video ) => {
                   return <Card {...video} key={video.id}/>
                })}
            </section>
            <Rodape />
        </>
    )
}

export default Inicio