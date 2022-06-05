const GET_LANDING_PAGE = /* GraphQL */ `
  fragment image on UploadFile {
    urlImage: url
    altText: alternativeText
  }

  fragment header on LandingPage {
    header {
      _id
      logo {
        ...image
      }
      button {
        url
        buttonText: text
      }
    }
  }

  fragment sectionHero on LandingPage {
    sectionHero: section_hero {
      _id
      subtitle
      title
      description
      subtitleIcon: subtitle_icon
      subtitleIconUrl: icon_subtitle {
        altText: alternativeText
        urlImage: url
      }
      link: link_hero {
        linkUrl: link_url
        linkText: link_text
        linkIcon: link_icon {
          urlImage: url
          altText: alternativeText
        }
      }
    }
  }

  fragment sectionInfos on LandingPage {
    sectionInfos: section_infos {
      _id
      icons: info_icons {
        _id
        textInfo: title_info
        image: icon {
          ...image
        }
      }
    }
  }

  fragment sectionAbout on LandingPage {
    sectionAbout: section_about {
      _id
      subtitle
      title
      description
      topics: infos_about {
        _id
        icon {
          ...image
        }
        textInfo: info
      }
      illustration: ilustration_codesec {
        ...image
      }
    }
  }

  fragment sectionClass on LandingPage {
    sectionClass: section_classes {
      _id
      subtitle
      title
      classs: infos_classe {
        _id
        dateClass: data_classe
        hourAndDay: day_and_hour
        classNumber: classe_number
        titleClass: title_classe
        descriptionClass: description_classe
        icon: icon_ilustration {
          ...image
        }
      }
    }
  }

  fragment sectionHowItWorks on LandingPage {
    sectionHowItWorks: section_how_works {
      _id
      subtitle
      title
      description
      steps: card_pass {
        _id
        icon: ilustration {
          ...image
        }
        titleStep: title
        descriptionStep: description
      }
    }
  }

  fragment sectionInstructor on LandingPage {
    sectionInstructor: section_about_mentor {
      _id
      subtitle
      title
      description
      link {
        linkUrl: url
        linkText: text
      }
      instructor: mentor {
        photo {
          ...image
        }
        _id
        name
      }
    }
  }

  fragment sectionTestimonials on LandingPage {
    sectionTestimonials: section_testimonials {
      _id
      subtitle
      title
      testimonials: testimonial {
        _id
        name
        profession
        city
        photo {
          ...image
        }
        description
      }
    }
  }

  fragment sectionParticipate on LandingPage {
    sectionParticipate: section_participate {
      _id
      subtitle
      title
      description
      illustration: ilustration {
        ...image
      }
    }
  }

  fragment sectionFaq on LandingPage {
    sectionFaq: section_faq {
      _id
      subtitle
      title
      questions: question_faq {
        _id
        question
        answer
        open
      }
    }
  }

  fragment sectionHacker on LandingPage {
    sectionHacker: section_hacker {
      _id
      illustration {
        urlImage: url
        altText: alternativeText
      }
    }
  }

  fragment footer on LandingPage {
    footer {
      _id
      logo {
        ...image
      }
      footerContent: footer_content
      socialLinks: social_link {
        _id
        href: url
        icon {
          ...image
        }
      }
    }
  }

  query GET_LANDING_PAGE {
    landingPage {
      ...header
      ...sectionHero
      ...sectionInfos
      ...sectionAbout
      ...sectionClass
      ...sectionHowItWorks
      ...sectionInstructor
      ...sectionTestimonials
      ...sectionParticipate
      ...sectionFaq
      ...sectionHacker
      ...footer
    }
  }
`

export default GET_LANDING_PAGE
