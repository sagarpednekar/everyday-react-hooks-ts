import { useEffect, useState } from "react";
import useOnline from "./hooks/useOnline";
import useSWR from "./hooks/useSWR";
import useMousePointer from "./hooks/useMousePointer";
import useInterval from "./hooks/useInterval";
import useDebounce from "./hooks/useDebounce";

type Todo = {
  title: string;
  body: string;
};

function App() {
  const url = "https://jsonplaceholder.typicode.com/posts";
  // const { data: todos, isLoading, error } = useSWR(url, true);

  const [value, setValue] = useState("");

  const debouncedValue = useDebounce(value, 700);

  const isOnline = useOnline();

  const mousePosition = useMousePointer();

  const displayCurrentTimestamp = () => {
    console.log("Current Date: ", new Date());
  };

  const timer = useInterval(displayCurrentTimestamp, 3000);

  useEffect(() => {
    if (!isOnline) window.alert("You are offline !!");
  }, [isOnline]);

  // if (error) {
  //   return <div>{error}</div>;
  // }
  // if (isLoading) {
  //   return <div>Loading....</div>;
  // }
  return (
    <>
      <p>
        Position is : {mousePosition.x}, {mousePosition.y}
      </p>

      <p>Timer is at : {timer}</p>

      <p>Debonced Value is : {debouncedValue}</p>
      <p>Debonced char length is : {debouncedValue.length}</p>

      <p>Value is : {value}</p>

      <p>value char length is : {value.length}</p>

      <input
        type="text"
        onChange={(e) => setValue(e.target.value)}
      />

      {/* {todos?.map((todo, index) => (
        <Track key={index} todo={todo} />
      ))} */}
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
