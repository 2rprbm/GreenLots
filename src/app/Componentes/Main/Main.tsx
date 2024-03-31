'use client'

import { Container} from "@mui/material"
import BuscaFiltrosMain from "./BuscaFiltrosMain";
import Cards from "./Cards";
import BannerSecundario from "./BannerSecundario";
import { ContainerEstilizado } from "./MainStyles";
import SecaoAnuncieSeuTerreno from "./SecaoAnuncieSeuTerreno";


const Main = () => {

        
    return (
        <main>
            <Container
                sx={{
                    marginTop: '64px',
                    paddingLeft: '0px!important',
                    paddingRight: '0px!important',
                    display: 'flex',
                    flexDirection: 'column'
                }}
            >
                <BuscaFiltrosMain/>
                <Cards/>
            </Container>
            <Container
                sx={{
                    paddingLeft: '0!important',
                    paddingRight: '0!important',
                    maxWidth: 'none!important'
                }}
            >
                <BannerSecundario/>
            </Container>
            <ContainerEstilizado>
                <SecaoAnuncieSeuTerreno/>
            </ContainerEstilizado>
        </main>
    );
}

export default Main;