import { ReactNode } from 'react'
import * as S from './styles'

type HeadingProps = {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5'
  size?:
    | 'small'
    | 'medium'
    | 'large'
    | 'xlarge'
    | 'xxlarge'
    | 'huge'
    | 'xhuge'
    | 'xxhuge'
  color?: string
  children: ReactNode
}

const Heading = ({
  children,
  size = 'huge',
  as = 'h1',
  color = 'white'
}: HeadingProps) => (
  <S.Wrapper as={as} color={color} size={size}>
    {children}
  </S.Wrapper>
)

export default Heading
