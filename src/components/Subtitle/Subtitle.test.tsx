import { screen } from '@testing-library/react'
import { renderTheme } from 'styles/theme/render-theme'
import { theme } from 'styles/theme/theme'
import Subtitle from '.'

describe('<Subtitle />', () => {
  it('should render subtitle', () => {
    const { container } = renderTheme(<Subtitle>Subtitle example</Subtitle>)
    const subtitle = screen.getByText(/subtitle example/i)

    expect(subtitle).toBeInTheDocument()
    expect(subtitle).toHaveStyle({
      'font-weight': '700',
      'letter-spacing': '15%',
      'font-size': `calc(${theme.font.sizes.small} + 0.2rem)`
    })
    expect(container.firstChild).toMatchSnapshot()
  })
})
