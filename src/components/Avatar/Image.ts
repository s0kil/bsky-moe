import styled from '@emotion/styled'

type Props = {
  size: string
}

export const Image = styled.img<Props>`
  border-radius: 50%;
  height: ${({ size }): string => size};
  width: ${({ size }): string => size};
`
