import { screen } from '@testing-library/react'
import { renderTheme } from 'styles/theme/render-theme'
import SectionIcons from '.'
import { mockIconsProps } from './mockData'

describe('<SectionIcons />', () => {
  it('should render icons with description', () => {
    const { container } = renderTheme(<SectionIcons {...mockIconsProps} />)
    const icons = screen.getAllByRole('img', {
      name: mockIconsProps.icons[0].image.altText
    })
    const description = screen.getAllByText(/Exclusividade no mercado/i)
    expect(icons).toHaveLength(7)
    expect(description).toHaveLength(7)
    expect(container.firstChild).toMatchSnapshot()
  })
})
