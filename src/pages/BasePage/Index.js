import Cabecalho from "components/Cabecalho/Index"
import Container from "components/Container/Index"
import FavoritarProvider from "components/Contextos/Favorito"
import Rodape from "components/Rodape/Index"
import { Outlet } from "react-router-dom"

function BasePage () {
    return(
        <main>
            <Cabecalho/>
            <FavoritarProvider>
                <Container>
                    <Outlet/>
                </Container>
            </FavoritarProvider>
            <Rodape/>
        </main>
    )
}

export default BasePage