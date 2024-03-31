import { Box } from "@mui/material";
import { ChamadaBannerSecundarioEstilizado, TituloBannerSecundarioEstilizado } from "./BannerSecundarioStyles";
import CardQuemSomos from "./CardQuemSomos";
import { argumentosQuemSomos } from "../../assets/data/dados";

const BannerSecundario = () => {
    return (
        <Box 
            sx={{
                position: 'relative',
                backgroundImage: 'url(/banner_secundario.jpg)',
                height: '60vh',
                backgroundSize: 'cover',
                backgroundPosition: 'center top',
                width: '100vw',
            }}
        >
            <TituloBannerSecundarioEstilizado>
                GreenLots
            </TituloBannerSecundarioEstilizado>
            <ChamadaBannerSecundarioEstilizado>
                a plataforma de venda de terrenos mais confiável do país.
            </ChamadaBannerSecundarioEstilizado>
            <Box 
                sx={{
                    display: 'flex',
                    columnGap: '20px',
                    position: 'absolute',
                    top: '70%',
                    left: '50%',
                    transform: 'translateX(-50%)'
                }}
            >
                {argumentosQuemSomos.map((argumento) => 
                    <CardQuemSomos argumento={argumento.argumento} descricao={argumento.descricao}/>
                )}
            </Box>
        </Box>
    )
}


export default BannerSecundario;