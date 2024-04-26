import Cabecalho from 'components/Cabecalho/Index'
import styles from './Favoritos.module.css'
import Rodape from 'components/Rodape/Index'
import Banner from 'components/Banner/Index'
import Titulo from 'components/Titulo/Index'
import Card from 'components/Card/Index'
import { useFavoritoContext } from 'components/Contextos/Favorito'

function Favoritos () {
    const{favorito} = useFavoritoContext();


    return(
        <>
        <Banner imagem='Favoritos'/>
        <Titulo>
            <h1>Veja os seus vídeos favoritos</h1>
        </Titulo>
        <section className={styles.container}>
            {favorito.map((fav) => {
                return <Card{...fav} key={fav.id}/>
            })}
        </section>
        </>
    )
}

export default Favoritos