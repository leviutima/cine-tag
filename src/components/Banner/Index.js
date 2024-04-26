import styles from './Banner.module.css'


function Banner({imagem}) {
    return(
        <div className={styles.banner}
        style={{backgroundImage: `url('/images/Banner ${imagem}.png')`}}>
        </div>
    )
}

export default Banner