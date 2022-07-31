import React from "react";

import {
  SignUpBlock,
  BlockHeader,
  Logo,
  IconBlock,
  LogoText,
  MainBlock,
  InputInitials,
  Checkbox,
  CheckboxInput,
  Button,
  SignUpFooter,
  FooterSpan,
  Input,
  Footer,
} from "../style";

const SignUp = ({ setRegistered }) => {
  return (
    <SignUpBlock>
      <BlockHeader>
        <IconBlock>
          <Logo
            src="https://cdn-icons-png.flaticon.com/512/565/565547.png"
            alt=""
          />
        </IconBlock>
        <LogoText>Sign up</LogoText>
      </BlockHeader>

      <MainBlock>
        <InputInitials>
          <Input type="text" placeholder="First Name *" />
          <Input type="text" placeholder="Last Name *" />
        </InputInitials>

        <Input type="email" placeholder="Email Address *" />
        <Input type="password" placeholder="Password *" />
        <Checkbox>
          <CheckboxInput type="checkbox" />
          <span>
            I want to receive inspiration, marketing promotions and updates via
            email
          </span>
        </Checkbox>
        <Button>SIGN UP</Button>
        <SignUpFooter onClick={() => setRegistered(true)}>
          <FooterSpan>Already have an account? Sign In</FooterSpan>
        </SignUpFooter>
      </MainBlock>
      <Footer>
        <p>Copyright © Your Website 2022.</p>
      </Footer>
    </SignUpBlock>
  );
};

export default SignUp;
