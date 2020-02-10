/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
module Styles = {
  open Css;

  let wrapper =
    style([
      display(`flex),
      justifyContent(`center),
      alignItems(`center),
      height(`vh(100.0)),
    ]);

  let container = style([maxWidth(px(840)), padding(`rem(2.5))]);

  let title = style([paddingBottom(`rem(2.0))]);
};

[@react.component]
let make = () =>
  <div className=Styles.wrapper>
    <div className=Styles.container>
      <h1 className=Styles.title> "About"->React.string </h1>
      <p>
        "I am a hacker primarily working with OCaml. In my spare time, I am not
        only a hacker, but also a racing driver. My bandwidth is currently
        somewhat constrained, and I am not available even on small projects.
        However, I know many folks that can help with a variety of projects that
        are available to help. If I am unable to help you, then I can help
        connect you with someone that can."
        ->React.string
      </p>
    </div>
  </div>;
