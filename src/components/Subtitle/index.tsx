import { ReactNode } from 'react'
import * as S from './styles'

type SubtitleProps = {
  children: ReactNode
  color?: 'redGradient' | 'redDark' | 'redLight' | 'redPrimary'
  uppercase?: boolean
  icon?: boolean
  iconUrl?: string
}

const Subtitle = ({
  children,
  color = 'redGradient',
  uppercase = true,
  icon = false,
  iconUrl
}: SubtitleProps) => (
  <S.Wrapper iconUrl={iconUrl} icon={icon} uppercase={uppercase} color={color}>
    {children}
  </S.Wrapper>
)

export default Subtitle
