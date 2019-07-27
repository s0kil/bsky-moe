import styled from '@emotion/styled'

type Props = {
  height?: string
  margin?: string
  padding?: string
  width?: string
}

export const Box = styled.div<Props>`
  box-sizing: border-box;
  height: ${({ height }): string => height || 'auto'};
  margin: ${({ margin }): string => margin || '0'};
  padding: ${({ padding }): string => padding || '0'};
  width: ${({ width }): string => width || 'auto'};
`
