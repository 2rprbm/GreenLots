import { Box, Container } from "@mui/material"
import { TextoContacteEstilizado, TextoEnvieUmaMensagemEstilizado, TextoSecaoEstilizado, TextoWhatsappEstilizado, TituloSecaoEstilizado } from "./SecaoAnuncieSeuTerrenoStyles"
import Link from "next/link"


const SecaoAnuncieSeuTerreno = () => {
    return (
        <Container
            sx={{
                padding: '64px 100px!important'
            }}
        >
            <TituloSecaoEstilizado>
                TEM UM 
                <span 
                    style={{color: '#00b8eb'}}
                > TERRENO
                </span> PARA VENDER?
            </TituloSecaoEstilizado>
            <Box
                sx={{
                    display: 'flex',
                    columnGap: '80px',
                    marginTop: '64px'
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        maxWidth: '50%'
                    }}
                >
                    <TextoSecaoEstilizado>
                        A GREENLOTS pode auxiliar neste processo através de
                        ferramentas de tecnologia digital, aliando automação de
                        processos, captação e cruzamento de dados, inteligência
                        artificial com objetivo de encontrar o cliente potencial para
                        fechar negócio com você.
                    </TextoSecaoEstilizado>
                    <TextoSecaoEstilizado>
                        Entre em contato conosco através do formulário, ou
                        diretamente pelo WhatsApp, para conversarmos mais
                        detalhadamente sobre como proceder.
                    </TextoSecaoEstilizado>
                    <TextoSecaoEstilizado>
                        Aguardamos seu contato!
                    </TextoSecaoEstilizado>
                    <Box
                        sx={{
                            display: 'flex',
                            columnGap: '24px',
                            alignItems: 'center',
                            marginTop: '40px'
                        }}
                    >
                        <Link
                            href={'https://www.uol.com.br'}
                            target="_blank"
                        >
                            <img 
                                alt = "Ícone do botão do whats app"
                                src="/icon-whatsapp_verdeGde.svg"
                            />
                        </Link>
                        <Box>
                            <TextoContacteEstilizado>
                                Contacte-nos via 
                            </TextoContacteEstilizado>
                            <TextoWhatsappEstilizado>
                                WHATSAPP:
                            </TextoWhatsappEstilizado>
                        </Box>
                    </Box>
                </Box>
                <Box 
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        maxWidth: '50%'
                    }}
                >
                    <TextoEnvieUmaMensagemEstilizado>Envie uma mensagem:</TextoEnvieUmaMensagemEstilizado>
                    <p>FORM AQUI</p>
                </Box>
            </Box>
        </Container>
    )
}


export default SecaoAnuncieSeuTerreno