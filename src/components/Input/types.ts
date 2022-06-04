/* eslint-disable @typescript-eslint/no-explicit-any */
export type IViewProps = {
  id?: string
  type: string
  name: string
  value?: string
  valueIsValid?: boolean
  placeholder?: string
  errorMessage?: string
  handleChange: (event?: any) => void
}
