import { FilledInput, InputLabel, MenuItem, Select } from "@mui/material";
import styled from "styled-components";


const SelectCidadeEstilizado = styled(Select)`
    background-color: #e8e9e9!important;
    color: ${(props) => props.theme.cores.cinzaEscuro}!important;
    &::before {
        border-bottom: none!important;
    }
    &::after {
        border-bottom: none!important;
    }
`
const InputLabelCidadeEstilizado = styled(InputLabel)`
    font-size: 12px!important;
    color: #58595b!important;
    &::focus {
        color: ${(props) => props.theme.cores.cinzaEscuro}!important;
    }
`

const SelectBairroEstilizado = styled(Select)`
    background-color: #e8e9e9!important;
    color: ${(props) => props.theme.cores.cinzaEscuro}!important;
    &::before {
        border-bottom: none!important;
    }
    &::after {
        border-bottom: none!important;
    }
`

const FilledInputValorEstilizado = styled(FilledInput)`
    background-color: #e8e9e9!important;
    color: ${(props) => props.theme.cores.cinzaEscuro}!important;
    &::before {
        border-bottom: none!important;
    }
    &::after {
        border-bottom: none!important;
    }
`

const FilledInputAreaTotalEstilizado = styled(FilledInput)`
    background-color: #e8e9e9!important;
    color: ${(props) => props.theme.cores.cinzaEscuro}!important;
    &::before {
        border-bottom: none!important;
    }
    &::after {
        border-bottom: none!important;
    }
`

const InputLabelBairroEstilizado = styled(InputLabel)`
    font-size: 12px!important;
    color: #58595b!important;
    &::focus {
        color: ${(props) => props.theme.cores.cinzaEscuro}!important;
    }
`

const InputLabelValorEstilizado = styled(InputLabel)`
    font-size: 12px!important;
    color: #58595b!important;
    &::focus {
        color: ${(props) => props.theme.cores.cinzaEscuro}!important;
    }
`

const InputLabelAreaTotalEstilizado = styled(InputLabel)`
    font-size: 12px!important;
    color: #58595b!important;
    &::focus {
        color: ${(props) => props.theme.cores.cinzaEscuro}!important;
    }
`

const TextoOrdenarPorEstilizado = styled('span')`
    color: ${(props) => props.theme.cores.cinzaEscuro}!important;
    font-size: 18px!important;
    font-family: ${(props) => props.theme.fonte.bold}!important;
    font-weight: 700!important;
`
        
const SelectOrdenadorEstilizado = styled(Select)`
    background-color: ${(props) => props.theme.cores.azul}!important;
    color: ${(props) => props.theme.cores.branco}!important;
    font-family: ${(props) => props.theme.fonte.bold}!important;
    font-weight: 700!important;
    &::before {
        border-bottom: none!important;
    }
    &::after {
        border-bottom: none!important;
    }
`

const MenuItemOrdenadorEstilizado = styled(MenuItem)`
    background-color: ${(props) => props.theme.cores.azul}!important;
    color: ${(props) => props.theme.cores.branco}!important;
    font-family: ${(props) => props.theme.fonte.bold}!important;
    font-weight: 700!important;
    padding-top: 0px!important;
    padding-bottom: 0px!important;
`


export {SelectCidadeEstilizado, InputLabelCidadeEstilizado, SelectBairroEstilizado, InputLabelBairroEstilizado, InputLabelValorEstilizado, FilledInputValorEstilizado, InputLabelAreaTotalEstilizado, FilledInputAreaTotalEstilizado, TextoOrdenarPorEstilizado, SelectOrdenadorEstilizado, MenuItemOrdenadorEstilizado};