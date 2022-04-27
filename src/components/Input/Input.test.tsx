/* eslint-disable @typescript-eslint/ban-ts-comment */
import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderTheme } from 'styles/theme/render-theme'
import { theme } from 'styles/theme/theme'

import Input from '.'

const mockProps = {
  type: 'text',
  id: 'name',
  name: 'name',
  placeholder: 'Name',
  handleChange: jest.fn()
}

describe('<Input />', () => {
  it('should render the input with default styles', () => {
    const { container } = renderTheme(<Input {...mockProps} />)
    const input: HTMLInputElement = screen.getByPlaceholderText(/name/i)

    expect(input).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })
  it('should render the input with error styles when error message exist', () => {
    const { container } = renderTheme(
      <Input {...mockProps} errorMessage="Error MEssage!" />
    )
    const input: HTMLInputElement = screen.getByPlaceholderText(/name/i)

    expect(input).toBeInTheDocument()
    expect(input).toHaveStyle({
      border: `1px solid ${theme.colors.redError}`
    })
    expect(container.firstChild).toMatchSnapshot()
  })
  it('should render input with styles when input value is valid', () => {
    const { container } = renderTheme(<Input {...mockProps} valueIsValid />)
    const input: HTMLInputElement = screen.getByPlaceholderText(/name/i)

    expect(input).toBeInTheDocument()
    expect(input).toHaveStyle({
      border: `1px solid ${theme.colors.greenSucsses}`
    })
    expect(container.firstChild).toMatchSnapshot()
  })
  it('should call handleChange function when typing in input', async () => {
    renderTheme(<Input {...mockProps} />)
    const input: HTMLInputElement = screen.getByPlaceholderText('Name')
    const newValue = 'New value'

    expect(input).toBeInTheDocument()
    await userEvent.type(input, newValue)
    expect(mockProps.handleChange).toBeCalledTimes(9)
    expect(input.value).toBe(newValue)
  })
})
