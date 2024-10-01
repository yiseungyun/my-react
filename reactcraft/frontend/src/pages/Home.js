import { React } from "../react.js";
import Todos from "./Todos.js";

const Home = () => {
  const [count, setCount] = React.useState(0);
  const [count2, setCount2] = React.useState(0);

  return (
    <div key={'0'}>
      <h1 key={'1'}>{count}</h1>
      <button onClick={() => { setCount(count + 1) }}>
        증가
      </button>
      <button onClick={() => { setCount(count - 1) }}>
        감소
      </button>
      <h1>{count2}</h1>
      <button onClick={() => { setCount2(count2 + 1) }}>
        증가
      </button>
      <button onClick={() => { setCount2(count2 - 1) }}>
        감소
      </button>
      <Todos />
    </div>
  );
};

export default Home;