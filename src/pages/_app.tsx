import Head from 'next/head'
import type { AppProps } from 'next/app'

import { ThemeProvider } from 'styled-components'
import { theme } from 'styles/theme/theme'
import GlobalStyles from 'styles/global'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Codesec - clone</title>
        <link rel="shortcut icon" href="/images/icon-512.png" />
        <link rel="apple-touch-icon" href="/images/icon-512.png" />
        <link rel="manifest" href="manifest.json" />
        <meta
          name="description"
          content="A simple project starter to work with TypeScript, React, NextJs and Styled Components"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default App
