import { screen } from '@testing-library/react'
import { renderTheme } from 'styles/theme/render-theme'
import Logo from '.'

describe('<Logo />', () => {
  it('should render logo codesec', () => {
    const { container } = renderTheme(
      <Logo
        url="/"
        srcImage="/images/codesec-logo.svg"
        altText="Logo codesec"
      />
    )
    const logoImage = screen.getByAltText(/logo codesec/i)
    expect(logoImage).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })
})
