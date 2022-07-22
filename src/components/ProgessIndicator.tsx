import styled from "styled-components";
import React from "react";
import { Link } from "react-router-dom";

const Header = styled.header`
  display: flex;
  justify-content: space-evenly;
  padding: 1.6rem;
  background-color: #fff;

  div {
    border-radius: 50%;
    height: 44px;
    width: 44px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => props.theme.muted};
    font-size: ${(props) => props.theme.body};
  }
  div.active {
    background-color: ${(props) => props.theme.success};
  }
`;
interface IProgressIndicatorProps {
  step: number;
}
const ProgressIndicator: React.FC<IProgressIndicatorProps> = ({ step }) => {
  return (
    <Header>
      <div className={step === 1 ? "active" : ""}>
        <Link to={"/"}>1</Link>
      </div>
      <div className={step === 2 ? "active" : ""}>
        <Link to={"/pokemon"}>2</Link>
      </div>
      <div className={step === 3 ? "active" : ""}>
        <Link to={"/confirm"}>3</Link>
      </div>
    </Header>
  );
};

export default ProgressIndicator;
