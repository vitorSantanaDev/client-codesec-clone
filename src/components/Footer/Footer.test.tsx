import { screen } from '@testing-library/react'
import { renderTheme } from 'styles/theme/render-theme'
import Footer from '.'
import { mockDataFooterProps } from './mockData'

describe('<Footer />', () => {
  it('should render logo codesec', () => {
    renderTheme(<Footer {...mockDataFooterProps} />)
    const logo = screen.getByAltText(mockDataFooterProps.logo.altText)
    expect(logo).toBeInTheDocument()
  })
  it('should render the footer with correct content', () => {
    renderTheme(<Footer {...mockDataFooterProps} />)
    const content = screen.getByText(mockDataFooterProps.footerContent)
    expect(content).toBeInTheDocument()
  })
  it('should render amount social links correct', () => {
    renderTheme(<Footer {...mockDataFooterProps} />)
    const links = screen.getAllByAltText(
      mockDataFooterProps.socialLinks[0].icon.altText
    )
    expect(links).toHaveLength(3)
  })
  it('should match snapshots', () => {
    const { container } = renderTheme(<Footer {...mockDataFooterProps} />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
