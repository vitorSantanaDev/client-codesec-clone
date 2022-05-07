import { screen } from '@testing-library/react'
import { renderTheme } from 'styles/theme/render-theme'
import SectionIcons from '.'
import { mockIconsProps } from './mockData'

describe('<SectionIcons />', () => {
  it('should render icons with description', () => {
    const { container } = renderTheme(<SectionIcons icons={mockIconsProps} />)
    const icons = screen.getAllByRole('img', {
      name: /Exclusividade no mercado/i
    })
    const description = screen.getAllByText(/Exclusividade no mercado/i)
    expect(icons).toHaveLength(7)
    expect(description).toHaveLength(7)
    expect(container.firstChild).toMatchSnapshot()
  })
})
