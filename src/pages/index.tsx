import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

import Header from 'components/Header'
import SectionAbout from 'components/SectionAbout'
import SectionHero from 'components/SectionHero'
import SectionIcons from 'components/SectionIcons'
import SectionClass from 'components/SectionClass'
import SectionHowItWorks from 'components/SectionHowItWorks'
import SectionInstructor from 'components/SectionInstructor'
import SectionParticipate from 'components/SectionParticipate'
import SectionTestimonials from 'components/SectionTestimonials'
import SectionFaq from 'components/SectionFaq'
import SectionHacker from 'components/SectionHacker'
import Footer from 'components/Footer'

import { mockHeaderProps } from 'components/Header/mockData'
import { mockSectionHeroProps } from 'components/SectionHero/mockData'
import { mockIconsProps } from 'components/SectionIcons/mockData'
import { mockSectionAboutProps } from 'components/SectionAbout/mockData'
import { mockDataSectionClassProps } from 'components/SectionClass/mockData'
import { mockDataSectionProps } from 'components/SectionHowItWorks/mockData'
import { mockDataSectionInstructor } from 'components/SectionInstructor/mockData'
import { mockDataSectionTestimonials } from 'components/SectionTestimonials/mockData'
import { mockDataSection } from 'components/SectionParticipate/mockData'
import { mockDataSectionFaq } from 'components/SectionFaq/mockData'
import { mockDataSectionHacker } from 'components/SectionHacker/mockData'
import { mockDataFooterProps } from 'components/Footer/mockData'

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 })
  }, [])
  return (
    <>
      <Header {...mockHeaderProps} />
      <SectionHero {...mockSectionHeroProps} />
      <SectionIcons icons={mockIconsProps} />
      <SectionAbout {...mockSectionAboutProps} />
      <SectionClass {...mockDataSectionClassProps} />
      <SectionHowItWorks {...mockDataSectionProps} />
      <SectionInstructor {...mockDataSectionInstructor} />
      <SectionTestimonials {...mockDataSectionTestimonials} />
      <SectionParticipate {...mockDataSection} />
      <SectionFaq {...mockDataSectionFaq} />
      <SectionHacker illustration={mockDataSectionHacker} />
      <Footer {...mockDataFooterProps} />
    </>
  )
}

export default Home
