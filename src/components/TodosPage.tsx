import axios from "axios";
import { useEffect, useState } from "react";
import { ITodo } from "../types/types";
import List from "./List";
import TodoItem from "./TodoItem";

const TodosPage: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const res = await axios.get<ITodo[]>(
        "https://jsonplaceholder.typicode.com/todos?_limit=10"
      );
      setTodos(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <List
      items={todos}
      renderItem={(todo: ITodo) => <TodoItem key={todo.id} todo={todo} />}
    />
  );
};

export default TodosPage;
