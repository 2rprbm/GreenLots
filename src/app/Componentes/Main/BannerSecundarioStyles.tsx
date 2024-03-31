import styled from "styled-components";


const TituloBannerSecundarioEstilizado = styled('h2')`
        margin: 0!important;
        padding: 0!important;
        color: ${(props) => props.theme.cores.branco}!important;
        font-family: ${(props) => props.theme.fonte.semibolditalic}!important;
        font-style: italic;
        position: absolute!important;
        left: 50%!important;
        top: 20%!important;
        transform: translateX(-50%);
        font-size: 60px;
        text-align: center;
        @media screen and (max-width: 767px){
                left: 0%!important;
        }
`

const ChamadaBannerSecundarioEstilizado = styled('h3')`
        margin: 0!important;
        padding: 0!important;
        color: ${(props) => props.theme.cores.branco}!important;
        font-family: ${(props) => props.theme.fonte.mediumitalic}!important;
        font-style: italic;
        position: absolute!important;
        left: 50%!important;
        top: 40%!important;
        transform: translateY(-50%);
        transform: translateX(-50%);
        font-size: 36px;
        text-align: center;
        font-weight: 400;
        @media screen and (max-width: 767px){
                left: 0%!important;
        }
`

export {ChamadaBannerSecundarioEstilizado, TituloBannerSecundarioEstilizado };