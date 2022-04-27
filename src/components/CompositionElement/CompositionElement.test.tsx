import { renderTheme } from 'styles/theme/render-theme'
import CompositionElement from '.'

describe('<CompositionElement />', () => {
  it('should render the composition element', () => {
    const { container } = renderTheme(<CompositionElement />)
    expect(container.firstChild).toHaveStyle({
      width: '352px',
      height: '4px',
      background: '#edeff0',
      'border-radius': '8px'
    })
    expect(container.firstChild).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })
})
