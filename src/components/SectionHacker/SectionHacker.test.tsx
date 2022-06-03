import { screen } from '@testing-library/react'
import { renderTheme } from 'styles/theme/render-theme'
import SectionHacker from '.'
import { mockDataSectionHacker } from './mockData'

describe('<SectionHacker />', () => {
  it('should render illustration', () => {
    renderTheme(<SectionHacker illustration={mockDataSectionHacker} />)
    const illustration = screen.getByRole('img', { name: /Illustation/i })
    expect(illustration).toBeInTheDocument()
  })
  it('should match snapshot', () => {
    const { container } = renderTheme(
      <SectionHacker illustration={mockDataSectionHacker} />
    )
    expect(container.firstChild).toMatchSnapshot()
  })
})
