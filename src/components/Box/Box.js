import { styled } from 'linaria/react'

export const Box = styled.div`
  box-sizing: border-box;
  height: ${({ height }) => height || 'auto'};
  margin: ${({ margin }) => margin || 0};
  padding: ${({ padding }) => padding || 0};
  width: ${({ width }) => width || 'auto'};
`
