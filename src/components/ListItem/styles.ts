import styled from "styled-components";

type ContainerProps = {
  done?: boolean;
};

export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  background-color: #20212c;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 10px;

  input[type="checkbox"] {
    margin-right: 10px;
  }

  input[type="text"] {
    border: 0px;
    background: #17181f;
    outline: 0;
    color: #fff;
    flex: 1;
    padding: 5px;
  }

  label {
    text-decoration: ${(props) => (props.done ? "line-through" : "none")};
    flex: 1;
  }

  button {
    margin-left: 10px;
    background-color: #ff0000;
    color: #fff;
    border: none;
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;
  }

  button:hover {
    background-color: #cc0000;
  }

  button:first-of-type {
    background-color: #007bff;
    margin-right: 5px;
  }

  button:first-of-type:hover {
    background-color: #0056b3;
  }

  span {
    margin-left: 10px;
    color: #666;
    font-size: 0.9em;
  }
`;
