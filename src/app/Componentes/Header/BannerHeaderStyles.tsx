import styled from "styled-components";


const ChamadaPrincipalEstilizada = styled('h2')`
        margin: 0!important;
        padding: 0!important;
        color: ${(props) => props.theme.cores.branco}!important;
        font-family: ${(props) => props.theme.fonte.semibold}!important;
        position: relative!important;
        left: 20%!important;
        top: 50%!important;
        transform: translateY(-50%)!important;
        font-size: 40px;
        @media screen and (max-width: 767px){
                text-align: center;
                left: 0%!important;
        }
`

export {ChamadaPrincipalEstilizada};