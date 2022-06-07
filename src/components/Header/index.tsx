import Button from 'components/Button'
import Logo from 'components/Logo'

import { IViewProps } from './type'
import * as S from './styles'

const Header = ({ logo, button }: IViewProps) => (
  <S.Wrapper>
    <Logo
      className="logo"
      url="/"
      srcImage={logo.urlImage}
      altText={logo.altText}
    />
    <Button size="small">{button.buttonText}</Button>
  </S.Wrapper>
)

export default Header
