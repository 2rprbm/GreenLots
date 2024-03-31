import { Card } from "@mui/material";
import styled from "styled-components";


const CardQuemSomosEstilizado = styled(Card)`
        background-color: ${(props) => props.theme.cores.azul}!important;
        max-width: 290px!important;
        width: 290px!important;
        height: 290px!important;      
        border-radius: 0px!important; 
`

const TituloCardQuemSomosEstilizado = styled('h5')`
        color: ${(props) => props.theme.cores.branco}!important;
        font-family: ${(props) => props.theme.fonte.bold}!important;
        text-align: center!important;      
        font-size: 24px!important;      
        font-style: italic!important;
        margin: 8px 0;      
`

const TextoCardQuemSomosEstilizado = styled('p')`
        color: ${(props) => props.theme.cores.preto}!important;
        text-align: left!important;      
        font-size: 12px!important;       
        margin-bottom: 0!important; 
`

export {CardQuemSomosEstilizado, TituloCardQuemSomosEstilizado, TextoCardQuemSomosEstilizado};