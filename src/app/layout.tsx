'use client'
import GlobalStyle from '../app/GlobalStyle'
import { ThemeProvider } from 'styled-components'
import tema from '../app/tema'
import StyledComponentsRegistry from '../app/_registry'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='pt-BR'>
      <head />
      <ThemeProvider theme={tema}>
        <StyledComponentsRegistry>
          <GlobalStyle />
          <body>{children}</body>
        </StyledComponentsRegistry>
      </ThemeProvider>
    </html>
  )
}

