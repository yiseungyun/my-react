import { useState, createElement } from "../react.js";

const Todos = () => {
  const [todos, setTodos] = useState('투두!');
  return (
    <div>
      <p>투두</p>
      <p>{todos}</p>
      <button onClick={() => {
        setTodos(todos + '투두!');
      }}>투두증가</button>
    </div>
  );
};

export default Todos;