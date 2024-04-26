import Banner from "components/Banner/Index"
import Cabecalho from "components/Cabecalho/Index"
import Rodape from "components/Rodape/Index"

function Inicio () {
    return(
        <>
            <Cabecalho/>
            <Banner imagem='Home'/>
            <Rodape />
        </>
    )
}

export default Inicio