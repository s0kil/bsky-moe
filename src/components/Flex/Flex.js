import styled from '@emotion/styled'
import { Box } from '../Box'

export const Flex = styled(Box)`
  align-content: ${({ alignContent }) => alignContent || 'stretch'};
  align-items: ${({ alignItems }) => alignItems || 'initial'};
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection || 'row'};
  flex-wrap: ${({ flexWrap }) => flexWrap || 'nowrap'};
  gap: ${({ gap }) => gap || 'initial'};
  justify-content: ${({ justifyContent }) => justifyContent || 'flex-start'};
`
