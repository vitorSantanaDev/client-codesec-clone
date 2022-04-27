import { screen } from '@testing-library/react'
import { renderTheme } from 'styles/theme/render-theme'
import SectionBackground from '.'

describe('<SectionBackground />', () => {
  it('should render the section with background and heading', () => {
    const pathImage = '/images/bg-hero.png'
    const { container } = renderTheme(
      <SectionBackground backgroundImagePath={pathImage}>
        <h1>React App</h1>
      </SectionBackground>
    )
    const heading = screen.getByRole('heading', { name: /react app/i })
    expect(heading).toBeInTheDocument()
    expect(container.firstChild).toHaveStyle({
      width: '100%',
      'min-height': '100vh',

      'background-size': 'cover',
      'background-position': 'center',
      'background-repeat': 'no-repeat',
      'background-image': `url(${pathImage})`
    })
    expect(container.firstChild).toMatchSnapshot()
  })
})
