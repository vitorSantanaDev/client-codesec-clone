import { screen } from '@testing-library/react'
import { renderTheme } from '../../styles/theme/render-theme'
import SectionClass from '.'
import { mockDataSectionClassProps } from './mockData'

describe('<SectionClass />', () => {
  it('should render section with title and subtitle', () => {
    renderTheme(<SectionClass {...mockDataSectionClassProps} />)
    const heading = screen.getByRole('heading', {
      name: /o que você vai aprender/i
    })
    const subtitle = screen.getByText(/aulas/i)

    expect(heading).toBeInTheDocument()
    expect(subtitle).toBeInTheDocument()
  })
  it('should render correct amount of icons', () => {
    renderTheme(<SectionClass {...mockDataSectionClassProps} />)
    const icons = screen.getAllByAltText(/icon/i)
    expect(icons).toHaveLength(5)
  })
  it('should render the amount of dates and times correctly', () => {
    renderTheme(<SectionClass {...mockDataSectionClassProps} />)
    const datas = screen.getAllByText('14/03')
    const hours = screen.getAllByText('Terça as - 20:30H')
    expect(datas).toHaveLength(5)
    expect(hours).toHaveLength(5)
  })
  it('should render the number of classes correctly', () => {
    renderTheme(<SectionClass {...mockDataSectionClassProps} />)
    const classes = screen.getAllByText(/aula 01/i)
    const classesName = screen.getAllByRole('heading', {
      name: /hackeando tudo/i
    })
    const descriptions = screen.getAllByText(
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est mus nisi, sed in tempor. Nisl sit iaculis nulla consectetur. Purus egestas sit eget viverra. Nisi id in porta nec, a a. Eu in dis et, morbi ut at pellentesque. Massa eu amet morbi eu diam ultricies tellus aliquet. Vel, amet dolor cursus lorem quis amet sed. Mollis diam a purus nulla non, mattis proin odio. Facilisis molestie nibh egestas lacus adipiscing.'
    )
    expect(classes).toHaveLength(5)
    expect(classesName).toHaveLength(5)
    expect(descriptions).toHaveLength(5)
  })
  it('should render the call to action button', () => {
    renderTheme(<SectionClass {...mockDataSectionClassProps} />)
    const button = screen.getByRole('button', { name: /cadastre-se agora/i })
    expect(button).toBeInTheDocument()
  })

  it('should match snapshot', () => {
    const { container } = renderTheme(
      <SectionClass {...mockDataSectionClassProps} />
    )
    expect(container.firstChild).toMatchSnapshot()
  })
})
