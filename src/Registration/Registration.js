import React, { useState } from "react";
import SignIn from "./SignIn/SignIn";
import SignUp from "./SignUp/SignUp";

import { RegistrationComponent } from "./style";

const Registration = () => {
  const [isRegistered, setRegistered] = useState(true);

  return (
    <RegistrationComponent>
      {isRegistered ? (
        <SignIn setRegistered={setRegistered} />
      ) : (
        <SignUp setRegistered={setRegistered} />
      )}
    </RegistrationComponent>
  );
};

export default Registration;
