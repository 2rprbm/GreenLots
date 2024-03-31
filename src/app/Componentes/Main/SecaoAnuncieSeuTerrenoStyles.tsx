import styled from "styled-components";


const TituloSecaoEstilizado = styled('h3')`
    color: ${(props) => props.theme.cores.cinzaEscuro}!important;
    font-family: ${(props) => props.theme.fonte.bold}!important;
    font-weight: ${(props) => props.theme.forca.titulo}!important;
    font-style: bold!important;
    font-style: italic;
    font-size: 40px!important;
    text-align: center!important;
    margin: 0!important;
    padding: 0!important;
`

const TextoSecaoEstilizado = styled('p')`
    color: ${(props) => props.theme.cores.cinzaEscuro}!important;
    font-family: ${(props) => props.theme.fonte.bold}!important;
    font-weight: ${(props) => props.theme.forca.texto}!important;
    font-size: 14px!important;
    text-align: left!important;
    margin-bottom: 0px!important;
`

const TextoContacteEstilizado = styled('p')`
    color: ${(props) => props.theme.cores.azul}!important;
    font-family: ${(props) => props.theme.fonte.bold}!important;
    font-weight: ${(props) => props.theme.forca.titulo}!important;
    font-style: bold;
    font-style: italic;
    font-size: 20px!important;
    text-align: left!important;
    margin-bottom: 6px!important;
    margin-top: 0px!important;
`

const TextoWhatsappEstilizado = styled('p')`
    color: ${(props) => props.theme.cores.verde}!important;
    font-family: ${(props) => props.theme.fonte.bold}!important;
    font-weight: ${(props) => props.theme.forca.titulo}!important;
    font-style: bold;
    font-style: italic;
    font-size: 20px!important;
    text-align: left!important;
    margin-bottom: 0px!important;
    margin-top: 0px!important;
`

const TextoEnvieUmaMensagemEstilizado = styled('h5')`
    color: ${(props) => props.theme.cores.azul}!important;
    font-family: ${(props) => props.theme.fonte.bold}!important;
    font-weight: ${(props) => props.theme.forca.titulo}!important;
    font-style: bold;
    font-size: 24px!important;
    text-align: left!important;
    margin-bottom: 6px!important;
    margin-top: 0px!important;
`

export {TituloSecaoEstilizado, TextoSecaoEstilizado, TextoContacteEstilizado, TextoWhatsappEstilizado, TextoEnvieUmaMensagemEstilizado}