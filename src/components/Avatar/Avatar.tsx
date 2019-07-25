import styled from '@emotion/styled'
import React from 'react'
import { Image } from './Image'

type Props = {
  link: string
  src: string
}

const Container = styled.a`
  user-select: none;
`

export const Avatar: React.FC<Props> = ({ link, src }): JSX.Element => (
  <Container href={link}>
    <Image alt="avatar" src={src} size="128px" />
  </Container>
)
