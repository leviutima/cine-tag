import Cabecalho from "components/Cabecalho/Index"
import Container from "components/Container/Index"
import FavoritarProvider from "components/Contextos/Favorito"
import Rodape from "components/Rodape/Index"
import Favoritos from "pages/Favoritos/Index"
import Inicio from "pages/Inicio/Index"
import { BrowserRouter, Route, Routes } from "react-router-dom"

function AppRoutes() {
    return(
        <BrowserRouter>
        <Cabecalho/>
        <Container>
            <FavoritarProvider>
            <Routes>
                <Route path="/" element={<Inicio/>}/>
                <Route path="/favoritos" element={<Favoritos/>}/>
            </Routes>
            </FavoritarProvider>
        </Container>
        <Rodape/>
        </BrowserRouter>
    )
}

export default AppRoutes