import React,{useEffect, useRef} from 'react'
import "./App.css"

const App = () => {
  const inputElememt = useRef();

  useEffect(() => {
    inputElememt.current.focus();
  
  },[])

  return (
    <div className='input-container'>
      <h1>custom focus to subject</h1>
      <input type={Text} placeholder = "name" ref={inputElememt}/>
      <input type = "number" placeholder='Enter number' />
    </div>
  )
}

export default App