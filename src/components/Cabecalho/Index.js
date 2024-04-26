import { Link } from 'react-router-dom'
import styles from './Cabecalho.module.css'
import logo from '../Cabecalho/logo.png'
import CabecalhoLink from 'components/CabecalhoLink/Index'

function Cabecalho () {
    return(
        <header className={styles.cabecalho}>
            <Link to="./">
                <img src={logo} alt='logo do cinetag'></img>
            </Link>
            <nav>
                <CabecalhoLink url='./'>Home</CabecalhoLink>
                <CabecalhoLink url='./Favoritos'>Favoritos</CabecalhoLink>
            </nav>
        </header>
    )
}

export default Cabecalho