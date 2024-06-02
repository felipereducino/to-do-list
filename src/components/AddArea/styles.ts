import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 20px;
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #555;
  border-radius: 15px;
  padding: 10px;
  margin: 20px 0;
  min-width: 98%;

  input {
    border: 0px;
    background: transparent;
    outline: 0;
    color: #fff;
    font-size: 18px;
    flex: 1;
  }

  button {
    padding: 10px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  button:hover {
    background-color: #0056b3;
  }
`;

export const ErrorMessage = styled.span`
  color: red;
  margin-top: 5px;
`;
// export const Container = styled.div`
//   display: flex;
//   align-items: center;
//   border: 1px solid #555;
//   border-radius: 15px;
//   padding: 10px;
//   margin: 20px 0;

//   input {
//     border: 0px;
//     background: transparent;
//     outline: 0;
//     color: #fff;
//     font-size: 18px;
//     flex: 1;
//   }

//   button {
//     padding: 10px;
//     background-color: #007bff;
//     color: #fff;
//     border: none;
//     border-radius: 5px;
//     cursor: pointer;
//   }

//   button:hover {
//     background-color: #0056b3;
//   }
// `;

// export const ErrorMessage = styled.span`
//   color: red;
//   margin-left: 10px;
// `;
