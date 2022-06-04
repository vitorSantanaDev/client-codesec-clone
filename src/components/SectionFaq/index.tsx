import { useState } from 'react'
import { ChevronUp, ChevronDown } from '@styled-icons/feather'

import { ISectionFaqProps } from 'interfaces/sections'

import Container from 'components/Container'
import Heading from 'components/Heading'
import Subtitle from 'components/Subtitle'
import { theme } from 'styles/theme/theme'
import * as S from './styles'

const SectionFaq = ({ title, subtitle, questions }: ISectionFaqProps) => {
  const [questionsState, setQuestionsState] = useState(questions)

  const handleShowAnswer = (index: number) => {
    questionsState[index].open = !questionsState[index].open
    setQuestionsState([...questionsState])
  }

  return (
    <Container>
      <S.Wrapper>
        <S.HeadingAndSubtitleWrapper data-aos="fade-down-right">
          <Subtitle>{subtitle}</Subtitle>
          <Heading>{title}</Heading>
        </S.HeadingAndSubtitleWrapper>
        <S.AccordionsWrapper>
          {questionsState.map((question, index) => (
            <S.Accordion
              data-aos="fade-up-right"
              showAnswer={question.open}
              key={question._id}
            >
              <S.AccordionHeader>
                <Heading size="small" as="h6">
                  {question.question}
                </Heading>
                <S.AccordionButton onClick={() => handleShowAnswer(index)}>
                  {question.open ? (
                    <ChevronUp
                      size={20}
                      color={
                        question.open
                          ? theme.colors.redLight
                          : theme.colors.white
                      }
                    />
                  ) : (
                    <ChevronDown
                      size={20}
                      color={
                        question.open
                          ? theme.colors.redLight
                          : theme.colors.white
                      }
                    />
                  )}
                </S.AccordionButton>
              </S.AccordionHeader>
              <S.AccordionDescription showAnswer={question.open}>
                {question.answer}
              </S.AccordionDescription>
            </S.Accordion>
          ))}
        </S.AccordionsWrapper>
      </S.Wrapper>
    </Container>
  )
}

export default SectionFaq
