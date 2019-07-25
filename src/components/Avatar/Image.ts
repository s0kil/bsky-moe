import styled from '@emotion/styled'

type Props = {
  size: string
}

/* eslint-disable @typescript-eslint/explicit-function-return-type */
export const Image = styled.img<Props>`
  border-radius: 50%;
  height: ${({ size }) => size};
  width: ${({ size }) => size};
`
/* eslint-enable @typescript-eslint/explicit-function-return-type */
