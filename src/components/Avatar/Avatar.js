import styled from '@emotion/styled'
import { h } from 'preact'
import { Image } from './Image'

const Container = styled.a`
  user-select: none;
`

export const Avatar = ({ link, src }) => (
  <Container href={link}>
    <Image src={src} size="128px" />
  </Container>
)
