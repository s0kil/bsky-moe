import { styled } from 'linaria/react'

export const Image = styled.img`
  border-radius: 50%;
  height: ${({ size }) => size};
  width: ${({ size }) => size};
`
