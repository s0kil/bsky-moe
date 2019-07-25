import styled from '@emotion/styled'

type Props = {
  height?: string
  margin?: string
  padding?: string
  width?: string
}

/* eslint-disable @typescript-eslint/explicit-function-return-type */
export const Box = styled.div<Props>`
  box-sizing: border-box;
  height: ${({ height }) => height || 'auto'};
  margin: ${({ margin }) => margin || '0'};
  padding: ${({ padding }) => padding || '0'};
  width: ${({ width }) => width || 'auto'};
`
/* eslint-enable @typescript-eslint/explicit-function-return-type */
