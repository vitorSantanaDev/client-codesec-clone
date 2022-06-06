import { useEffect } from 'react'
import { GetStaticProps } from 'next'

import Aos from 'aos'
import 'aos/dist/aos.css'

import client from 'graphql/client'
import GET_LANDING_PAGE from 'graphql/queries/getLandingPage'

import { ILandingPage } from 'interfaces/landingPage'

import HomeTemplate from 'templates/Home'

const Home = ({
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
  const landingPageData = {
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
  }

  useEffect(() => {
    Aos.init({ duration: 1500 })
  }, [])

  return <HomeTemplate {...landingPageData} />
}

export const getStaticProps: GetStaticProps = async () => {
  const { landingPage } = await client.request(GET_LANDING_PAGE)

  return {
    props: {
      ...landingPage
    }
  }
}

export default Home
