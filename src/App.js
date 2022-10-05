import { useRef, useEffect } from "react";
import "./styles.css";

function App() {
  const countRef = useRef(0);
  const incrementRef = useRef(null);
  const incrementLet = useRef(null);
  const spanRef = useRef(null);
  const spanLetRef = useRef(null);

  let count = 0;

  console.log("Renderizou");
  console.log(countRef.current, "countRef");
  console.log(count, "count");

  useEffect(() => {
    incrementRef.current.addEventListener("click", () => {
      countRef.current += 1;
      console.log("Valor de countRef", countRef.current);
    });

    incrementLet.current.addEventListener("click", () => {
      count += 1;
      console.log("Valor de count", count);
    });
  }, []);

  return (
    <div className="App">
      <div>
        <button ref={incrementRef}>Increment ref</button>
        <strong> Valor do ref:</strong>
        <span ref={spanRef}>{countRef.current}</span>
      </div>
      <div>
        <button ref={incrementLet}>Increment let</button>
        <strong> valor do let: </strong>
        <span ref={spanLetRef}>{count}</span>
      </div>
    </div>
  );
}

export default App;
