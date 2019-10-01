/*
 Copyright 2019 BSKY

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */

%raw
"require('normalize.css')";

Css.(
  global(
    "body",
    [
      fontFamily(
        "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,Ubuntu,
        Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
      ),
      unsafe("-webkit-font-smoothing", "antialiased"),
      unsafe("-moz-osx-font-smoothing", "grayscale"),
    ],
  )
);

[@react.component]
let make = () => {
  let currentYear = Js.Date.getFullYear(Js.Date.make());

  <Container>
    <Flex center=true>
      <Avatar
        link="https://github.com/imbsky"
        src="https://www.gravatar.com/avatar/77ba9b23d10139187d11b3795c7a9164?s=256"
      />
    </Flex>
    <Heading bold=true center=true> {ReasonReact.string("BSKY")} </Heading>
    <Flex center=true>
      <Biography>
        <Padding center=true>
          {
            ReasonReact.string(
              "A young self-taught software engineer with "
              ++ Js.Float.toString(currentYear -. 2017.0)
              ++ "+ years of industry experience and as a hidden fact, I'm a
            motorsports enthusiast. I'm acting like an architect to keep the
            code maintainable. but I maintain a healthy balance between
            perfectionism and actually getting stuff done. In other words,
            I focus on results over process. I have a cursory knowledge of
            functional programming paradigms, runtime performance optimizations,
            improving development experience with the modern tooling, and
            refactoring code into modules, etc. I also have "
              ++ Js.Float.toString(currentYear -. 2014.0)
              ++ "+ years of experience in video and music production, so I'm a
            little bit knowledgeable in that field, too. If you have any
            questions, please email me at any time.",
            )
          }
        </Padding>
      </Biography>
    </Flex>
    <Box>
      <Padding center=true>
        {ReasonReact.string("This website is licensed under the ")}
        <Link href="https://github.com/imbsky/bsky-moe/blob/master/LICENSE">
          {ReasonReact.string("Apache License 2.0")}
        </Link>
        {ReasonReact.string(".")}
      </Padding>
    </Box>
  </Container>;
};
