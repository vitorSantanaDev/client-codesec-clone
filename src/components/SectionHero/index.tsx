import React from 'react'
import Link from 'next/link'

import CompositionElement from 'components/CompositionElement'
import Container from 'components/Container'
import Form from 'components/Form'
import Heading from 'components/Heading'
import Subtitle from 'components/Subtitle'
import * as S from './styles'
import SectionBackground from 'components/SectionBackground'

type SectionHeroProps = {
  subtitle: string
  subtitleIcon?: boolean
  subtitleIconUrl?: string
  title: string
  description: string
  linkText: string
  linkIcon: string
  link: string
}

const SectionHero = ({
  subtitle,
  subtitleIcon,
  subtitleIconUrl,
  title,
  description,
  linkIcon,
  linkText,
  link
}: SectionHeroProps) => {
  return (
    <SectionBackground backgroundImagePath="/images/bg-hero.png">
      <Container>
        <S.Wrapper>
          <S.ContentWrapper data-aos="fade-up" data-aos-duration="1500">
            <Subtitle icon={subtitleIcon} iconUrl={subtitleIconUrl}>
              {subtitle}
            </Subtitle>
            <Heading>{title}</Heading>
            <S.Description>{description}</S.Description>
            <Link href={link || ''}>
              <S.LinkElement>
                <Subtitle icon={true} iconUrl={linkIcon}>
                  {linkText}
                </Subtitle>
              </S.LinkElement>
            </Link>
          </S.ContentWrapper>
          <S.CompositionElementWrapper
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <CompositionElement />
          </S.CompositionElementWrapper>
          <S.FormWrapper data-aos="fade-up" data-aos-duration="2500">
            <Form
              srcImage="/images/logo-2-codesec.svg"
              altText="Logo codesec"
              url="/"
              subtitle="o acesso será enviado em seu e-mail"
              handleSubmit={() => {
                console.log('')
              }}
            />
          </S.FormWrapper>
        </S.Wrapper>
      </Container>
    </SectionBackground>
  )
}

export default SectionHero
