import Button from 'components/Button'
import Logo from 'components/Logo'

import { IViewProps } from './type'
import * as S from './styles'

const Header = ({ logo, logoAltText, buttontext }: IViewProps) => (
  <S.Wrapper>
    <Logo className="logo" url="/" srcImage={logo} altText={logoAltText} />
    <Button size="small">{buttontext}</Button>
  </S.Wrapper>
)

export default Header
