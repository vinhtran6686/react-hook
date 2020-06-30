import React, { useEffect, useState } from 'react';
import axios from 'axios';
const init = {
     id: null,
     title: null,
}
function App() {
     const [profile, setProfile] = useState(init);
     async function getProfile() {
          const respons = await fetch('https://jsonplaceholder.typicode.com/todos/1');
          const res = await respons.json();
          setProfile({
               id: res.userId,
               title: res.title,
          })

          // const abc = await fetch('https://jsonplaceholder.typicode.com/todos/1')
          // .then(res => res.json())
          // .then(data => console.log(data))
          // đầu tiên khi chạy fetch nó sẽ trả về 1 cái Response cho mình (trong trường hợp này là res)
          // sau đó từ res dưới dạng luồng có thể đọc (readable stream) chúng ta sẽ convert thành dạng data có thể dùng (data consume)
          // bằng cách dùng hàng .json() ( res.json()). 
          // Lúc này khi có được data thì dùng hàm .then() tiếp theo để xử lý (data)

     }
     // more example 
     // async function getJSONAsync() {
     //      let json = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
     //      return json;
     // }
     useEffect(() => {
          getProfile();
          // more example 
          // getJSONAsync().then(result=> console.log(result));
     }, [])
    
     return (
          <div className="App">
               <header className="App-header">
                    <h2>Fetch Data</h2>
                    <p>{`${profile.id} + ${profile.title}`}</p>
               </header>
          </div>);
}
export default App;