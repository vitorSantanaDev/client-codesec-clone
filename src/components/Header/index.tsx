import Button from 'components/Button'
import Logo from 'components/Logo'
import * as S from './styles'

type HeaderProps = {
  logo: string
  logoAltText: string
  buttontext: string
}

const Header = ({ logo, logoAltText, buttontext }: HeaderProps) => (
  <S.Wrapper>
    <Logo url="/" srcImage={logo} altText={logoAltText} />
    <Button size="small">{buttontext}</Button>
  </S.Wrapper>
)

export default Header
