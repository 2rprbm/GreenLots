import { Box, CardActionArea, CardActions, CardContent, CardMedia} from "@mui/material";
import { CardQuemSomosEstilizado, TextoCardQuemSomosEstilizado, TituloCardQuemSomosEstilizado } from "./CardQuemSomosStyles";
import { ArgumentoQuemSomosProps } from "../../assets/data/interfaces";

const CardQuemSomos = ({argumento, descricao}: ArgumentoQuemSomosProps) => {
    return (
        <CardQuemSomosEstilizado>
            <CardActionArea
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    paddingTop: '16px'
                }}
            >
                <CardMedia
                    component="img"
                    height="90"
                    image='/icon-estrela_branca.svg'
                    alt="ícone estrela argumento positivo quem somos empresa"
                    sx ={{
                        maxWidth: '90px'
                    }}
                />
                <CardContent
                    sx={{
                        paddingBottom: '0'
                    }}
                >
                    <TituloCardQuemSomosEstilizado>
                        {argumento}
                    </TituloCardQuemSomosEstilizado>
                </CardContent>
            </CardActionArea>
            <CardActions
                sx={{
                    padding: '0 24px 16px 24px'
                }}
            >
                <Box>
                    <TextoCardQuemSomosEstilizado>
                        {descricao}
                    </TextoCardQuemSomosEstilizado>
                </Box>
            </CardActions>
        </CardQuemSomosEstilizado>
    )
}

export default CardQuemSomos;