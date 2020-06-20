import React, { useEffect, useRef } from 'react';
import './App.css';
function App() {
  const name = useRef();
  const age = useRef();
  const sex = useRef();
  const submit = useRef();
  useEffect(() => {
    name.current.focus();
  }, [])
  function keyDownPressHandle(e) {
    if (e.keyCode === 13) {
      if (e.target.id === 'nameInput') {
        age.current.focus();
      } if (e.target.id === 'ageInput') {
        sex.current.focus();
      } if (e.target.id === 'sexInput') {
        submit.current.focus();
      }
    }
  }
  function onClickHandle() {
    alert('submittt');
  } return (
    <div className="App">
      <header className="App-header">
        <div className='row'>
          <span>Name</span> <input ref={name} id="nameInput" type="text" onKeyDown={keyDownPressHandle}></input>
        </div>
        <div className='row'>
          <span>age</span> <input ref={age} id="ageInput" type="number" onKeyDown={keyDownPressHandle}></input>
        </div>
        <div className='row'>
          <span>Sex</span> <input ref={sex} id="sexInput" type="checkbox" onKeyDown={keyDownPressHandle}></input>
        </div>
        <div className='row'>
          <button ref={submit} onClick={onClickHandle} id="submitButton" type="submit" onKeyDown={keyDownPressHandle}>Submit</button>
        </div>
      </header>
    </div>);
}
export default App;