import { Fragment, h, render } from 'preact'
import { Avatar } from './components/Avatar'
import { Box } from './components/Box'
import { Flex } from './components/Flex'
import { Heading } from './components/Heading'
import { Link } from './components/Link'
import { Text } from './components/Text'
import globalStyles from './globalStyles'

function App() {
  return (
    <Fragment>
      <Flex margin="50px 0" justifyContent="center">
        <Avatar
          link="https://github.com/imbsky"
          src="https://github.com/imbsky.png"
        />
      </Flex>
      <Heading h3 bold center>
        BSKY
      </Heading>
      <Flex margin="25px 0" justifyContent="center">
        <Box width="90%">
          <Text center>
            Just a guy who likes learning about various things. In my former
            days, I did video (2D and 3D, dynamic effects, simulations) and
            music production for more than five years, so I&apos;m a little bit
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
    </Fragment>
  )
}

render(<App class={globalStyles} />, document.body)
