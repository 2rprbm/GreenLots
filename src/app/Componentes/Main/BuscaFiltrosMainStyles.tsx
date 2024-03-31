import { Typography } from "@mui/material";
import styled from "styled-components";


const TextoEstilizado = styled(Typography)`
        text-align: center;
        font-size: 2rem;
        color: ${(props) => props.theme.cores.azul};
        font-family: ${(props) => props.theme.fonte.mediumitalic};
        font-weight: 500;
        font-style: italic;
        
`

export {TextoEstilizado};