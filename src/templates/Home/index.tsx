import { Fragment, useEffect, useState } from 'react'

import {
  Header,
  SectionHero,
  SectionIcons,
  SectionAbout,
  SectionClass,
  SectionHowItWorks,
  SectionInstructor,
  SectionTestimonials,
  SectionParticipate,
  SectionFaq,
  SectionHacker,
  Footer
} from 'components'
import Loading from 'components/Loading'

import { ILandingPage } from 'interfaces/landingPage'

const HomeTemplate = ({
  header,
  sectionHero,
  sectionInfos,
  sectionAbout,
  sectionClass,
  sectionHowItWorks,
  sectionInstructor,
  sectionTestimonials,
  sectionParticipate,
  sectionFaq,
  sectionHacker,
  footer
}: ILandingPage) => {
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 4000)
  }, [])

  return (
    <Fragment>
      <Loading isLoading={isLoading} />
      <Header {...header} />
      <SectionHero {...sectionHero} />
      <SectionIcons {...sectionInfos} />
      <SectionAbout {...sectionAbout} />
      <SectionClass {...sectionClass} />
      <SectionHowItWorks {...sectionHowItWorks} />
      <SectionInstructor {...sectionInstructor} />
      <SectionTestimonials {...sectionTestimonials} />
      <SectionParticipate {...sectionParticipate} />
      <SectionFaq {...sectionFaq} />
      <SectionHacker {...sectionHacker} />
      <Footer {...footer} />
    </Fragment>
  )
}

export default HomeTemplate
