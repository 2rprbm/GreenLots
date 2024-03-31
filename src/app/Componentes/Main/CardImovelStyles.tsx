import { Button, TablePagination, Typography } from "@mui/material";
import styled from "styled-components";


const PrecoImovelCardEstilizado = styled(Typography)`
        color: #00b8eb;
        font-size: 1.5rem;
        font-weight: 700;
        font-family: ${props => props.theme.fonte.bold};
`

const InformacoesImovelCardEstilizado = styled('p')`
        color: ${props => props.theme.cores.cinzaEscuro};
        font-size: 1rem;
        margin: 0;
`

const BotaoImovelCardEstilizado = styled(Button)`
        color: ${props => props.theme.cores.branco};
        background-color: ${props => props.theme.cores.verde};
        font-size: 1rem;
        font-weight: 700;
        font-family: ${props => props.theme.fonte.bold};
        border-radius: 0;
`

const TablePaginationEstilizado = styled(TablePagination)`
        background-color: ${props => props.theme.cores.cinzaClaro};
        max-width: 1100px;
        width: 100%;
        height: 80px;
`

export {PrecoImovelCardEstilizado, InformacoesImovelCardEstilizado, BotaoImovelCardEstilizado, TablePaginationEstilizado}