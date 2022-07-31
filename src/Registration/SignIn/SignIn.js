import React from "react";

import {
  SignInBlock,
  BlockHeader,
  Logo,
  IconBlock,
  LogoText,
  MainBlock,
  Checkbox,
  CheckboxInput,
  Button,
  SignInFooter,
  FooterSpan,
  Input,
  Footer,
} from "../style";

const SignIn = ({ setRegistered }) => {
  return (
    <SignInBlock>
      <BlockHeader>
        <IconBlock>
          <Logo
            src="https://cdn-icons-png.flaticon.com/512/565/565547.png"
            alt=""
          />
        </IconBlock>
        <LogoText>Sign in</LogoText>
      </BlockHeader>
      <MainBlock>
        <Input type="email" placeholder="Email Address *"></Input>
        <Input type="password" placeholder="Password *"></Input>
        <Checkbox>
          <CheckboxInput type="checkbox"></CheckboxInput>
          <span>Remember me</span>
        </Checkbox>
        <Button>SIGN IN</Button>
        <SignInFooter>
          <FooterSpan>Forgot password?</FooterSpan>
          <FooterSpan onClick={() => setRegistered(false)}>
            Don't have an account? Sign Up
          </FooterSpan>
        </SignInFooter>
      </MainBlock>
      <Footer>
        <p>Copyright © Your Website 2022.</p>
      </Footer>
    </SignInBlock>
  );
};

export default SignIn;
