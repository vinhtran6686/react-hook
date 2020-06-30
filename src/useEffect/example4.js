// example 3 test promise & promise hell
import React, { useEffect } from 'react';
function App() {
     useEffect(() => {
          function printNumber(number, callback) {
               setTimeout(
                    () => {
                         callback()
                    },
                    Math.floor(Math.random() * 100) + 1
               )
          }
     
          function printAll() {
               printNumber(1, function () {
                    console.log('this 1')
                    printNumber(2, function () {
                         console.log('this 2')
                         printNumber(3, function () {
                              console.log('this 3')
                              printNumber(4, function () {
                                   console.log('this 4')
                              })
                         })
                    })
               })
          }
          printAll();
          // cách này dẫn đến tình trạng khi lồng vào nhau quá nhiều sẽ bị callback hell 
     }, [])
    
     return (
          <div className="App">
               <header className="App-header">
                    <h2>Fetch Data</h2>
               </header>
          </div>);
}
export default App;