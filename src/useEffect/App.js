import React, { useEffect, useState } from 'react';
const initXY = {
  x: null,
  y: null
}
function App() {
  const [xy, setXy] = useState(initXY);
  const [date, setDate] = useState(Date);

  useEffect(() => {
    let handle = setInterval(() => {
      setDate(Date);
    }, 1000)
    return () => {
      clearInterval(handle);
    }
  });
  function mousemoveHandle(e){
    setXy({
      x: e.clientX,
      y: e.clientY
    });
  }
  useEffect(() => {
    window.addEventListener('mousemove',mousemoveHandle);
    return ()=>{
      window.removeEventListener('mousemove',mousemoveHandle);
    }
  });
  useEffect(() => {
    const clickWindow = () => console.log('1')
    window.addEventListener('click', clickWindow)

    // return 1 function, sẽ được gọi ngay trước khi componentWillUnmount
    return () => {
      window.removeEventListener('click', clickWindow)
    }
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <h3>Use Effect example </h3>
        <p>Date & time : {date}</p>
        <p>{`x: ${xy.x} ~ y:${xy.y}`}</p>
      </header>
    </div>);
}
export default App;