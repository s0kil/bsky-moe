import styled from '@emotion/styled'

type Props = {
  bold?: boolean
  margin?: string
  center?: boolean
}

/* eslint-disable @typescript-eslint/explicit-function-return-type */
export const Text = styled.p<Props>`
  font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};
  margin: ${({ margin }) => margin || '0'};
  text-align: ${({ center }) => (center ? 'center' : 'initial')};
`
/* eslint-enable @typescript-eslint/explicit-function-return-type */
