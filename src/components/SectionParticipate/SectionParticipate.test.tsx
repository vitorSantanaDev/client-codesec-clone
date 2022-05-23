import { screen } from '@testing-library/react'
import { renderTheme } from 'styles/theme/render-theme'
import SectionParticipate from '.'
import { mockDataSection } from './mockData'

describe('<SectionParticipate />', () => {
  it('should render the subtitle, Heading, and description', () => {
    renderTheme(<SectionParticipate {...mockDataSection} />)
    const subtitle = screen.getByText(mockDataSection.subtitle)
    const heading = screen.getByRole('heading', {
      name: `${mockDataSection.title}`
    })
    const description = screen.getByText(mockDataSection.description)

    expect(subtitle).toBeInTheDocument()
    expect(heading).toBeInTheDocument()
    expect(description).toBeInTheDocument()
  })

  it('should render the button with text correct', () => {
    renderTheme(<SectionParticipate {...mockDataSection} />)
    const button = screen.getByRole('button', { name: /quero me cadastrar/i })
    expect(button).toBeInTheDocument()
  })
  it('should render the illustration', () => {
    renderTheme(<SectionParticipate {...mockDataSection} />)
    const image = screen.queryByAltText(mockDataSection.illustration.altText)
    expect(image).toBeInTheDocument()
  })
  it('should match snapshot', () => {
    const { container } = renderTheme(
      <SectionParticipate {...mockDataSection} />
    )
    expect(container.firstChild).toMatchSnapshot()
  })
})
