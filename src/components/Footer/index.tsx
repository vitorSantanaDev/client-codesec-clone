import Logo from 'components/Logo'
import Link from 'next/link'
import * as S from './styles'

type FooterProps = {
  _id?: string
  logo: {
    urlImage: string
    altText: string
  }
  footerContent: string
  socialLinks: {
    href: string
    icon: {
      urlImage: string
      altText: string
    }
  }[]
}

const Footer = ({ logo, footerContent, socialLinks }: FooterProps) => (
  <S.Wrapper>
    <Logo
      className="logo"
      url="/"
      srcImage={logo.urlImage}
      altText={logo.altText}
    />
    <S.FooterContent>{footerContent}</S.FooterContent>
    <S.SocialLinksWrapper>
      {socialLinks.map((link, index) => (
        <Link key={`${index}-${link.href}`} href={link.href}>
          <S.SocialLink>
            <S.SocialLinkIcon
              src={link.icon.urlImage}
              alt={link.icon.altText}
            />
          </S.SocialLink>
        </Link>
      ))}
    </S.SocialLinksWrapper>
  </S.Wrapper>
)

export default Footer
