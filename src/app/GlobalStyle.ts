import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

        @font-face {
                font-family: 'BarlowCondensed-SemiBold';
                src: url('/BarlowCondensed-SemiBold.tff') format('tff');
        }
        @font-face {
                font-family: 'BarlowCondensed-MediumItalic';
                src: url('/BarlowCondensed-MediumItalic.tff') format('tff');
        }
        @font-face {
                font-family: 'BarlowCondensed-Bold';
                src: url('/BarlowCondensed-Bold.tff') format('tff');
        }
        @font-face {
                font-family: 'BarlowCondensed-SemiBoldItalic';
                src: url('/BarlowCondensed-SemiBoldItalic.tff') format('tff');
        }

        body {
                box-sizing: border-box;
                margin: 0;
                padding: 0;
        }

        .slick-next {
                right: 2%!important;
        }

        .slick-prev {
                left: 2%!important;
                z-index: 1;
        }

        .slick-prev::before, .slick-next::before{
                color: #d8385e!important;
                font-size: 1.5rem;
        }

`

export default GlobalStyle
