import { screen } from '@testing-library/react'
import { renderTheme } from 'styles/theme/render-theme'
import { theme } from 'styles/theme/theme'

import Heading from '.'

describe('<Heading />', () => {
  it('should render title with default styles', () => {
    const { container } = renderTheme(<Heading>Title Example</Heading>)
    const heading = screen.getByRole('heading', { name: /title example/i })
    expect(heading).toBeInTheDocument()
    expect(heading).toHaveStyle({
      color: 'white',
      'font-size': `${theme.font.sizes.huge}`
    })

    expect(container.firstChild).toMatchSnapshot()
  })
  it('should render an "h2" with the "large" font size', () => {
    const { container } = renderTheme(
      <Heading as="h2" size="large">
        Title Example
      </Heading>
    )
    const heading = document.querySelector('h2')
    expect(heading).toBeInTheDocument()
    expect(heading).toHaveStyle({
      color: 'white',
      'font-size': `${theme.font.sizes.large}`
    })

    expect(container.firstChild).toMatchSnapshot()
  })
  it('should render an "h3" with the "medium" font size', () => {
    const { container } = renderTheme(
      <Heading as="h3" size="medium">
        Title Example
      </Heading>
    )
    const heading = document.querySelector('h3')
    expect(heading).toBeInTheDocument()
    expect(heading).toHaveStyle({
      color: 'white',
      'font-size': `${theme.font.sizes.medium}`
    })

    expect(container.firstChild).toMatchSnapshot()
  })
  it('should render an "h4" with the "small" font size', () => {
    const { container } = renderTheme(
      <Heading as="h4" size="medium">
        Title Example
      </Heading>
    )
    const heading = document.querySelector('h4')
    expect(heading).toBeInTheDocument()
    expect(heading).toHaveStyle({
      color: 'white',
      'font-size': `${theme.font.sizes.medium}`
    })

    expect(container.firstChild).toMatchSnapshot()
  })
  it('should render heading with "xlarge" font size when screen size is max 768px', () => {
    const { container } = renderTheme(<Heading>Title Example</Heading>)
    const heading = screen.getByRole('heading', { name: /title example/i })
    expect(heading).toBeInTheDocument()
    expect(heading).toHaveStyleRule('font-size', `${theme.font.sizes.xlarge}`, {
      media: `${theme.media.lteMedium}`
    })

    expect(container.firstChild).toMatchSnapshot()
  })
})
