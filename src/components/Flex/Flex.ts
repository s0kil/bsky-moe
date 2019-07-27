import styled from '@emotion/styled'
import { Box } from '../Box'

type Props = {
  alignContent?: string
  alignItems?: string
  flexDirection?: string
  flexWrap?: string
  gap?: string
  justifyContent?: string
}

export const Flex = styled(Box)<Props>`
  align-content: ${({ alignContent }): string => alignContent || 'stretch'};
  align-items: ${({ alignItems }): string => alignItems || 'initial'};
  display: flex;
  flex-direction: ${({ flexDirection }): string => flexDirection || 'row'};
  flex-wrap: ${({ flexWrap }): string => flexWrap || 'nowrap'};
  gap: ${({ gap }): string => gap || 'initial'};
  justify-content: ${({ justifyContent }): string =>
    justifyContent || 'flex-start'};
`
