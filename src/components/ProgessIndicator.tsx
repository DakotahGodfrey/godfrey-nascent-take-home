import styled from "styled-components";
import React from "react";

const Header = styled.header``;
interface IProgressIndicatorProps {
  path: string;
}
const ProgressIndicator: React.FC<IProgressIndicatorProps> = ({ path }) => {
  return (
    <Header>
      <div>1</div>
      <div>2</div>
      <div>3</div>
    </Header>
  );
};

export default ProgressIndicator;
