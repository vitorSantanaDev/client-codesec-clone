import { screen } from '@testing-library/react'
import { renderTheme } from 'styles/theme/render-theme'

import Header from '.'
import { mockHeaderProps } from './mockData'

describe('<Header />', () => {
  it('should render Header with correct elements', () => {
    const { container } = renderTheme(<Header {...mockHeaderProps} />)
    const button = screen.getByRole('button', { name: /inscreva-se/i })
    const logo = screen.getByRole('img', { name: /logo/i })

    expect(logo).toBeInTheDocument()
    expect(button).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })
  it('should render Header with correct styles', () => {
    const { container } = renderTheme(<Header {...mockHeaderProps} />)
    expect(container.firstChild).toHaveStyle({
      'z-index': '200',
      position: 'fixed'
    })
    expect(container.firstChild).toMatchSnapshot()
  })
})
