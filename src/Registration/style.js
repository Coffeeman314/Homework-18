import styled from "styled-components";



export const RegistrationComponent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: #ccc;
  color: #6b6b6b;
`;

export const SignUpBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  width: 500px;
  background-color: #101010;
`;

export const SignInBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  width: 500px;
  background-color: #101010;
`;

export const BlockHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  height: 140px;
  padding-bottom: 30px;
`;

export const IconBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 40px;
  background-color: #dd7b97;
  border: none;
  border-radius: 50%;
`;

export const Logo = styled.img`
  height: 60%;
  width: 60%;
`;

export const LogoText = styled.span`
  padding-top: 10px;
  font-size: 20px;
  color: #ccc;
`;

export const MainBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  width: 400px;
`;

export const InputInitials = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 15px;
`;

export const Input = styled.input`
  width: calc(100% - 20px);
  height: 30px;
  background-color: transparent;
  border: solid 2px #6b6b6b;
  border-radius: 5px;
  color: #6b6b6b;
  padding: 10px;
  font-size: 18px;
`;

export const Checkbox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  color: #ccc;
`;

export const CheckboxInput = styled.input`
  width: 15px;
  height: 15px;
  opacity: 0.5;
  cursor: pointer;
  margin-right: 5px;
`;

export const Button = styled.button`
  width: 100%;
  height: 35px;
  background-color: #80bcc3;
  border: solid 2px #68a3aa;
  border-radius: 5px;
  margin-top: 15px;
  font-weight: 600;
  color: #101010;
  padding: 0;
  cursor: pointer;
`;

export const SignUpFooter = styled.div`
  width: 100%;
  font-size: 12px;
  font-weight: 400;
  color: #68a3aa;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

export const SignInFooter = styled.div`
  width: 100%;
  font-size: 12px;
  font-weight: 400;
  color: #68a3aa;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const FooterSpan = styled.span`
  cursor: pointer;
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px 0;
  width: 70%;
  font-size: 11px;
  font-weight: 400;
  color: №6b6b6b;
`;
