import { useState, useEffect, useCallback, useMemo } from "react";
import * as Styled from "./App.styles";
import { ApiResponse } from "./types/api";
import ListItem from "./components/ListItem";
import AddArea from "./components/AddArea";
import { getObjects } from "./components/services/api";

const App = () => {
  const [list, setList] = useState<ApiResponse[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getObjects();
        setList(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const handleAddTask = useCallback((taskName: string) => {
    setList((prevList) => [
      ...prevList,
      {
        id: (prevList.length + 1).toString(),
        name: taskName,
        data: null,
      },
    ]);
  }, []);

  const handleToggleDone = useCallback((id: string, done: boolean) => {
    setList((prevList) =>
      prevList.map((item) => (item.id === id ? { ...item, done } : item))
    );
  }, []);

  const handleDeleteTask = useCallback((id: string) => {
    setList((prevList) => prevList.filter((item) => item.id !== id));
  }, []);

  const handleEditTask = useCallback((id: string, newName: string) => {
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
