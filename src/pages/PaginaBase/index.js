import Cabecera from "components/Cabecera/Cabecera"
import Pie from "components/Pie"
import Container from "components/container"
import FavoritosProvider from "context/favoritos"
import { Outlet } from "react-router-dom"

function PaginaBase() {

    return (

        <main>

            <Cabecera />
            <FavoritosProvider>
                <Container>
                    <Outlet />
                </Container>
            </FavoritosProvider>
            <Pie />
        </main>
    )
}

export default PaginaBase