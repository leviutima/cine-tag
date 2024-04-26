import Cabecalho from 'components/Cabecalho/Index'
import styles from './Favoritos.module.css'
import Rodape from 'components/Rodape/Index'
import Banner from 'components/Banner/Index'
import Titulo from 'components/Titulo/Index'
import Card from 'components/Card/Index'

function Favoritos () {
    return(
        <>
        <Banner imagem='Favoritos'/>
        <Titulo>
            <h1>Veja os seus vídeos favoritos</h1>
        </Titulo>
        <section className={styles.container}>
            <Card id='2' titulo='Um componente no espaço' capa='https://cdn3.gnarususercontent.com.br/2802-react-praticando/img1.png'></Card>
        </section>
        </>
    )
}

export default Favoritos