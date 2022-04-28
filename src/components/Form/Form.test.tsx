import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderTheme } from 'styles/theme/render-theme'
import Form from '.'

const mockPropsForm = {
  srcImage: '/images/logo.svg',
  altText: 'Logo codesec',
  url: '/',
  subtitle: 'O acesso será enviado por email',
  handleSubmit: jest.fn((e) => e.preventDefault())
}
describe('<Form />', () => {
  it('should render form with default styles', () => {
    const { container } = renderTheme(<Form {...mockPropsForm} />)
    const logo = screen.getByRole('img', { name: /logo/i })
    const inputs = document.querySelectorAll('input')
    const button = screen.getByRole('button', { name: /quero me cadastrar/i })
    const subtitle = screen.getByText(`${mockPropsForm.subtitle}`)
    const heading = screen.queryByRole('heading', { name: /title example/i })

    expect(logo).toBeInTheDocument()
    expect(inputs).toHaveLength(2)
    expect(button).toBeInTheDocument()
    expect(subtitle).toBeInTheDocument()
    expect(heading).not.toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })
  it('should render form with secondary styles', () => {
    const { container } = renderTheme(
      <Form {...mockPropsForm} title="Title example" />
    )
    const logo = screen.getByRole('img', { name: /logo/i })
    const inputs = document.querySelectorAll('input')
    const button = screen.getByRole('button', { name: /quero me cadastrar/i })
    const subtitle = screen.getByText(`${mockPropsForm.subtitle}`)
    const heading = screen.queryByRole('heading', { name: /title example/i })

    expect(logo).toBeInTheDocument()
    expect(inputs).toHaveLength(2)
    expect(button).toBeInTheDocument()
    expect(subtitle).toBeInTheDocument()
    expect(heading).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })
  it('should call handleSubmitFunction when the form is submitted', async () => {
    renderTheme(<Form {...mockPropsForm} title="Title example" />)
    const button = screen.getByRole('button', { name: /quero me cadastrar/i })

    expect(button).toBeInTheDocument()
    await userEvent.click(button)
    expect(mockPropsForm.handleSubmit).toHaveBeenCalledTimes(1)
  })
})
