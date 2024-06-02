import { useState, useCallback, useMemo } from "react";
import * as Styled from "./App.styles";
import { Item } from "./types/item";
import ListItem from "./components/ListItem";
import AddArea from "./components/AddArea";

const App = () => {
  const [list, setList] = useState<Item[]>([
    {
      id: 1,
      name: "Comprar pão",
      done: false,
      createdAt: new Date("2023-06-01T12:00:00"),
    },
    {
      id: 2,
      name: "Comprar bolo",
      done: true,
      createdAt: new Date("2023-06-02T12:00:00"),
    },
  ]);

  const handleAddTask = useCallback((taskName: string) => {
    setList((prevList) => [
      ...prevList,
      {
        id: prevList.length + 1,
        name: taskName,
        done: false,
        createdAt: new Date(),
      },
    ]);
  }, []);

  const handleToggleDone = useCallback((id: number, done: boolean) => {
    setList((prevList) =>
      prevList.map((item) => (item.id === id ? { ...item, done } : item))
    );
  }, []);

  const handleDeleteTask = useCallback((id: number) => {
    setList((prevList) => prevList.filter((item) => item.id !== id));
  }, []);

  const handleEditTask = useCallback((id: number, newName: string) => {
    setList((prevList) =>
      prevList.map((item) =>
        item.id === id ? { ...item, name: newName } : item
      )
    );
  }, []);

  const listItems = useMemo(
    () =>
      list.map((item, index) => (
        <ListItem
          key={index}
          item={item}
          onToggleDone={handleToggleDone}
          onDeleteTask={handleDeleteTask}
          onEditTask={handleEditTask}
        />
      )),
    [list, handleToggleDone, handleDeleteTask, handleEditTask]
  );

  return (
    <Styled.Container>
      <Styled.Area>
        <Styled.Header>To do List</Styled.Header>

        {/* Add new task */}
        <AddArea handleAddTask={handleAddTask} />

        {/* To do List */}
        {listItems}
      </Styled.Area>
    </Styled.Container>
  );
};

export default App;
