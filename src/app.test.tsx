import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { render, screen } from '@testing-library/react'
import App from './app'

describe('app', () => {
  it('renders the right links', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App></App>
      </MemoryRouter>
    )

    const aboutLink = screen.getByText(/about/i)
    expect(aboutLink).toBeInTheDocument()

    const codeLink = screen.getByText(/code/i)
    expect(codeLink).toBeInTheDocument()

    const homeLink = screen.getByLabelText(/home/i)
    expect(homeLink).toBeInTheDocument()
  })
})
