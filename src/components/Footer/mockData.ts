import { IViewProps } from './type'

export const mockDataFooterProps: IViewProps = {
  logo: {
    altText: 'logo codesec',
    urlImage: '/images/logo-2-codesec.svg'
  },
  footerContent: 'Todos od direitos reservados',
  socialLinks: [
    {
      href: '/',
      icon: {
        altText: 'icon social',
        urlImage: '/images/instagram.svg'
      }
    },
    {
      href: '/',
      icon: {
        altText: 'icon social',
        urlImage: '/images/facebook.svg'
      }
    },
    {
      href: '/',
      icon: {
        altText: 'icon social',
        urlImage: '/images/youtube.svg'
      }
    }
  ]
}
