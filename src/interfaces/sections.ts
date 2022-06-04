export interface ISectionHeroProps {
  _id?: string
  subtitle: string
  title: string
  linkIcon: string
  link: string
  linkText: string
  description: string
  subtitleIcon?: boolean
  subtitleIconUrl?: string
}

export interface ISectionIconsProps {
  _id?: string
  icons: {
    _id?: string
    image: {
      urlImage: string
      altText: string
    }
    textInfo: string
  }[]
}

export interface ISectionAboutProps {
  _id?: string
  subtitle: string
  title: string
  description: string
  topics: {
    _id: string
    textInfo: string
    icon: {
      urlImage: string
      altText: string
    }
  }[]
  illustration: {
    urlImage: string
    altText: string
  }
}

export interface ISectionClassProps {
  _id?: string
  subtitle: string
  title: string
  classs: {
    _id: string
    dateClass: string
    hourAndDay: string
    classNumber: string
    icon: {
      urlImage: string
      altText: string
    }
    titleClass: string
    descriptionClass: string
  }[]
}

export interface ISectionHowItWorksProps {
  subtitle: string
  title: string
  description: string
  steps: {
    _id: string
    icon: {
      altText: string
      urlImage: string
    }
    titleStep: string
    descriptionStep: string
  }[]
}

export interface ISectionInstructorProps {
  title: string
  subtitle: string
  description: string
  instructor: {
    name: string
    photo: {
      urlImage: string
      altText: string
    }
    link: {
      linkText: string
      linkUrl: string
    }
  }
}

export interface ISectionTestimonialsProps {
  _id?: string
  title: string
  subtitle: string
  testimonials: {
    _id: string
    name: string
    profession: string
    city: string
    description: string
    photo: {
      urlImage: string
      altText: string
    }
  }[]
}

export interface ISectionParticipateProps {
  _id?: string
  subtitle: string
  title: string
  description: string
  illustration: {
    altText: string
    urlImage: string
  }
}

export interface ISectionFaqProps {
  subtitle: string
  title: string
  questions: {
    _id: string
    question: string
    answer: string
    open: boolean
  }[]
}

export interface ISectionHackerProps {
  illustration: {
    altText: string
    urlImage: string
  }
}
