import { Container } from "@mui/material";
import styled from "styled-components";

const ContainerEstilizado = styled(Container)`
    margin-top: 264px;
    background-color: ${(props) => props.theme.cores.cinzaClaro}!important;
    padding: 0px!important;
    height: 500px!important;
    padding-right: 0px!important;
    margin-right: 0px!important;
    padding-left: 0px!important;
    margin-left: 0px!important;
    width: 100vw;
    max-width: none!important;
    padding-bottom: 64px!important;
    box-sizing: content-box!important;
`


export {ContainerEstilizado};