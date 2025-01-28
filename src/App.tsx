import { useEffect } from "react";
import useOnline from "./hooks/useOnline";
import useSWR from "./hooks/useSWR";

type Todo = {
  title: string;
  body: string;
};

function App() {
  const url = "https://jsonplaceholder.typicode.com/posts";
  const { data: todos, isLoading, error } = useSWR(url, true);

  const isOnline = useOnline();

  useEffect(() => {
    if (!isOnline) window.alert("You are offline !!");
  }, [isOnline]);

  if (error) {
    return <div>{error}</div>;
  }
  if (isLoading) {
    return <div>Loading....</div>;
  }
  return (
    <>
      {todos?.map((todo, index) => (
        <Track key={index} todo={todo} />
      ))}
    </>
  );
}

function Track({ todo }: { todo: Todo }) {
  return (
    <div>
      Title : {todo.title}
      <br />
      Description : {todo.body}
    </div>
  );
}

export default App;
