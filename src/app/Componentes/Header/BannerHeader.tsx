import { Container } from "@mui/material";
import { ChamadaPrincipalEstilizada } from "./BannerHeaderStyles";

const BannerHeader = () => {
    return(
        <>
            <Container
                sx={{
                    paddingLeft: '0!important',
                    paddingRight: '0!important',
                    maxWidth: 'none!important',
                    backgroundImage: 'url(/img-banner4-2.jpg)',
                    height: '60vh',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    width: '100vw'
                }}
            >
                <ChamadaPrincipalEstilizada>O TERRENO <br/>dos seus sonhos<br/>está aqui.</ChamadaPrincipalEstilizada>
            </Container>
        </>
    )
}


export default BannerHeader;