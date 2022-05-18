import Link from 'next/link'
import * as S from './styles'

type LogoProps = {
  srcImage: string
  altText: string
  url: string
  className?: string
}

const Logo = ({ srcImage, altText, url, className }: LogoProps) => (
  <S.Wrapper>
    <Link href={url}>
      <S.Logo className={className} src={srcImage} alt={altText} />
    </Link>
  </S.Wrapper>
)

export default Logo
