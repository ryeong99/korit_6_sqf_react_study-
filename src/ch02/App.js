import { useState } from "react";

function App() {
    const [number, setNumber] = useState(100); 
    const [name, setName] = useState(null); 
    
    setTimeout(100, function() {console.log("test")});

    console.log(number);

    if(number === 100) {
        setTimeout(() => setNumber(200),2000); 
    }

    if(number === 200) {
        setNumber(300);
        console.log(number);
    } 

    if(name === null){
        setName("김준일");
    }
    console.log(name);

    return <>
        <h1>Number 상태확인</h1>
        <h2>{number}</h2>
    </>
}

export default App;