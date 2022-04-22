import { RouterContext } from 'next/dist/shared/lib/router-context'

import { theme } from '../src/styles/theme/theme'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from '../src/styles/global'

export const parameters = {
  backgrounds: {
    default: 'dark',
    values: [
      {
        name: 'light',
        value: theme.colors.white
      },
      {
        name: 'dark',
        value: theme.colors.blackDark
      }
    ]
  },
  nextRouter: {
    Provider: RouterContext.Provider
  }
}

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Story />
    </ThemeProvider>
  )
]
