import { screen } from '@testing-library/react'
import { renderTheme } from '../../styles/theme/render-theme'
import SectionHowItWorks from '.'
import { mockDataSectionProps } from './mockData'

describe('<SectionHowItWorks />', () => {
  it('should render title, subtitle and description', () => {
    renderTheme(<SectionHowItWorks {...mockDataSectionProps} />)

    const subtitle = screen.getByText(/subtitle/i)
    const heading = screen.getByRole('heading', {
      name: /title section example/i
    })
    const description = screen.getByText(`${mockDataSectionProps.description}`)

    expect(subtitle).toBeInTheDocument()
    expect(heading).toBeInTheDocument()
    expect(description).toBeInTheDocument()
  })
  it('should render the correct amount of steps', () => {
    renderTheme(<SectionHowItWorks {...mockDataSectionProps} />)

    const titles = screen.getAllByRole('heading', { name: /passo 1/i })
    const icons = screen.getAllByRole('img', { name: /icon/i })

    expect(titles).toHaveLength(3)
    expect(icons).toHaveLength(3)
  })
  it('should render the correct amount of steps', () => {
    renderTheme(<SectionHowItWorks {...mockDataSectionProps} />)

    const titles = screen.getAllByRole('heading', { name: /passo 1/i })
    const icons = screen.getAllByRole('img', { name: /icon/i })

    expect(titles).toHaveLength(3)
    expect(icons).toHaveLength(3)
  })
  it('should render the correct amount of steps', () => {
    renderTheme(<SectionHowItWorks {...mockDataSectionProps} />)

    const titles = screen.getAllByRole('heading', { name: /passo 1/i })
    const icons = screen.getAllByRole('img', { name: /icon/i })

    expect(titles).toHaveLength(3)
    expect(icons).toHaveLength(3)
  })
  it('should match snapshots', () => {
    const { container } = renderTheme(
      <SectionHowItWorks {...mockDataSectionProps} />
    )

    expect(container.firstChild).toMatchSnapshot()
  })
})
