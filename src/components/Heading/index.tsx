import { IViewProps } from './types'
import * as S from './styles'

const Heading = ({
  children,
  size = 'huge',
  as = 'h1',
  color = 'white'
}: IViewProps) => (
  <S.Wrapper as={as} color={color} size={size}>
    {children}
  </S.Wrapper>
)

export default Heading
