import styled from "styled-components";
import { theme } from "styles/theme";

const Container = styled.section`
  margin-inline: auto;
  max-height: max-content;
  width: 90%;
  max-width: 1000px;
  padding: 28px 32px;
  background-color: ${(props) => props.theme.secondary};
  border: 20px solid ${(props) => props.theme.accent};
  border-radius: 20px;
  h1 {
    font-size: ${(props) => props.theme.headingLG};
    margin: 24px 0;
    text-align: center;
    font-weight: bold;
  }
  h2,
  h3 {
    font-size: ${(props) => props.theme.headingMD};
    margin: 16px 0;
  }
  .control-group {
    padding: 8px;
    label {
      margin: 4px 12px;
      font-size: 18px;
    }
    input {
      padding: 8px;
      border-radius: 24px;
    }
  }
  label {
    display: block;
  }
  input {
    width: 100%;
    font-size: 16px;
  }
  .options {
    margin: 16px 0;
    display: flex;
    justify-content: space-evenly;
    button,
    a {
      color: ${(props) => props.theme.secondary};
      background-color: ${(props) => props.theme.accent};
      &[type="reset"] {
        background-color: ${(props) => props.theme.alert};
      }
    }
  }
`;
export default Container;
