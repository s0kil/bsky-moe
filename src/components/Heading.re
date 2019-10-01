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

module Styles = {
  open Css;

  let heading = (~bold, ~center) =>
    style([
      fontSize(rem(1.3)),
      fontWeight(bold ? `bold : `initial),
      textAlign(center ? `center : `initial),
      margin(px(0)),
    ]);
};

[@react.component]
let make = (~bold, ~center, ~children) =>
  <h1 className={Styles.heading(~bold, ~center)}> children </h1>;
