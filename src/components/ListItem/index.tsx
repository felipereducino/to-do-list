import React, { useState, useEffect, useRef, useCallback, memo } from "react";
import * as Styled from "./styles";
import { Item } from "../../types/item";

type Props = {
  item: Item;
  onToggleDone: (id: number, done: boolean) => void;
  onDeleteTask: (id: number) => void;
  onEditTask: (id: number, newName: string) => void;
};

const ListItem = memo(
  ({ item, onToggleDone, onDeleteTask, onEditTask }: Props) => {
    const [isChecked, setIsChecked] = useState(item.done);
    const [isEditing, setIsEditing] = useState(false);
    const [newName, setNewName] = useState(item.name);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleChange = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        const done = e.target.checked;
        setIsChecked(done);
        onToggleDone(item.id, done);
      },
      [item.id, onToggleDone]
    );

    const handleDelete = useCallback(() => {
      onDeleteTask(item.id);
    }, [item.id, onDeleteTask]);

    const handleEdit = useCallback(() => {
      setIsEditing(true);
    }, []);

    const handleSave = useCallback(() => {
      onEditTask(item.id, newName);
      setIsEditing(false);
    }, [item.id, newName, onEditTask]);

    const handleCancel = useCallback(() => {
      setNewName(item.name);
      setIsEditing(false);
    }, [item.name]);

    useEffect(() => {
      if (isEditing && inputRef.current) {
        inputRef.current.focus();
      }
    }, [isEditing]);

    const formatDate = (date: Date) => {
      const options: Intl.DateTimeFormatOptions = {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      };
      return new Intl.DateTimeFormat("en-US", options).format(date);
    };

    return (
      <Styled.Container done={isChecked}>
        <input type="checkbox" checked={isChecked} onChange={handleChange} />
        {isEditing ? (
          <>
            <input
              ref={inputRef}
              type="text"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
            />
            <button onClick={handleSave}>Save</button>
            <button onClick={handleCancel}>Cancel</button>
          </>
        ) : (
          <>
            <label>{item.name}</label>
            <span>{formatDate(item.createdAt)}</span>
            <button onClick={handleEdit}>Edit</button>
          </>
        )}
        <button onClick={handleDelete}>Delete</button>
      </Styled.Container>
    );
  }
);

export default ListItem;
