import {
  ISectionAboutProps,
  ISectionClassProps,
  ISectionFaqProps,
  ISectionHackerProps,
  ISectionHeroProps,
  ISectionHowItWorksProps,
  ISectionIconsProps,
  ISectionInstructorProps,
  ISectionParticipateProps,
  ISectionTestimonialsProps
} from './sections'

export interface IHeaderProps {
  _id?: string
  logo: {
    urlImage: string
    altText: string
  }
  button: {
    url: string
    buttonText: string
  }
}

export interface IFooterProps {
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

export interface ILandingPage {
  header: IHeaderProps
  sectionHero: ISectionHeroProps
  sectionInfos: ISectionIconsProps
  sectionAbout: ISectionAboutProps
  sectionClass: ISectionClassProps
  sectionHowItWorks: ISectionHowItWorksProps
  sectionInstructor: ISectionInstructorProps
  sectionTestimonials: ISectionTestimonialsProps
  sectionParticipate: ISectionParticipateProps
  sectionFaq: ISectionFaqProps
  sectionHacker: ISectionHackerProps
  footer: IFooterProps
}
