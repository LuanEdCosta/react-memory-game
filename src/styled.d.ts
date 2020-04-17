import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    accent: string
    primaryText: string
    secondaryText: string
    background: string
    controlBar: string
    cardBackFace: string
    cardFrontFace: string
  }
}
