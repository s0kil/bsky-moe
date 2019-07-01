import { styled } from 'linaria/react'

export const Text = styled.p`
  font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};
  margin: ${({ margin }) => margin || 0};
  text-align: ${({ center }) => (center ? 'center' : 'initial')};
`
