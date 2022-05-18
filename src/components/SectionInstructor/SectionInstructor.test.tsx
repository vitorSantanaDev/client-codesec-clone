import { screen } from '@testing-library/react'
import { renderTheme } from 'styles/theme/render-theme'
import SectionInstructor from '.'
import { mockDataSectionInstructor } from './mockData'

describe('<SectionInstructor />', () => {
  it('should render title and subtitle', () => {
    renderTheme(<SectionInstructor {...mockDataSectionInstructor} />)
    const heading = screen.getByRole('heading', {
      name: /title example instructor Section/i
    })
    const subtitle = screen.getByText(/subtitle/i)

    expect(heading).toBeInTheDocument()
    expect(subtitle).toBeInTheDocument()
  })
  it('should render data of instructor', () => {
    renderTheme(<SectionInstructor {...mockDataSectionInstructor} />)
    const nameInstructor = screen.getByRole('heading', {
      name: /name of instructor/i
    })
    const description = screen.getByText(
      mockDataSectionInstructor.instructor.description
    )
    const urlPhotoInstructor = mockDataSectionInstructor.instructor.photoUrl

    expect(nameInstructor).toBeInTheDocument()
    expect(description).toBeInTheDocument()
    expect(urlPhotoInstructor).not.toBe(null)
  })
  it('should match snapshot', () => {
    const { container } = renderTheme(
      <SectionInstructor {...mockDataSectionInstructor} />
    )
    expect(container.firstChild).toMatchSnapshot()
  })
})
