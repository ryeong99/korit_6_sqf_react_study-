import { useEffect, useState } from "react"

function App () {
    const [number, setNumber ] = useState(0);
    const [number2, setNumber2 ] = useState(0);
    const [number3, setNumber3 ] = useState(0);

    
    useEffect(() => 
            {setNumber3(number *10);
            return() =>{} },
            [number, number2]);

    const handleButtonClick = (e) => {
        setNumber(a => a + 1);
    }

    const handleButtonClick2 = (e) => {
        setNumber2(b => b + 10);
    }

    return (
        <>
            <h1>{number}</h1>
            <h1>{number2}</h1>
            <h1>{number3}</h1>
            <button onClick={handleButtonClick}> 증가 </button>
            <button onClick={handleButtonClick2}> 증가2 </button>
        </>
    );
}

export default App;