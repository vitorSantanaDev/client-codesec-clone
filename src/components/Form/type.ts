import { FormEvent } from 'react'

export type IViewProps = {
  srcImage: string
  altText: string
  url: string
  title?: string
  subtitle: string
  handleSubmit: (event?: FormEvent<HTMLFormElement>) => void
}
