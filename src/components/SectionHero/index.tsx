import React from 'react'
import Link from 'next/link'

import SectionBackground from 'components/SectionBackground'
import CompositionElement from 'components/CompositionElement'
import Container from 'components/Container'
import Form from 'components/Form'
import Heading from 'components/Heading'
import Subtitle from 'components/Subtitle'

import { IViewProps } from './types'
import * as S from './styles'

const SectionHero = ({
  link,
  title,
  subtitle,
  description,
  subtitleIcon,
  subtitleIconUrl
}: IViewProps) => {
  return (
    <SectionBackground backgroundImagePath="/images/bg-hero.png">
      <Container>
        <S.Wrapper>
          <S.ContentWrapper data-aos="fade-up" data-aos-duration="1500">
            <Subtitle icon={subtitleIcon} iconUrl={subtitleIconUrl.urlImage}>
              {subtitle}
            </Subtitle>
            <Heading>{title}</Heading>
            <S.Description>{description}</S.Description>
            <Link href={link.linkUrl || ''}>
              <S.LinkElement>
                <Subtitle
                  icon={true}
                  uppercase={false}
                  iconUrl={link.linkIcon.urlImage}
                >
                  {link.linkText}
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
