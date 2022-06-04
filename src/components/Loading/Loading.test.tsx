import { renderTheme } from 'styles/theme/render-theme'

import Loading from '.'

describe('<Loading />', () => {
  it('should render Loading with correct bg', () => {
    const { container } = renderTheme(<Loading isLoading />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
