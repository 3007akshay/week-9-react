import { useEffect, useState } from "react";

function App() {
  return (
    <div>
      <b>
        Hii there
      </b>
      <Counter />
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(function(){
    setInterval(function(){
      // setCount(count => count+1)
      //or
      setCount(function(count){
        return count +1;
      })

    },1000)
    console.log("mounted");
    
  },[])

  function increaseCount() {
    setCount(count + 1);
  }

 

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increaseCount}>Increase Count</button>
      
    </div>
  );
}

export default App;
