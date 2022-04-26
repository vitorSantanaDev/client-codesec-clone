import 'styled-componets'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      redPrimary: string
      redLight: string
      redDark: string
      redError: string
      redGradient: string
      redGradientDark: string
      greenSucsses: string
      white: string
      whiteLight: string
      whiteDark: string
      black: string
      blackLight: string
      blackDark: string
      gray1: string
      gray2: string
      gray3: string
      gray4: string
      gray5: string
      gray6: string
      gray7: string
    }
    font: {
      family: {
        default: string
      }
      sizes: {
        small: string
        medium: string
        large: string
        xlarge: string
        xxlarge: string
        huge: string
        xhuge: string
        xxhuge: string
      }
    }
    media: {
      lteMedium: string
    }
    spacings: {
      small: string
      medium: string
      large: string
      xlarge: string
      xxlarge: string
      huge: string
      xhuge: string
      xxhuge: string
    }
  }
}
