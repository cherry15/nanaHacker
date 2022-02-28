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

    const aboutLink = screen.getByText(/ABOUT/i)
    expect(aboutLink).toBeInTheDocument()

    const codeLink = screen.getByText(/CODE/i)
    expect(codeLink).toBeInTheDocument()

    const homeLink = screen.getByLabelText(/Home/i)
    expect(homeLink).toBeInTheDocument()
  })
})
