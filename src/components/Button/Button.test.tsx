import { screen, fireEvent } from '@testing-library/react'
import { renderTheme } from '../../styles/theme/render-theme'
import Button from '.'

const handleClickButton = jest.fn()
describe('<Button />', () => {
  it('should render the Button component with default style', () => {
    const { container } = renderTheme(
      <Button handleClick={handleClickButton}>Entrar para turma</Button>
    )
    const button = screen.getByRole('button', { name: /entrar para turma/i })
    expect(button).toBeInTheDocument()
    expect(button).toHaveStyle({
      'max-width': '255px'
    })

    expect(container.firstChild).toMatchSnapshot()
  })
  it('should render the Button component with "small" style', () => {
    const { container } = renderTheme(
      <Button size="small" handleClick={handleClickButton}>
        Quero me cadastrar
      </Button>
    )
    const button = screen.getByRole('button', { name: /quero me cadastrar/i })
    expect(button).toBeInTheDocument()
    expect(button).toHaveStyle({
      'max-width': '190px'
    })

    expect(container.firstChild).toMatchSnapshot()
  })
  it('should render the Button component with "large" style', () => {
    const { container } = renderTheme(
      <Button size="large" handleClick={handleClickButton}>
        Quero me cadastrar
      </Button>
    )
    const button = screen.getByRole('button', { name: /quero me cadastrar/i })
    expect(button).toBeInTheDocument()
    expect(button).toHaveStyle({
      'max-width': '330px'
    })

    expect(container.firstChild).toMatchSnapshot()
  })
  it('should call the handleClickButton function when the button is clicked', () => {
    renderTheme(<Button handleClick={handleClickButton}>Click me</Button>)
    const button = screen.getByRole('button', { name: /click me/i })
    expect(button).toBeInTheDocument()
    fireEvent.click(button)
    expect(handleClickButton).toBeCalledTimes(1)
  })
})
