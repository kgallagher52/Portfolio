import { App } from './App'
import { render, screen } from '@testing-library/react'

it('renders hello message', () => {
  render(<App />)
  expect(screen.getByText('Keaton Gallagher')).toBeInTheDocument()
});