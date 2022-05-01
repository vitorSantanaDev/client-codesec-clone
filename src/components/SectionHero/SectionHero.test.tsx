import { screen } from '@testing-library/react'
import { renderTheme } from 'styles/theme/render-theme'
import SectionHero from '.'

const mockProps = {
  subtitle: 'Subtitle Example content',
  subtitleIcon: true,
  subtitleIconUrl: '/images/icon-key.svg',
  title: 'Aprenda Web Hacking do zero ao avançado',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est mus nisi, sed in tempor. Nisl sit iaculis nulla consectetur. Purus egestas sit eget viverra.',
  linkIcon: '/images/icon-eye.svg',
  linkText: 'Ler mais',
  link: '/'
}

describe('<SectionHero />', () => {
  it('should ', () => {
    renderTheme(<SectionHero {...mockProps} />)
  })
})
