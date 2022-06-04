import { IViewProps } from './types'
import * as S from './styles'

const Subtitle = ({
  children,
  color = 'redGradient',
  uppercase = true,
  icon = false,
  iconUrl
}: IViewProps) => (
  <S.Wrapper iconUrl={iconUrl} icon={icon} uppercase={uppercase} color={color}>
    {children}
  </S.Wrapper>
)

export default Subtitle
