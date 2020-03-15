module Styles = {
  open Css;

  let base = [
    fontFamily(`systemUi),
    unsafe("-webkit-font-smoothing", "antialiased"),
    unsafe("-moz-osx-font-smoothing", "grayscale"),
  ];

  let title = [base, [paddingBottom(`rem(2.0))]]->List.concat->Css.style;

  let body = [base]->List.concat->Css.style;

  let wrapper =
    style([
      display(`flex),
      justifyContent(`center),
      alignItems(`center),
      height(`vh(100.0)),
    ]);

  let container = style([maxWidth(px(840)), padding(`rem(2.5))]);
};

[@react.component]
let make = () =>
  <div style=Styles.wrapper>
    <div style=Styles.container>
      <h1 style=Styles.title> "About"->React.string </h1>
      <p style=Styles.body>
        "I am a hacker primarily working with OCaml and C++. In my spare time,
        I am not only a hacker, but also a racing driver. My bandwidth is
        currently somewhat constrained, and I am not available even on small
        projects. However, I know many folks that can help with a variety of
        projects that are available to help. If I am unable to help you, then I
        can help connect you with someone that can."
        ->React.string
      </p>
    </div>
  </div>;
