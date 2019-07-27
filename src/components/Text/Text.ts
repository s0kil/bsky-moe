import styled from '@emotion/styled'

type Props = {
  bold?: boolean
  margin?: string
  center?: boolean
}

export const Text = styled.p<Props>`
  font-weight: ${({ bold }): string => (bold ? 'bold' : 'normal')};
  margin: ${({ margin }): string => margin || '0'};
  text-align: ${({ center }): string => (center ? 'center' : 'initial')};
`
