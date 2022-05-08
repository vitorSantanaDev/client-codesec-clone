import { screen } from '@testing-library/react'
import { renderTheme } from 'styles/theme/render-theme'
import SectionAbout from '.'
import { mockSectionAboutProps } from './mockData'

describe('<SectionAbout />', () => {
  it('should render section about with correct elements', () => {
    renderTheme(<SectionAbout {...mockSectionAboutProps} />)
    const subtitle = screen.getByText(/infos/i)
    const heading = screen.getByRole('heading', { name: /about web series/i })

    expect(subtitle).toBeInTheDocument()
    expect(heading).toBeInTheDocument()
  })
  it('should render the correct amount of topics', () => {
    renderTheme(<SectionAbout {...mockSectionAboutProps} />)
    const topics = screen.getAllByText(/text/i)
    const icons = screen.getAllByRole('img', { name: /icone/i })

    expect(topics).toHaveLength(4)
    expect(icons).toHaveLength(4)
  })
  it('should render the illustration of section about', () => {
    renderTheme(<SectionAbout {...mockSectionAboutProps} />)
    const illustration = screen.getByRole('img', {
      name: /illustration about/i
    })

    expect(illustration).toBeInTheDocument()
  })
  it('should to match snapshot', () => {
    const { container } = renderTheme(
      <SectionAbout {...mockSectionAboutProps} />
    )

    expect(container.firstChild).toMatchSnapshot()
  })
})
