import { screen } from '@testing-library/react'
import { renderTheme } from '../../styles/theme/render-theme'
import Container from '.'

describe('<Container />', () => {
  it('should render the heading', () => {
    const { container } = renderTheme(
      <Container>
        <h1>Next App</h1>
      </Container>
    )
    const heading = screen.getByRole('heading', { name: /next app/i })
    expect(heading).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })
})
