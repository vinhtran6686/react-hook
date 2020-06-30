// example 3 test promise & promise hell
import React, { useEffect } from 'react';
function App() {
     useEffect(() => {
          function printNumber(number) {
               return new Promise((resolve, reject) => {
                    setTimeout(
                         () => {
                              if (number === 0) {
                                   reject();
                              } else {
                                   console.log('this is number:' + number);
                                   resolve();
                              }
                         },
                         1000
                    )
               })
          }
          printNumber(1)
               .then(() => printNumber(2))
               .then(() => printNumber(3))
               .then(() => printNumber(4))
               .then(() => printNumber(5))
               .then(() => printNumber(6))
               .then(() => printNumber(7))
               .then(() => printNumber(8))
               .reject(() => console.log("number &lt; 0"))
          // theo cách này vẫn phải truyền vào 1 hàm mà hàm đó lại gọi đến promise khác => promise hell 
     }, [])

     return (
          <div className="App">
               <header className="App-header">
                    <h2>Fetch Data</h2>
               </header>
          </div>);
}
export default App;