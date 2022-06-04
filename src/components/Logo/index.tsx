import Link from 'next/link'

import { IViewProps } from './types'
import * as S from './styles'

const Logo = ({ srcImage, altText, url, className }: IViewProps) => (
  <S.Wrapper>
    <Link href={url}>
      <S.Logo className={className} src={srcImage} alt={altText} />
    </Link>
  </S.Wrapper>
)

export default Logo
