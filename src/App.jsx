import { useState, useEffect } from 'react'

function App() {

  const [count, setCount] = useState(0);
  
useEffect (() => { 
  const timer =
  setInterval(() => setCount(count + 1), 1000);
  return () => clearInterval(timer);
 }, [count]);

  console.log(count);

  return (
    <>
      <h1>Hello World</h1>

     <p>The page has been opened for {count} seconds</p> 
      
    </>
  )
}

export default App
