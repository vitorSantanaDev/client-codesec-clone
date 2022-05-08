import { screen } from '@testing-library/react'
import { renderTheme } from 'styles/theme/render-theme'
import SectionHero from '.'

import { mockSectionHeroProps } from './mockData'

describe('<SectionHero />', () => {
  it('should render section hero with correct elements', () => {
    renderTheme(<SectionHero {...mockSectionHeroProps} />)
    const heading = screen.getByRole('heading', {
      name: /aprenda Web Hacking do zero ao avançado/i
    })
    const description = screen.getByText(/lorem ipsum dolor sit amet/i)
    const subtitle = screen.getByText(/subtitle Example content/i)

    expect(heading).toBeInTheDocument()
    expect(description).toBeInTheDocument()
    expect(subtitle).toBeInTheDocument()
  })
  it('should render section hero with form', () => {
    renderTheme(<SectionHero {...mockSectionHeroProps} />)
    const logo = screen.getByRole('img', { name: /logo codesec/i })
    const button = screen.getByRole('button', { name: /quero me cadastrar/i })
    const inputName = screen.getByPlaceholderText(/seu nome/i)
    const inputEmail = screen.getByPlaceholderText(/seu email/i)

    expect(logo).toBeInTheDocument()
    expect(button).toBeInTheDocument()
    expect(inputName).toBeInTheDocument()
    expect(inputEmail).toBeInTheDocument()
  })
  it('should render section hero with link', () => {
    renderTheme(<SectionHero {...mockSectionHeroProps} />)
    const link = screen.getByText(/ler mais/i)
    expect(link).toBeInTheDocument()
  })
  it('should to match snapshot', () => {
    const { container } = renderTheme(<SectionHero {...mockSectionHeroProps} />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
