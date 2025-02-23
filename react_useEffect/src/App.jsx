import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);

  function increaseCount() {
    // setCount(count + 1);
    setCount((currentValue) => currentValue + 1);
  }

  useEffect(() => {
    setInterval(increaseCount, 1000);
  }, []);

  return (
    <div>
      <div style={{ display: "flex" }}>
        <div
          style={{
            backgroundColor: "red",
            borderRadius: 20,
            width: 20,
            hight: 25,
            paddingLeft: 10,
            paddingTop: 5,
          }}
        >
          {count}
        </div>
      </div>
      <img
        style={{ cursor: "pointer" }}
        src="https://cdn-icons-png.flaticon.com/512/472/472371.png"
        width={40}
      />

      <button onClick={increaseCount}>IncreaseCount</button>
    </div>
  );
}

export default App;
