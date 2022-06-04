/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useRef } from 'react'
import { ArrowLeft, ArrowRight } from '@styled-icons/feather'
import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { A11y, Navigation, Pagination } from 'swiper'

import Heading from 'components/Heading'
import Subtitle from 'components/Subtitle'
import Container from 'components/Container'

import { IViewProps } from './types'
import { theme } from 'styles/theme/theme'
import * as S from './styles'

const SectionTestimonials = ({ title, subtitle, testimonials }: IViewProps) => {
  const swiperRef = useRef(null)
  const slideConfigs: SwiperProps = {
    //@ts-ignore
    ref: swiperRef,
    spaceBetween: 50,
    pagination: {
      clickable: true
    },
    modules: [Pagination, Navigation, A11y],
    loop: true
  }

  return (
    <Container>
      <S.Wrapper>
        <S.TitleAndSubtitleAndButtonWrapper>
          <S.AnimateWrapper data-aos="fade-right">
            <Subtitle>{subtitle}</Subtitle>
            <Heading size="large">{title}</Heading>
          </S.AnimateWrapper>
          <S.ButtonsSlideWrapper data-aos="fade-up-right">
            <S.ButtonSlide
              //@ts-ignore
              onClick={() => swiperRef.current?.swiper.slidePrev()}
            >
              <ArrowLeft color={theme.colors.gray7} size={24} />
            </S.ButtonSlide>
            <S.ButtonSlide
              //@ts-ignore
              onClick={() => swiperRef.current?.swiper.slideNext()}
            >
              <ArrowRight color={theme.colors.gray7} size={24} />
            </S.ButtonSlide>
          </S.ButtonsSlideWrapper>
        </S.TitleAndSubtitleAndButtonWrapper>
        <S.SlideWrapper data-aos="fade-left">
          <Swiper {...slideConfigs}>
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial._id}>
                <S.TestimonialInfo>
                  <S.TestimonialPhoto
                    src={testimonial.photo.urlImage}
                    alt={testimonial.photo.altText}
                  />
                  <S.TestimonialNameAndOthers>
                    <Heading as="h5" size="small">
                      {testimonial.name}
                    </Heading>
                    <S.TestimonialProfession>
                      {testimonial.profession}
                    </S.TestimonialProfession>
                    <S.TestimonialCity>{testimonial.city}</S.TestimonialCity>
                  </S.TestimonialNameAndOthers>
                </S.TestimonialInfo>
                <S.TestimonialDescription>
                  {testimonial.description}
                </S.TestimonialDescription>
              </SwiperSlide>
            ))}
          </Swiper>
        </S.SlideWrapper>
      </S.Wrapper>
    </Container>
  )
}

export default SectionTestimonials
