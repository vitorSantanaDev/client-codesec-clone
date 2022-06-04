export type IViewProps = {
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
