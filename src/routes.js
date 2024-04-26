import Cabecalho from "components/Cabecalho/Index"
import Container from "components/Container/Index"
import FavoritarProvider from "components/Contextos/Favorito"
import Player from "components/Player/Index"
import Rodape from "components/Rodape/Index"
import BasePage from "pages/BasePage/Index"
import Favoritos from "pages/Favoritos/Index"
import Inicio from "pages/Inicio/Index"
import NotFound from "pages/NotFound/Index"
import { BrowserRouter, Route, Routes } from "react-router-dom"

function AppRoutes() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<BasePage/>}>
                    <Route index element={<Inicio/>}/>
                    <Route path="favoritos" element={<Favoritos/>}/>
                    <Route path=":id" element={<Player/>}/>
                    <Route path="*" element= {<NotFound/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes