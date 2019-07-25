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

/* eslint-disable @typescript-eslint/explicit-function-return-type */
export const Flex = styled(Box)<Props>`
  align-content: ${({ alignContent }) => alignContent || 'stretch'};
  align-items: ${({ alignItems }) => alignItems || 'initial'};
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection || 'row'};
  flex-wrap: ${({ flexWrap }) => flexWrap || 'nowrap'};
  gap: ${({ gap }) => gap || 'initial'};
  justify-content: ${({ justifyContent }) => justifyContent || 'flex-start'};
`
/* eslint-enable @typescript-eslint/explicit-function-return-type */
