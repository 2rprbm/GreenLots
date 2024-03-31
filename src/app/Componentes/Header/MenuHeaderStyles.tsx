import styled from "styled-components";
import AppBar from '@mui/material/AppBar';


const AppBarEstilizado = styled(AppBar)`
        background-color: ${(props) => props.theme.cores.verde};
        @media screen and (min-width: 600px){
            min-height: 80px;
        }
`

export {AppBarEstilizado};