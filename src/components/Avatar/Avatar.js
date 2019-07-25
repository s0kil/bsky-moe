import styled from '@emotion/styled'
import React from 'react'
import { Image } from './Image'

const Container = styled.a`
  user-select: none;
`

export const Avatar = ({ alt, link, src }) => (
  <Container href={link}>
    <Image alt={alt} src={src} size="128px" />
  </Container>
)
