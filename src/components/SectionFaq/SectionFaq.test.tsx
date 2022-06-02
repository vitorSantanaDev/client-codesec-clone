import { screen } from '@testing-library/react'
import { renderTheme } from 'styles/theme/render-theme'
import SectionFaq from '.'
import { mockDataSectionFaq } from './mockData'

describe('<SectionFaq />', () => {
  it('should render subtitle and subtitle', () => {
    renderTheme(<SectionFaq {...mockDataSectionFaq} />)
    const heading = screen.getByRole('heading', {
      name: mockDataSectionFaq.title
    })
    const subtitle = screen.getByText(mockDataSectionFaq.subtitle)

    expect(heading).toBeInTheDocument()
    expect(subtitle).toBeInTheDocument()
  })
  it('should render the correct amount of questions', () => {
    renderTheme(<SectionFaq {...mockDataSectionFaq} />)
    const questions = screen.getAllByRole('heading', {
      name: mockDataSectionFaq.questions[0].question
    })
    const buttons = screen.getAllByRole('button')

    expect(questions).toHaveLength(6)
    expect(buttons).toHaveLength(6)
  })
})
