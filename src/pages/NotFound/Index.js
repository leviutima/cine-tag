import styles from './NotFound.module.css'

function NotFound () {
    return(
        <>
            <section className={styles.container}>
                <h2>Ops</h2>
                <p>Página não existe ou não foi encontrada</p>
            </section>
        </>
    )
}

export default NotFound