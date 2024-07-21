import { it, expect, describe } from 'vitest'
import { render, screen } from '@testing-library/react'
import HeroGenerateLinkButton from '@/components/HeroGenerateLinkButton'
import Home from '@/app/page'

describe('Home', () => {
  it('should render hero text', () => {
    render(<Home />)

    const welcomeText = screen.getByTestId('welcome-text')
    expect(welcomeText.textContent).toBe('Hello, Welcome')
  })

  it('should render generate link button', () => {
    render(<HeroGenerateLinkButton />)
  })
})
