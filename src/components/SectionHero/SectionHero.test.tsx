import { screen } from '@testing-library/react'
import { renderTheme } from 'styles/theme/render-theme'
import SectionHero from '.'

const mockProps = {
  subtitle: 'Subtitle Example content',
  subtitleIcon: true,
  subtitleIconUrl: '/images/icon-key.svg',
  title: 'Aprenda Web Hacking do zero ao avançado',
  description: 'Lorem ipsum dolor sit amet',
  linkIcon: '/images/icon-eye.svg',
  linkText: 'Ler mais',
  link: '/'
}

describe('<SectionHero />', () => {
  it('should render section hero with correct elements', () => {
    renderTheme(<SectionHero {...mockProps} />)
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
    renderTheme(<SectionHero {...mockProps} />)
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
    renderTheme(<SectionHero {...mockProps} />)
    const link = screen.getByText(/ler mais/i)
    expect(link).toBeInTheDocument()
  })
  it('should to match snapshot', () => {
    const { container } = renderTheme(<SectionHero {...mockProps} />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
