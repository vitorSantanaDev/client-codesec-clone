import Link from 'next/link'
import * as S from './styles'

type LogoProps = {
  srcImage: string
  altText: string
  url: string
}

const Logo = ({ srcImage, altText, url }: LogoProps) => (
  <S.Wrapper>
    <Link href={url}>
      <S.Logo src={srcImage} alt={altText} />
    </Link>
  </S.Wrapper>
)

export default Logo
