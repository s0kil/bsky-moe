import { Global } from '@emotion/core'
import OfflinePluginRuntime from 'offline-plugin/runtime'
import React from 'react'
import { hydrate, render } from 'react-dom'
import { Avatar } from './components/Avatar'
import { Box } from './components/Box'
import { Flex } from './components/Flex'
import { Heading } from './components/Heading'
import { Link } from './components/Link'
import { Text } from './components/Text'
import globalStyles from './globalStyles'

const { StrictMode } = React

OfflinePluginRuntime.install()

const App: React.FC = (): JSX.Element => (
  <StrictMode>
    <Global styles={globalStyles} />
    <Flex margin="50px 0" justifyContent="center">
      <Avatar
        link="https://github.com/imbsky"
        src="https://static.bsky.moe/images/avatar.png"
      />
    </Flex>
    <Heading type="h3" bold center>
      BSKY
    </Heading>
    <Flex margin="25px 0" justifyContent="center">
      <Box width="90%">
        <Text center>
          Just a guy who likes learning about various things. In my former days,
          I did video (2D and 3D, dynamic effects, simulations) and music
          production for more than five years, so I&apos;m a little bit
          knowledgeable in that field, too. On days off I enjoy driving my car
          and riding my motorcycle.
          <br />
          If you have any questions, please email me anytime.
        </Text>
      </Box>
    </Flex>
    <Box>
      <Text center>
        This website is licensed under the&nbsp;
        <Link href="https://github.com/imbsky/bsky-moe/blob/master/LICENSE">
          MIT License
        </Link>
        .
      </Text>
    </Box>
  </StrictMode>
)

const rootElement = document.getElementById('root') as HTMLDivElement

if (rootElement.hasChildNodes()) {
  hydrate(<App />, rootElement)
} else {
  render(<App />, rootElement)
}
