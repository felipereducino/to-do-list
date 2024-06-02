import React, { useState, KeyboardEvent, memo, useCallback } from "react";
import * as Styled from "./styles";

type Props = {
  handleAddTask: (taskName: string) => void;
};

const AddArea = memo(({ handleAddTask }: Props) => {
  const [inputText, setInputText] = useState("");
  const [error, setError] = useState("");

  const handleKeyUp = useCallback(
    (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.code === "Enter") {
        if (inputText.trim() === "") {
          setError("The task name cannot be empty.");
        } else {
          handleAddTask(inputText.trim());
          setInputText("");
          setError("");
        }
      }
    },
    [inputText, handleAddTask]
  );

  const handleClick = useCallback(() => {
    if (inputText.trim() === "") {
      setError("The task name cannot be empty.");
    } else {
      handleAddTask(inputText.trim());
      setInputText("");
      setError("");
    }
  }, [inputText, handleAddTask]);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
    if (e.target.value.trim() !== "") {
      setError("");
    }
  }, []);

  return (
    <Styled.Container>
      <Styled.InputWrapper>
        <input
          type="text"
          placeholder="Add new task"
          value={inputText}
          onChange={handleChange}
          onKeyUp={handleKeyUp}
        />
        <button onClick={handleClick}>Add</button>
      </Styled.InputWrapper>
      {error && <Styled.ErrorMessage>{error}</Styled.ErrorMessage>}
    </Styled.Container>
  );
});

export default AddArea;
