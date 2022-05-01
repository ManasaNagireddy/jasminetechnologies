import React from 'react';
import './App.css';
import One from './one'
import Two from './Two';
import Time from './Time';
function App() {
    const [incr, setInc] = React.useState(0);

    const increment = () => {
        setInc(incr+1);
    }
    const decrement = () => {
        setInc(incr-1);
    }
    const [NAME, setName] = React.useState("Jasmitha");
    function inputChange(event) {
        let nam = event.target.value;
        setName(nam);
    }
    
    return (
        <div>
            <Two />
            <Time />
            <div>               
                <h1>NAME</h1>
                <h1>  {incr}</h1>
                <br/>
               <button onClick={increment}>Increment</button>
                &nbsp;&nbsp;
                <button onClick={decrement}>Decrement</button>
                &nbsp;&nbsp;
                <button onClcick={e => setInc(0) }>RESET</button>
                <input type="text" name="urname" onChange={inputChange} />
                <h3>{NAME}</h3>
            </div>
            <div> <One />  </div>
        <div>
            Example....
        </div>
     </div>
  );
}

export default App;
